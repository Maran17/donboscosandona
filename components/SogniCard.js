import * as React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material'

export default function SogniCard({ sogno }) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 300 }}
        image={'http://127.0.0.1:3818' + sogno.cover}
        title={sogno.nome}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {sogno.nome}
        </Typography>
        <Typography variand='body2' color='text.secondary'>
          {sogno.descrizione}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small' href={sogno.url}>
          Scopri di più
        </Button>
      </CardActions>
    </Card>
  )
}
