import {
  Box,
  Fab
} from '@mui/material'
import GetAppIcon from '@mui/icons-material/GetApp'


interface NextButtonProps {
  fetchQuote: () => Promise<void>
}

function NextButton({ fetchQuote }: NextButtonProps) {
  return (
    <Box sx={{
      display: window.location.pathname === '/favorites' ? 'none' : 'inherit',
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
