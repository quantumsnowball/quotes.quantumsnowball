import { useState, useEffect } from 'react'
import QuoteCard from './QuoteCard'
import NextButton from './NextButton'


function Main() {
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
    <>
      <QuoteCard
        content={content}
        author={author}
      />
      <NextButton fetchQuote={fetchQuote} />
    </>
  )
}

export default Main
