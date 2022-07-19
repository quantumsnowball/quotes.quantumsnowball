import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'


interface NextButtonProps {
  fetchQuote: () => Promise<void>
}

function NextButton({ fetchQuote }: NextButtonProps) {
  return (
    <Box sx={{
      position: 'fixed',
      bottom: '15%',
      left: '50%',
      transform: "translateX(-50%)"
    }}>
      <Fab
        variant="extended"
        color="primary"
        aria-label="add"
        // size="large"
        onClick={() => fetchQuote()}
      >
        <AddIcon sx={{ mr: 1 }} />
        Next Quote
        <AddIcon sx={{ mr: 1 }} />
      </Fab>
    </Box>
  )
}

export default NextButton
