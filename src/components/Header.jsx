import { Link } from 'react-router-dom'
import './Header.css'

function Header({ name, cartLength }) {
  return (
    <header className="header">
      <h1 className="header-title">{name}</h1>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>

      <Link to="/cart" className="cart-link">
        🛒
        <span className="cart-count">{cartLength}</span>
      </Link>
    </header>
  )
}

export default Header
