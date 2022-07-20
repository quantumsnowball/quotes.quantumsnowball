import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import ExploreIcon from '@mui/icons-material/Explore'
import FavoriteIcon from '@mui/icons-material/Favorite'


function BottomNav() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [value, setValue] = useState(0)

  return (
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
        label="Explorer"
        icon={<ExploreIcon />}
        onClick={() => alert('Explorer')}
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon />}
        onClick={() => alert('Favorites')}
      />
    </BottomNavigation>
  )
}

export default BottomNav
