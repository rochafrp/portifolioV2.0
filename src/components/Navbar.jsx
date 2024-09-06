import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <NavLink to="/" className="navbar-link" data-nav-link>
          Sobre
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/resume" className="navbar-link" data-nav-link>
          Resumo
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/portfolio" className="navbar-link" data-nav-link>
          Portfolio
        </NavLink>
      </li>

      {/* <li className="navbar-item">
        <NavLink to="/blogs" className="navbar-link" data-nav-link>
          Blog
        </NavLink>
      </li> */}

      <li className="navbar-item">
        <NavLink to="/contact" className="navbar-link" data-nav-link>
          Contato
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar