import { Stack, CardContent, Typography, Skeleton } from '@mui/material'
import { StyledText } from '../../../../../types'


interface ContentViewProps {
  quote: StyledText | null,
  author: StyledText | null
  isMobile: boolean
}

function ContentView({ quote, author, isMobile }: ContentViewProps) {
  return (
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
          {[...Array(7)].map((_, i) => <Skeleton key={i} />)}
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
  )
}

export default ContentView
