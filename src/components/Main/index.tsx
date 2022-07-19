import { useEffect, useContext } from 'react'
import Container from '@mui/material/Container'
import { states } from '../App'
import QuoteCard from './QuoteCard'
import NextButton from './NextButton'
import { Entry } from '../../types'


function Main() {
  const {
    entries: { entries, pushEntry }
  } = useContext(states)

  async function fetchQuote() {
    const url = 'https://api.quotable.io/random'
    const quote = await fetch(url).then(resp => resp.json())
    pushEntry({
      content: quote.content,
      author: quote.author,
    })
  }
  // on mount
  useEffect(() => { fetchQuote() }, [])

  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        flexGrow: 1,
        textAlign: 'left',
        overflow: 'auto'
      }}

    >
      {entries
        .map((entry: Entry, i: number) =>
          <QuoteCard
            key={i}
            content={entry.content}
            author={entry.author}
          />)}
      <NextButton fetchQuote={fetchQuote} />
    </Container>
  )
}

export default Main
