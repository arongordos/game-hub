import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import clsx from 'clsx'
import {
  FaWindows,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaXbox,
} from 'react-icons/fa'

import { API_URL } from '../App'

const platforms = {
  pc: <FaWindows />,
  mac: <FaApple />,
  linux: <FaLinux />,
  playstation: <FaPlaystation />,
  xbox: <FaXbox />,
}

const GameDetailsPage = () => {
  const { id } = useParams()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await fetch(
          `${API_URL}/games/${id}?key=${import.meta.env.VITE_RAWG_API_KEY}`,
        )
        if (!res.ok) throw new Error('Failed to fetch data.')

        const data = await res.json()
        setGame(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGame()
  }, [id])

  return (
    <>
      {loading && <span className="loader mt-12"></span>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <div className="mt-12">
          <h2 className="mb-3 text-2xl font-bold">{game.name}</h2>
          <div className="mb-3 flex items-center gap-4">
            <span className="rounded-lg bg-slate-500 p-1 text-sm font-bold text-white">
              {game.released}
            </span>

            <ul className="flex gap-x-3">
              {game.parent_platforms.map(({ platform }) => (
                <li key={platform.id} title={platform.name}>
                  {platforms[platform.slug]}
                </li>
              ))}
            </ul>

            <div>
              {game.metacritic && (
                <span
                  className={clsx('rounded-sm p-1 font-bold text-gray-800', {
                    'bg-red-300': game.metacritic < 50,
                    'bg-amber-300':
                      game.metacritic >= 50 && game.metacritic < 80,
                    'bg-green-300': game.metacritic >= 80,
                  })}
                >
                  {game.metacritic}
                </span>
              )}
            </div>
            <p className="text-sm font-bold uppercase">
              Average Playtime: {game.playtime} hours
            </p>
          </div>
          <img
            src={game.background_image}
            alt={game.name}
            className="mb-3 w-md rounded-lg"
          />
          <div>
            <h3 className="text-xl font-bold">About</h3>
            <p>
              {!isExpanded
                ? game.description_raw.slice(0, 200) + '...'
                : game.description_raw}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-1 cursor-pointer rounded-lg bg-slate-700 px-1 py-0.5 text-sm font-bold text-white"
              >
                {isExpanded ? 'Show Less' : 'Show More'}
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default GameDetailsPage
