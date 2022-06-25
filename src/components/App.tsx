import React, { useEffect, useState } from 'react';
import '../styles/App.css';

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
    <div className="App">
      <div className="card">
        <div className="header">
          <div className="content">{content}</div>
          <div className="author">{author}</div>
        </div>
        <div className="footer">
          <button className="button" onClick={() => fetchQuote()}>Next Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;

