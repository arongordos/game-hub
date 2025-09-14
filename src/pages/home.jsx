import LimitSelector from '../components/LimitSelector'
import GameCard from '../components/GameCard'
import FilterInput from '../components/FilterInput'
import GenreSelector from '../components/GenreSelector'

const HomePage = ({
  games,
  filter,
  setFilter,
  limit,
  setLimit,
  genre,
  setGenre,
  loading,
  error,
}) => {
  const filteredGames = games.filter((game) => {
    return (
      game.name.toLowerCase().includes(filter.toLowerCase()) &&
      game.genres.some((g) => g.slug.includes(genre))
    )
  })

  return (
    <>
      <div className="my-8 flex flex-wrap items-center justify-between gap-4">
        <FilterInput filter={filter} onFilterChange={setFilter} />
        <div className="flex gap-x-4">
          <LimitSelector limit={limit} onLimitChange={setLimit} />
          <GenreSelector genre={genre} onGenreChange={setGenre} />
        </div>
      </div>

      {loading && <span className="loader"></span>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <main className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => <GameCard key={game.id} game={game} />)
          ) : (
            <p className="text-xl font-bold">No games found.</p>
          )}
        </main>
      )}
    </>
  )
}

export default HomePage
