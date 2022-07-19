import '../styles/App.css'
import styled from '@emotion/styled'
import Main from '../components/Main'


const Div = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  background-color: #6c692a;
  color: white;
`

function App() {
  return (
    <Div >
      <Main />
    </Div>
  )
}

export default App

