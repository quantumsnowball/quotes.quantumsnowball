import { useTheme } from '@mui/material/styles'
import {
  Container, Stack,
  Card, CardContent, CardMedia,
  Typography,
  Skeleton,
  useMediaQuery, styled
} from '@mui/material'
import { CardContentProps } from './'


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

  const media =
    image ?
      <CardMedia
        component="img"
        height="200"
        image={image}
      />
      :
      <Skeleton variant="rectangular" height={200} />
  const content =
    <CardContent
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItem: 'stretch'
      }}>
      {quote ?
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{
            fontFamily: quote.font
          }}>
          {quote.text}
        </Typography>
        :
        <Stack>
          {[...Array(7)].map(_ => <Skeleton />)}
        </Stack>}
      {author ?
        <Typography
          variant={isMobile ? "h6" : "h4"}
          sx={{
            textAlign: 'right',
            marginTop: isMobile ? "2%" : "5%",
            marginBottom: '1%',
            fontFamily: author.font,
            fontStyle: 'italic',
            fontWeight: 'bold'
          }}>
          {author.text}
        </Typography>
        :
        <Skeleton height="100px" width="40%" sx={{ alignSelf: 'flex-end' }} />}
    </CardContent>

  return (
    <FlexColumnDiv className='quotecard-ctn'>
      <Card
        onClick={toggleExpanded}
        sx={{
          padding: isMobile ? 2 : 4,
          userSelect: 'none'
        }}>
        {media}
        {content}
        {expanded ? cardActions : null}
      </Card>
    </FlexColumnDiv>
  )
}

export default QuoteView 
