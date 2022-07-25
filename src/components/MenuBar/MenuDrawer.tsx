import {
  Box, Divider,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  SwipeableDrawer, Collapse
} from '@mui/material'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import InfoIcon from '@mui/icons-material/Info'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../redux/slices/layoutSlice'
import { useState } from 'react'


const MenuTitle = (
  { title }:
    { title: string }
) =>
  <List>
    <ListItem>
      <ListItemText primary={title} />
    </ListItem>
  </List>

const MenuLabel = (
  { icon, label, level = 0, primaryTypographyProps }:
    { icon: JSX.Element, label: string, level?: number, primaryTypographyProps?: object }
) =>
  <ListItem key={label} disablePadding sx={{ paddingLeft: 2 + level * 2 }}>
    <ListItemIcon>
      {icon}
    </ListItemIcon>
    <ListItemText primary={label} primaryTypographyProps={primaryTypographyProps} />
  </ListItem>

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
  const dispatch = useDispatch()
  const menuThemeExpanded = useSelector((s: RootState) => s.layout.menuThemeExpanded)
  const menuAboutExpanded = useSelector((s: RootState) => s.layout.menuAboutExpanded)

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
        <MenuButtonGrouper
          icon={<HelpOutlineIcon />}
          text="About Quotes"
          open={menuAboutExpanded}
          toggle={() => dispatch(layoutActions.toggleMenuAboutExpanded())}
        />
        <Collapse in={menuAboutExpanded} timeout="auto" unmountOnExit>
          <List>
            <MenuLabel
              icon={<InfoIcon />}
              label={`version ${process.env.REACT_APP_VERSION}`}
              level={1}
            />
            <MenuLabel
              icon={<InfoIcon />}
              label={`@2022\nQuantum Snowball`}
              level={1}
              primaryTypographyProps={{ variant: 'caption' }}
            />
          </List>
        </Collapse>
      </Box>
    </SwipeableDrawer>
  )
}

export default MenuDrawer
