import Layout from '/components/Layout'
import Sogni from '/components/Sogni'


export default function Home({ datiArticoli, datiSogni }) {
  return (
    <Layout>
      <Sogni sogni={datiSogni} />
    </Layout>
  )
}

import { getDatiArticoli } from '/lib/articoli'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export async function getStaticProps() {
  const datiArticoli = getDatiArticoli()
  const datiSogni = await fetcher('http://127.0.0.1:3818/dreams.json')

  return {
    props: {
      datiArticoli,
      datiSogni,
    },
  }
}
