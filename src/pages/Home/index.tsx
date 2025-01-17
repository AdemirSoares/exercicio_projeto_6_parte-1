import ProductsList from '../../components/ProductsList'

import Hero from '../../components/Hero'
import { useEffect, useState } from 'react'

export type Restaurantes = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: []
}

export type Cardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Hero />
      <ProductsList restaurantes={restaurantes} background="pink" />
    </>
  )
}

export default Home
