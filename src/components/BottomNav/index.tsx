import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import ExploreIcon from '@mui/icons-material/Explore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import NextButton from './NextButton'
import { getRandomFont } from '../../styles/fonts'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { entriesActions } from '../../redux/slices/entriesSlice'


function BottomNav() {
  const dispatch = useDispatch()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [value, setValue] = useState(0)

  async function fetchQuote() {
    const url = 'https://api.quotable.io/random'
    const quote = await fetch(url).then(resp => resp.json())
    dispatch(entriesActions.pushEntry({
      uuidv4: uuidv4(),
      content: { text: quote.content, font: getRandomFont() },
      author: { text: quote.author, font: getRandomFont() },
      metadata: { expanded: false }
    }))
  }

  useEffect(() => { fetchQuote() }, [])

  return (
    <>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue)
        }}
        sx={{
          minWidth: isMobile ? 0 : theme.breakpoints.values.sm,
          alignSelf: isMobile ? "stretch" : "center"
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/explorer"
          label="Explorer"
          icon={<ExploreIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/favorites"
          label="Favorites"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
      <NextButton fetchQuote={fetchQuote} />
    </>
  )
}

export default BottomNav
