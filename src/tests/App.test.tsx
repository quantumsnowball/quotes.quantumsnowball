import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material'
import App from '../components/App'


const defaultTheme = createTheme()

it('renders <App /> component', () => {
  render(
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  )
  const appTitle = screen.getByText(/Famous Quotes/i)
  expect(appTitle).toBeInTheDocument()
})
