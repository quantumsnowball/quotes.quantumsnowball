import {
  Box,
  Button,
  CardActions,
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
      <Button
        color="success"
        startIcon={<FavoriteIcon />}
        onClick={e => {
          e.stopPropagation()
          dispatch(favoritesActions.pushEntry({ ...entry, expanded: false }))
          dispatch(explorerActions.removeEntry(index))
        }}>
        SAVE
      </Button>
      <Box sx={{ flexGrow: 1 }} />
      <Button
        color="error"
        startIcon={<DeleteIcon />}
        onClick={e => {
          e.stopPropagation()
          dispatch(explorerActions.removeEntry(index))
        }}>
        DELETE
      </Button>
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
      <Button
        color="error"
        startIcon={<DeleteIcon />}
        onClick={e => {
          e.stopPropagation()
          dispatch(favoritesActions.removeEntry(index))
        }}>
        DELETE
      </Button>
    </CardActions>

  const toggleExpanded = () => dispatch(favoritesActions.toggleExpanded(index))

  return <QuoteCard {...{ ...props, cardActions, toggleExpanded }} />
}
