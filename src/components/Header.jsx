import { Link } from 'react-router'

const Header = () => {
  return (
    <header>
      <nav>
        <h1 className="text-3xl">
          <Link to="/">
            Game<span className="font-bold">Hub</span>
          </Link>
        </h1>
      </nav>
    </header>
  )
}

export default Header
