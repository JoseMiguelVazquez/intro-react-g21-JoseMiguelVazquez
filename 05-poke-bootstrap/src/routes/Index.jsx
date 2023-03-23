import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import PokemonDetails from '../pages/PokemonDetails'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      {/* Params: Sirven para pasar datos dinamicos en una url */}
      <Route path='/pokemon/:id' element={<PokemonDetails />} />
    </Routes>
  )
}

export default RoutesIndex
