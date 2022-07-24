import {
  Box,
  Button,
  CardActions,
  IconButton,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Entry } from '../../../../types'
import { useDispatch } from 'react-redux'
import { explorerActions } from '../../../../redux/slices/explorerSlice'
import { favoritesActions } from '../../../../redux/slices/favoritesSlice'
import QuoteCard from './QuoteView'


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
