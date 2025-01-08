import { useState, useEffect } from 'react'
import CharacterCard from '../src/components/CharacterCard/CharacterCard'
import './App.css'
function App() {
  const [characters, setCharacters] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className='App'>
      <h1>Rick and Morty Characters</h1>
      <input
        type='text'
        placeholder='Search characters'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className='character-list'>
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}

export default App
