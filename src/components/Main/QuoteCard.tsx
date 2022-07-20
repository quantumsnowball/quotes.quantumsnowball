import { styled } from '@mui/material'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { StyledText } from '../../types'


// .quotecard-ctn
const FlexColumnDiv = styled(Container)`
  /* center itself in parent flex ctn */
  align-self: center;
  /* minimal margin between cards */
  margin: 10px;
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
  return (
    <FlexColumnDiv className='quotecard-ctn'>
      <Card
        sx={{
          padding: 5
        }}>
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              fontFamily: content.font
            }}>
            {content.text}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textAlign: 'right',
              margin: '5% 0 1% 0',
              fontFamily: author.font,
              fontStyle: 'italic',
              fontWeight: 'bold'
            }}>
            {author.text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => alert('TODO')}>SAVE TO LIBRARY</Button>
        </CardActions>
      </Card>
    </FlexColumnDiv>
  )
}

export default QuoteCard
