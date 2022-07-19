import styled from '@emotion/styled'


const Div = styled.div`
  margin: 10%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 50px;
  box-shadow: 0 24px 31px rgba(1,1,0,0.5);
  background-color: #e6e183;
`

interface QuoteCardProps {
  content: string,
  author: string,
}

function QuoteCard({ content, author }: QuoteCardProps) {
  return (
    <Div>
      <div>
        <div className="content">{content}</div>
        <div className="author">{author}</div>
      </div>
    </Div>
  )
}

export default QuoteCard
