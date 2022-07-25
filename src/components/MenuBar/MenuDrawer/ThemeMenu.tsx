import { List, Collapse } from '@mui/material'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../../redux/slices/layoutSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { MenuButton, MenuButtonGrouper } from './common'


function ThemeMenu() {
  const menuThemeExpanded = useSelector((s: RootState) => s.layout.menuThemeExpanded)
  const dispatch = useDispatch()

  return (
    <>
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
    </>
  )
}

export default ThemeMenu
