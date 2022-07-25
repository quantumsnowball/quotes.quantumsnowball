import { List, Collapse } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate'
import RestoreIcon from '@mui/icons-material/Restore'
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../../redux/slices/layoutSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { MenuButton, MenuButtonGrouper } from './common'


function SettingsMenu() {
  const menuSettingsExpanded = useSelector((s: RootState) => s.layout.menuSettingsExpanded)
  const dispatch = useDispatch()

  return (
    <>
      <MenuButtonGrouper
        icon={<SettingsIcon />}
        text="Settings"
        open={menuSettingsExpanded}
        toggle={() => dispatch(layoutActions.toggleMenuSettingsExpanded())}
      />
      <Collapse in={menuSettingsExpanded} timeout="auto" unmountOnExit>
        <List>
          <MenuButton
            icon={<SystemUpdateIcon />}
            text='Update App'
            onClick={() => alert('This will update the app to latest version.')}
            level={1}
          />
          <MenuButton
            icon={<RestoreIcon />}
            text='Reset App'
            onClick={() => alert('This will reset app to default state. All settings will be lost!')}
            level={1}
          />
        </List>
      </Collapse>
    </>
  )
}

export default SettingsMenu

