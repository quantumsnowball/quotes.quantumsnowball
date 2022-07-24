import { useTheme } from '@mui/material/styles'
import {
  Box, Container, Stack,
  Card, CardContent, CardActions, CardMedia,
  Typography,
  Skeleton,
  IconButton,
  useMediaQuery, styled
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Delete'
import { Entry } from '../../types'
import { useDispatch } from 'react-redux'
import { explorerActions } from '../../redux/slices/explorerSlice'
import { favoritesActions } from '../../redux/slices/favoritesSlice'


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

interface QuoteCardProps extends CardContentProps {
  cardActions: JSX.Element,
  toggleExpanded: () => void
}

function QuoteCard(props: QuoteCardProps) {
  const { quote, author, image, expanded, cardActions, toggleExpanded } = props
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const media = image ?
    <CardMedia
      component="img"
      height="200"
      image={image}
    /> : <Skeleton variant="rectangular" height={200} />
  const content =
    <CardContent>
      {quote ? <Typography
        variant={isMobile ? "h6" : "h5"}
        sx={{
          fontFamily: quote.font
        }}>
        {quote.text}
      </Typography> : null}
      {author ? <Typography
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
      </Typography> :
        <Stack>
          {[...Array(7)].map(_ => <Skeleton />)}
        </Stack>
      }
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

export interface CardContentProps extends Entry {
  index: number,
}

export function ExplorerQuoteCard(props: CardContentProps) {
  const dispatch = useDispatch()
  const { index, ...entry } = props

  const cardActions =
    <CardActions disableSpacing>
      <IconButton
        color="secondary"
        aria-label="add to favorites"
        onClick={e => {
          e.stopPropagation()
          dispatch(favoritesActions.pushEntry({ ...entry, expanded: false }))
          dispatch(explorerActions.removeEntry(index))
        }}>
        <FavoriteIcon />
      </IconButton>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton
        color="error"
        aria-label="delete from explorer"
        onClick={e => {
          e.stopPropagation()
          dispatch(explorerActions.removeEntry(index))
        }}>
        <DeleteIcon />
      </IconButton>
    </CardActions>

  const toggleExpanded = () => dispatch(explorerActions.toggleExpanded(index))

  return <QuoteCard {...{ ...props, cardActions, toggleExpanded }} />
}

export function FavoritesQuoteCard(props: CardContentProps) {
  const dispatch = useDispatch()
  const { index } = props

  const cardActions =
    <CardActions disableSpacing>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton
        color="error"
        aria-label="delete from favorites"
        onClick={e => {
          e.stopPropagation()
          dispatch(favoritesActions.removeEntry(index))
        }}>
        <DeleteIcon />
      </IconButton>
    </CardActions>

  const toggleExpanded = () => dispatch(favoritesActions.toggleExpanded(index))

  return <QuoteCard {...{ ...props, cardActions, toggleExpanded }} />
}
