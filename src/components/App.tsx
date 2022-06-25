import React, { useState } from 'react';
import '../styles/App.css';

//@ts-ignore
async function fetchQuotes(setContent, setAuthor) {
  const url = 'https://api.quotable.io/random'
  const quote = await fetch(url).then(resp => resp.json())
  setContent(quote.content)
  setAuthor("-- " + quote.author)
}

function App() {
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <p>{content}</p>
        <code>{author}</code>
        <button className="fetch" onClick={() => fetchQuotes(setContent, setAuthor)}>GET</button>
      </header>
    </div >
  );
}

export default App;

