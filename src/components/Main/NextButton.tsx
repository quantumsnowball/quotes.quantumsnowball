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
      bottom: 50,
      right: 50
    }}>
      <Fab
        color="primary"
        aria-label="add"
        // size="large"
        onClick={() => fetchQuote()}
      >
        <AddIcon />
      </Fab>
    </Box>
  )
}

export default NextButton
