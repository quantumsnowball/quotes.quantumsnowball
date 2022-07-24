import { useTheme } from '@mui/material/styles'
import {
  Container, Stack,
  Card, CardContent,
  Typography,
  Skeleton,
  useMediaQuery, styled
} from '@mui/material'
import { CardContentProps } from '../'
import MediaView from './MediaView'
import ContentView from './ContentView'


// .quotecard-ctn
const FlexColumnDiv = styled(Container)`
  /* center itself in parent flex ctn */
  align-self: center;
  /* minimal margin between cards */
  padding: 10px;
  /* flex display card content, spread out content horizontal */
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`

interface QuoteViewProps extends CardContentProps {
  cardActions: JSX.Element,
  toggleExpanded: () => void
}

function QuoteView(props: QuoteViewProps) {
  const { quote, author, image, expanded, cardActions, toggleExpanded } = props
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))


  return (
    <FlexColumnDiv className='quotecard-ctn'>
      <Card
        onClick={toggleExpanded}
        sx={{
          padding: isMobile ? 2 : 4,
          userSelect: 'none'
        }}>
        <MediaView {...{ image }} />
        <ContentView {...{ quote, author, isMobile }} />
        {expanded ? cardActions : null}
      </Card>
    </FlexColumnDiv>
  )
}

export default QuoteView 
