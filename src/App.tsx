import { useState } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Pokemonpage from './pages/Pokemonpage'
import Home from './pages/Home'
import Layout from './pages/Layout'
import { PokemonType } from './utils/types'
import FilenotFound from './pages/FileNotFound'
import { BuddyContext, PokemonContext} from './utils/contexts'

function App() {
  const [pokemon, setPokemon] = useState<PokemonType | null>(null);
  const [buddy, setBuddy] = useState<string>('./src/assets/pok.png');

  return (
    <>
      <PokemonContext.Provider value={{ pokemon, setPokemon }}>
        <BuddyContext.Provider value={{buddy, setBuddy}}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pokemon" element={<Pokemonpage />} />
              <Route path="/*" element={<FilenotFound />} />
            </Route>
          </Routes>
        </BuddyContext.Provider>
      </PokemonContext.Provider>
    </>
  );
}


export default App
