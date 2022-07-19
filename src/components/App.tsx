import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import '../styles/App.css'
import Main from '../components/Main'


function App() {
  return (
    <Container
      disableGutters={true}
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#6c692a',
        color: 'white',
      }}
    >
      <Main />
    </Container>
  )
}

export default App

