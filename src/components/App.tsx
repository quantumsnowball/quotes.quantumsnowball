import React, { useState } from 'react';
import '../styles/App.css';

//@ts-ignore
async function fetchQuotes(setContent, setAuthor) {
  const url = 'https://api.quotable.io/random'
  const quote = await fetch(url).then(resp => resp.json())
  setContent(quote.content)
  setAuthor(quote.author)
}

function App() {
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")

  return (
    <div className="App">
      <div className="card">
        <div className="header">
          <div className="content">{content}</div>
          <div className="author">{author}</div>
        </div>
        <div className="footer">
          <button className="button" onClick={() => fetchQuotes(setContent, setAuthor)}>Next Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;

