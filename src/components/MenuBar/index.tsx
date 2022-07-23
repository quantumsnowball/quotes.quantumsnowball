import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useTheme } from '@mui/material'
import { useDispatch } from 'react-redux'
import { themeActions } from '../../redux/slices/themeSlice'


function MenuBar() {
  const dispatch = useDispatch()
  const theme = useTheme()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}>
          Famous Quotes
        </Typography>
        <IconButton onClick={() => dispatch(themeActions.toggleMode())}>
          {theme.palette.mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default MenuBar
