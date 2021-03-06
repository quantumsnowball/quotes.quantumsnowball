import { Box, Divider, SwipeableDrawer } from '@mui/material'
import { MenuTitle } from './common'
import ThemeMenu from './ThemeMenu'
import AboutMenu from './AboutMenu'
import SettingsMenu from './SettingsMenu'


interface MenuDrawerProps {
  menuOpen: boolean,
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MenuDrawer({ menuOpen, setMenuOpen }: MenuDrawerProps) {
  return (
    <SwipeableDrawer
      anchor="left"
      open={menuOpen}
      onOpen={() => setMenuOpen(true)}
      onClose={() => setMenuOpen(false)}
    >
      <Box
        sx={{
          width: 250
        }}
        role="presentation"
        onClick={() => setMenuOpen(false)}
        onKeyDown={() => setMenuOpen(false)}
      >
        <MenuTitle title={`Quote, v${process.env.REACT_APP_VERSION}`} />
        <Divider />
        <ThemeMenu />
        <Divider />
        <SettingsMenu />
        <Divider />
        <AboutMenu />
      </Box>
    </SwipeableDrawer>
  )
}

export default MenuDrawer
