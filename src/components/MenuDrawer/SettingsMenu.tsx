import { List, Collapse } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import SystemUpdateIcon from '@mui/icons-material/SystemUpdate'
import RestoreIcon from '@mui/icons-material/Restore'
import { useDispatch } from 'react-redux'
import { layoutActions } from '../../redux/slices/layoutSlice'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { MenuButton, MenuButtonGrouper } from './common'


const reloadApp = () => {
  window.location.reload()
}

const resetApp = () => {
  window.sessionStorage.clear()
  window.localStorage.clear()
  window.location.reload()
}

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
            text='Reload App'
            onClick={reloadApp}
            level={1}
          />
          <MenuButton
            icon={<RestoreIcon />}
            text='Reset App Data'
            onClick={resetApp}
            level={1}
          />
        </List>
      </Collapse>
    </>
  )
}

export default SettingsMenu

