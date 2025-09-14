import clsx from 'clsx'
import {
  FaWindows,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaXbox,
} from 'react-icons/fa'
import { Link } from 'react-router'

const platforms = {
  pc: <FaWindows />,
  mac: <FaApple />,
  linux: <FaLinux />,
  playstation: <FaPlaystation />,
  xbox: <FaXbox />,
}

const GameCard = ({ game }) => {
  return (
    <Link to={`/game/${game.slug}`}>
      <div className="cursor-pointer overflow-auto rounded-lg bg-slate-100 shadow-md transition-all hover:-translate-y-1">
        <img src={game.background_image} alt={game.name} />

        <div className="flex items-center justify-between p-2">
          <ul className="flex gap-x-3 opacity-35">
            {game.parent_platforms.map(({ platform }) => (
              <li key={platform.id}>{platforms[platform.slug]}</li>
            ))}
          </ul>
          {game.metacritic && (
            <span
              className={clsx(
                'rounded-sm p-0.5 text-sm font-bold text-gray-800',
                {
                  'bg-red-300': game.metacritic < 50,
                  'bg-amber-300': game.metacritic >= 50 && game.metacritic < 80,
                  'bg-green-300': game.metacritic >= 80,
                },
              )}
            >
              {game.metacritic}
            </span>
          )}
        </div>
        <h3 className="pb-4 text-center text-lg font-bold">{game.name}</h3>
      </div>
    </Link>
  )
}

export default GameCard
