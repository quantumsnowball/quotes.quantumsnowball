import { styled } from '@mui/material'
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
import { RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { entriesActions } from '../../redux/slices/entriesSlice'
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
  expanded: boolean,
  toggleExpanded: () => void
}

function QuoteCard({ content, author, cardActions, expanded, toggleExpanded }: QuoteCardProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <FlexColumnDiv className='quotecard-ctn'>
      <Card
        sx={{
          padding: isMobile ? 2 : 4,
          userSelect: 'none'
        }}>
        <CardContent
          onClick={toggleExpanded}>
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
        onClick={() => {
          dispatch(favoritesActions.pushEntry({
            ...entry, metadata: { ...entry.metadata, expanded: false }
          }))
          dispatch(entriesActions.removeEntry(index))
        }}>
        <FavoriteIcon />
      </IconButton>
      <Box sx={{ flexGrow: 1 }} />
      <IconButton
        color="error"
        aria-label="delete from explorer"
        onClick={() => dispatch(entriesActions.removeEntry(index))}>
        <DeleteIcon />
      </IconButton>
    </CardActions>

  const expanded = useSelector((s: RootState) => s.entries.entries[index].metadata.expanded)

  const toggleExpanded = () => dispatch(entriesActions.toggleExpanded(index))

  return <QuoteCard {...{ ...props, cardActions, expanded, toggleExpanded }} />
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
        onClick={() => dispatch(favoritesActions.removeEntry(index))}>
        <DeleteIcon />
      </IconButton>
    </CardActions>

  const expanded = useSelector((s: RootState) => s.favorities.favorites[index].metadata.expanded)

  const toggleExpanded = () => dispatch(favoritesActions.toggleExpanded(index))

  return <QuoteCard {...{ ...props, cardActions, expanded, toggleExpanded }} />
}
