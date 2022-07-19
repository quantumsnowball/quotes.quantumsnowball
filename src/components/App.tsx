import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import '../styles/App.css'

function App() {
  // hooks
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")

  // fetch
  async function fetchQuote() {
    const url = 'https://api.quotable.io/random'
    const quote = await fetch(url).then(resp => resp.json())
    setContent(quote.content)
    setAuthor(quote.author)
  }

  // on mount
  useEffect(() => { fetchQuote() }, [])

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
      <div className="card">
        <div className="header">
          <div className="content">{content}</div>
          <div className="author">{author}</div>
        </div>
        <div className="footer">
          <button className="button" onClick={() => fetchQuote()}>Next Quote</button>
        </div>
      </div>
    </Container>
  )
}

export default App

