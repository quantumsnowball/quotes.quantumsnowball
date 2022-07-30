import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import BottomNav from '../../components/BottomNav'
import { BrowserRouter } from 'react-router-dom'


it('renders <BottomNav /> component', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <BottomNav />
      </BrowserRouter>
    </Provider>
  )
  const explorerText = screen.getByText(/Explorer/i)
  const favoritesText = screen.getByText(/Favorites/i)
  expect(explorerText).toBeInTheDocument()
  expect(favoritesText).toBeInTheDocument()
})
