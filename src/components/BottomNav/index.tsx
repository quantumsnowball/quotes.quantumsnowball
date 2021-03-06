import { useState, useCallback } from 'react'
import { v4 } from 'uuid'
import { useTheme } from '@mui/material/styles'
import {
  BottomNavigation, BottomNavigationAction,
  useMediaQuery,
} from '@mui/material'
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

  return (
    <>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue)
        }}
        sx={isMobile ? {
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          minWidth: 0,
          minHeight: "56px",
        } : {
          minWidth: theme.breakpoints.values.sm,
          minHeight: "56px",
          alignSelf: "center"
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
