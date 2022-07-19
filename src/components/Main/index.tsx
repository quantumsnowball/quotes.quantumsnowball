import { useState, useEffect } from 'react'
import styled from '@emotion/styled'


const Div = styled.div`
  margin: 10%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 50px;
  box-shadow: 0 24px 31px rgba(1,1,0,0.5);
  background-color: #e6e183;
`

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
    <Div>
      <div className="header">
        <div className="content">{content}</div>
        <div className="author">{author}</div>
      </div>
      <div className="footer">
        <button className="button" onClick={() => fetchQuote()}>Next Quote</button>
      </div>
    </Div>
  )
}

export default Main
