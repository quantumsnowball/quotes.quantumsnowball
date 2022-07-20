import { useContext } from 'react'
import { states } from '../App'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import GetAppIcon from '@mui/icons-material/GetApp'


interface NextButtonProps {
  fetchQuote: () => Promise<void>
}

function NextButton({ fetchQuote }: NextButtonProps) {
  const {
    page: { page }
  } = useContext(states)

  return (
    <Box sx={{
      display: page === 'favorites' ? 'none' : 'inherit',
      position: 'absolute',
      bottom: 100,
      left: '50%',
      transform: "translateX(-50%)"
    }}>
      <Fab
        variant="extended"
        color="primary"
        aria-label="new"
        onClick={() => fetchQuote()}
      >
        <GetAppIcon />
        Get New Quote
      </Fab>
    </Box>
  )
}

export default NextButton
