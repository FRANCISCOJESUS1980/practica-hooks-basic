import { useState } from 'react'
import PropTypes from 'prop-types'
import './CharacterCard.css'

function CharacterCard({ character }) {
  const [rotated, setRotated] = useState(false)

  const handleImageClick = () => {
    setRotated(!rotated)
  }

  return (
    <div className='character-card'>
      <h2>{character.name}</h2>
      <img
        src={character.image}
        alt={character.name}
        className={rotated ? 'rotated' : ''}
        onClick={handleImageClick}
      />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  )
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired
  }).isRequired
}

export default CharacterCard
