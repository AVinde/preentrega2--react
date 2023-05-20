import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const imgLogo = "../img/logo-tecnoshop.png";
  return (
    <header>
        <Link to={"/"}>
          <img className="imgLogo" src={imgLogo} alt="" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to={"/categoria/2"}> Procesadores </NavLink>
                </li>
                <li>
                  <NavLink to={"/categoria/3"}> Placas de videos </NavLink>
                </li>
                <li>
                  <NavLink to={"/categoria/4"}> Gabinetes </NavLink>
                </li>
                <li>
                  <NavLink to={"/categoria/5"}> Monitores </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar