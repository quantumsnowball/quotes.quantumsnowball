import { useContext } from 'react'
import { states } from '../App'
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
import { StyledText } from '../../types'
import { useBoolean } from '../../hooks/useBoolean'


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

interface CardContentProps {
  id: number,
  content: StyledText,
  author: StyledText,
}

interface QuoteCardProps extends CardContentProps {
  cardActions: JSX.Element
}

function QuoteCard({ content, author, cardActions }: QuoteCardProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const {
    value: expanded,
    toggleValue: toggleExpanded
  } = useBoolean(false)

  return (
    <FlexColumnDiv className='quotecard-ctn'>
      <Card
        sx={{
          padding: isMobile ? 2 : 4,
          userSelect: 'none'
        }}>
        <CardContent
          onClick={() => toggleExpanded()}>
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


export function ExplorerQuoteCard(props: CardContentProps) {
  const {
    entries: { removeEntry },
    favorites: { pushFavorite }
  } = useContext(states)

  const cardActions =
    <CardActions disableSpacing>
      <IconButton
        color="secondary"
        aria-label="add to favorites"
        onClick={() => pushFavorite({ content: props.content, author: props.author })}>
        <FavoriteIcon />
      </IconButton>
      <Box sx={{flexGrow: 1}}/>
      <IconButton
        color="error"
        aria-label="delete from explorer"
        onClick={() => removeEntry(props.id)}>
        <DeleteIcon />
      </IconButton>
    </CardActions>

  return <QuoteCard {...{ ...props, cardActions }} />
}

export function FavoritesQuoteCard(props: CardContentProps) {
  const {
    favorites: { removeFavorite }
  } = useContext(states)

  const cardActions =
    <CardActions disableSpacing>
      <Box sx={{flexGrow: 1}}/>
      <IconButton
        color="error"
        aria-label="delete from favorites"
        onClick={() => removeFavorite(props.id)}>
        <DeleteIcon />
      </IconButton>
    </CardActions>

  return <QuoteCard {...{ ...props, cardActions }} />
}
