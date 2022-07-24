import { useState, useEffect, useCallback } from 'react'
import { v4 } from 'uuid'
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
import { explorerActions } from '../../redux/slices/explorerSlice'


function BottomNav() {
  const dispatch = useDispatch()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [value, setValue] = useState(0)

  const fetchQuote = useCallback(async () => {
    const uuidv4 = v4()
    // create empty Entry first
    dispatch(explorerActions.pushEntry({
      uuidv4,
      quote: null,
      author: null,
      image: null,
      expanded: false,
    }))
    // fetch Content and then fill the Entry
    await fetch('https://api.quotable.io/random')
      .then(async resp => {
        const quote = await resp.json()
        dispatch(explorerActions.updateContent({
          uuidv4,
          content: {
            quote: { text: quote.content, font: getRandomFont() },
            author: { text: quote.author, font: getRandomFont() },
          }
        }))
      })
    // fatch the Media and then fill the Entry
    await fetch(`https://picsum.photos/640/480/?img=${performance.now()}`)
      .then(async resp => {
        const image = resp.url
        dispatch(explorerActions.updateMedia({ uuidv4, media: { image } }))
      })
  }, [dispatch])

  useEffect(() => { fetchQuote() }, [fetchQuote])

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
          minHeight: "56px",
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
