import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { StyledText } from '../../types'


const FlexColumnDiv = styled.div`
  margin: 2%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 24px 31px rgba(1,1,0,0.5);
`

interface QuoteCardProps {
  content: StyledText,
  author: StyledText,
}

function QuoteCard({ content, author }: QuoteCardProps) {
  return (
    <FlexColumnDiv>
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
