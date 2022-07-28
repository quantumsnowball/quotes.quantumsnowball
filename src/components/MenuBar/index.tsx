import {
  AppBar, Toolbar,
  Typography,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useTheme } from '@mui/material'
import { useDispatch } from 'react-redux'
import { themeActions } from '../../redux/slices/themeSlice'
import MenuDrawer from '../MenuDrawer'
import { useBoolean } from '../../hooks/useBoolean'


function MenuBar() {
  const dispatch = useDispatch()
  const theme = useTheme()
  const {
    value: menuOpen,
    setValue: setMenuOpen,
    toggleValue: toggleMenuOpen } = useBoolean(false)

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleMenuOpen()}
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
            {theme.palette.mode === 'light' ?
              <LightModeIcon sx={{ color: '#fff' }} /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <MenuDrawer {...{ menuOpen, setMenuOpen }} />
    </>
  )
}

export default MenuBar
