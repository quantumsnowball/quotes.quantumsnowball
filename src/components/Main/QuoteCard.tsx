import { CardMedia, styled } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import DeleteIcon from '@mui/icons-material/Delete'
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
  const { content, author, metadata, cardActions, toggleExpanded } = props
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
        <CardMedia
          component="img"
          height="200"
          image={metadata.image}
        />
        <CardContent>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            sx={{
              fontFamily: content.font
            }}>
            {content.text}
          </Typography>
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
        </CardContent>
        {metadata.expanded ? cardActions : null}
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
          dispatch(favoritesActions.pushEntry({
            ...entry, metadata: { ...entry.metadata, expanded: false }
          }))
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
