import Head from 'next/head'

import Grid from '@mui/material/Grid'

import Layout from '/components/layout'
import PostInEvidenza from '/components/postInEvidenza'
import Post from '/components/post'
import Carousel from '/components/carousel'
import Settori from '/components/settori'
import Articoli from '/components/articoli'
import Esplora from '/components/esplora'
import Eventi from '/components/eventi'
import Testo from '/components/testo'

import { getDatiArticoli } from '/lib/articoli'

const postInEvidenza = {
  titolo: 'Titolo di un grande Post in evidenza',
  descrizione:
    "Diverse linee di testo che informano i nuovi lettori velocemente sui contenuti più interessanti di questo post.",
  immagine: 'https://source.unsplash.com/random',
  testoImmagine: 'Descrizione dell\'immagine principale',
  testoLink: 'Continua a leggere...',
}

const posts = [
  {
    titolo: 'Featured post',
    data: '12 Novembre',
    testo:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    immagine: 'https://source.unsplash.com/random',
  },
  {
    titolo: 'Secondo post',
    data: '12 Dicembre',
    testo:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    immagine: 'https://source.unsplash.com/random',

  },
]

let slides = [
  {
      titolo: "Lear Music Reader",
      descrizione: "A PDF Reader specially designed for musicians.",
      colore: "#64ACC8",
      immagine: "https://source.unsplash.com/1600x900/?space"
  },
  {
      titolo: "Hash Code 2019",
      descrizione: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
      colore: "#7D85B1",
      immagine: "https://source.unsplash.com/1600x900/?portrait"
  },
  {
      titolo: "Terrio",
      descrizione: "A exciting mobile game game made in the Unity Engine.",
      colore: "#CE7E78",
      immagine: "https://source.unsplash.com/1600x900/?water"
  },
  {
      titolo: "React Carousel",
      descrizione: "A Generic carousel UI component for React using material ui.",
      colore: "#C9A27E",
      immagine: "https://source.unsplash.com/1600x900/?nature"
  }
]

export default function Home({ datiArticoli }) {
  return (
    <Layout>
      <Head>
      </Head>
      <Carousel slides={slides} />
      <PostInEvidenza post={postInEvidenza} />
      <Grid container spacing={4}>
        {posts.map((post) => (
          <Post key={post.titolo} post={post} />
        ))}
      </Grid>

      <Testo>
        Ciao
        <br />
        Ciao</Testo>
      <Settori />
      <Esplora />
      <Eventi />
      <Articoli dati={datiArticoli} />
    </Layout>
  )
}

export async function getStaticProps() {
  const datiArticoli = getDatiArticoli();
  return {
    props: {
      datiArticoli,
    },
  }
}
