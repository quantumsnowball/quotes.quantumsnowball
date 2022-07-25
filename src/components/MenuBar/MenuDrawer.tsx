import {
  Box, Divider,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  SwipeableDrawer
} from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ColorLensIcon from '@mui/icons-material/ColorLens'


const MenuTitle = ({ title }: { title: string }) =>
  <List>
    <ListItem>
      <ListItemText primary={title} />
    </ListItem>
  </List>

const MenuButton = ({ icon, text, onClick }:
  { icon: JSX.Element, text: string, onClick?: () => void | null }) =>
  <ListItem key={text} disablePadding>
    <ListItemButton onClick={onClick}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>

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
        <MenuTitle title='Famous Quote' />
        <Divider />
        <List>
          <MenuButton
            icon={<ColorLensIcon />}
            text='Default Theme'
            onClick={() => alert('Slecting default theme')}
          />
        </List>
        <Divider />
        <MenuButton
          icon={<InboxIcon />}
          text='About'
          onClick={() => alert('Famous Quotes Version 1.3.0')}
        />
      </Box>
    </SwipeableDrawer>
  )
}

export default MenuDrawer
