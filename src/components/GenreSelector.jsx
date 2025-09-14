import Selector from './Selector'

const GenreSelector = ({ genre, onGenreChange }) => {
  const genreOptions = [
    { value: '', label: 'All' },
    { value: 'action', label: 'Action' },
    { value: 'indie', label: 'Indie' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'role-playing-games-rpg', label: 'RPG' },
    { value: 'strategy', label: 'Strategy' },
    { value: 'shooter', label: 'Shooter' },
    { value: 'casual', label: 'Casual' },
    { value: 'simulation', label: 'Simulation' },
    { value: 'arcade', label: 'Arcade' },
    { value: 'platformer', label: 'Platformer' },
    { value: 'massively-multiplayer', label: 'Massively Multiplayer' },
    { value: 'racing', label: 'Racing' },
    { value: 'sports', label: 'Sports' },
    { value: 'fighting', label: 'Fighting' },
    { value: 'family', label: 'Family' },
    { value: 'board-games', label: 'Board Games' },
    { value: 'card', label: 'Card' },
    { value: 'educational', label: 'Educational' },
  ]
  return (
    <Selector
      label="Genre"
      options={genreOptions}
      value={genre}
      onChange={onGenreChange}
    />
  )
}

export default GenreSelector
