import { useContext } from 'react'
import { states } from '../App'
import { styled } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { StyledText } from '../../types'


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

interface QuoteCardProps {
  content: StyledText,
  author: StyledText,
}

function QuoteCard({ content, author }: QuoteCardProps) {
  const {
    favorites: { pushFavorite }
  } = useContext(states)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <FlexColumnDiv className='quotecard-ctn'>
      <Card
        sx={{
          padding: isMobile ? 2 : 4,
          userSelect: 'none'
        }}>
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
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites"
            onClick={() => pushFavorite({ content, author })}>
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </FlexColumnDiv>
  )
}

export default QuoteCard
