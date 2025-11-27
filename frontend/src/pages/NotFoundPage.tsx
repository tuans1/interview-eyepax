import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="page page--centered">
      <h1>404</h1>
      <p>The page you are looking for does not exist yet.</p>
      <Link to="/" className="nav-link nav-link--button">
        Go back home
      </Link>
    </section>
  )
}

export default NotFoundPage

