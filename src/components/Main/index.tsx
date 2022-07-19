import { useState, useEffect } from 'react'


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
    <div className="card">
      <div className="header">
        <div className="content">{content}</div>
        <div className="author">{author}</div>
      </div>
      <div className="footer">
        <button className="button" onClick={() => fetchQuote()}>Next Quote</button>
      </div>
    </div>
  )
}

export default Main
