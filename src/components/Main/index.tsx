import { useState, useEffect, useContext } from 'react'
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
    <>
      {entries
        .map((entry: Entry, i: number) =>
          <QuoteCard
            key={i}
            content={entry.content}
            author={entry.author}
          />)}
      <NextButton fetchQuote={fetchQuote} />
    </>
  )
}

export default Main
