import {
  Box, Divider,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  SwipeableDrawer, Collapse
} from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../redux/slices/layoutSlice'


const MenuTitle = (
  { title }:
    { title: string }
) =>
  <List>
    <ListItem>
      <ListItemText primary={title} />
    </ListItem>
  </List>

const MenuButton = (
  { icon, text, onClick, level = 0 }:
    { icon: JSX.Element, text: string, onClick?: () => void | null, level?: number }
) =>
  <ListItem key={text} disablePadding>
    <ListItemButton onClick={onClick} sx={{ paddingLeft: 2 + level * 2 }}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem >

const MenuButtonGrouper = (
  { icon, text, open, toggle }:
    { icon: JSX.Element, text: string, open: boolean, toggle: () => void }
) =>
  <ListItem key={text} disablePadding>
    <ListItemButton onClick={e => {
      e.stopPropagation()
      toggle()
    }}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
  </ListItem>

interface MenuDrawerProps {
  menuOpen: boolean,
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MenuDrawer({ menuOpen, setMenuOpen }: MenuDrawerProps) {
  const menuThemeExpanded = useSelector((s: RootState) => s.layout.menuThemeExpanded)
  const dispatch = useDispatch()

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
        <MenuButtonGrouper
          icon={<ColorLensIcon />}
          text="Theme"
          open={menuThemeExpanded}
          toggle={() => dispatch(layoutActions.toggleMenuThemeExpanded())}
        />
        <Collapse in={menuThemeExpanded} timeout="auto" unmountOnExit>
          <List>
            <MenuButton
              icon={<ColorLensIcon />}
              text='Default Theme'
              onClick={() => alert('Slecting default theme')}
              level={1}
            />
          </List>
        </Collapse>
        <Divider />
        <MenuButton
          icon={<HelpOutlineIcon />}
          text='About'
          onClick={() => alert(`Quotes ${process.env.REACT_APP_VERSION}`)}
        />
      </Box>
    </SwipeableDrawer>
  )
}

export default MenuDrawer
