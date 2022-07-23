import { styled } from '@mui/material'
import { ExplorerQuoteCard, FavoritesQuoteCard, CardContentProps } from './QuoteCard'
import { Entry } from '../../types'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'


interface PageProps {
  items: Entry[],
  Card: (props: CardContentProps) => JSX.Element
}

function Page({ items, Card }: PageProps) {
  return (
    <>
      {items.map((entry: Entry, i: number) =>
        <Card key={entry.uuidv4} index={i} {...entry} />)}
    </>
  )
}

// .main-ctn
const ScrollableDiv = styled('div')`
  /* take all flex space from parents */
  flex-grow: 1;
  /* flex column display all quote cards */
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-item: stretch;
  align-content: center;
  /* allow scrollbar here*/
  overflow: auto;
  /* text */
  text-align: left;
`

function Main() {
  const entries = useSelector(((s: RootState) => s.explorer.entries))
  const favorites = useSelector(((s: RootState) => s.favorities.favorites))

  const explorerPage = <Page items={entries} Card={ExplorerQuoteCard} />
  const favoritesPage = <Page items={favorites} Card={FavoritesQuoteCard} />

  return (
    <>
      <ScrollableDiv className='main-ctn'>
        <Routes>
          <Route path="/" element={explorerPage} />
          <Route path="/explorer" element={explorerPage} />
          <Route path="/favorites" element={favoritesPage} />
        </Routes>
      </ScrollableDiv>
    </>
  )
}

export default Main
