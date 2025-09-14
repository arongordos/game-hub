import { Link } from 'react-router'

const NotFoundPage = () => {
  return (
    <div className="mt-24 flex flex-col items-center">
      <h2 className="text-7xl font-bold">404</h2>
      <p className="my-4 text-xl">Oops! The page does not exist.</p>
      <p>
        <Link to="/" className="underline hover:no-underline">
          ← Go to Home
        </Link>
      </p>
    </div>
  )
}

export default NotFoundPage
