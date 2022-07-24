import { CardContentProps } from './QuoteCard'
import { Entry } from '../../../types'


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

export default Page
