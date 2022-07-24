import { Skeleton, CardMedia } from '@mui/material'


interface MediaViewProps {
  image: string | null
}

function MediaView({ image }: MediaViewProps) {
  return (
    <>
      {
        image ?
          <CardMedia
            component="img"
            height="200"
            image={image}
          />
          :
          <Skeleton
            variant="rectangular"
            animation="wave"
            height={200}
          />
      }
    </>
  )
}

export default MediaView
