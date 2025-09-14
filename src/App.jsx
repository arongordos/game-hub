import { useEffect, useState } from 'react'
import HomePage from './pages/home'
import GameDetailsPage from './pages/game-details'
import NotFoundPage from './pages/not-found'
import Header from './components/Header'
import { Routes, Route } from 'react-router'

export const API_URL = 'https://api.rawg.io/api'

function App() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [limit, setLimit] = useState('10')
  const [filter, setFilter] = useState('')
  const [genre, setGenre] = useState('')

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch(
          `${API_URL}/games?key=${import.meta.env.VITE_RAWG_API_KEY}&page_size=${limit}`,
        )
        if (!res.ok) throw new Error('Failed to fetch data.')

        const data = await res.json()
        setGames(data.results)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [limit])

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              games={games}
              filter={filter}
              setFilter={setFilter}
              limit={limit}
              setLimit={setLimit}
              genre={genre}
              setGenre={setGenre}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/game/:id" element={<GameDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
