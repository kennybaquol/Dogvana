import '../NavBar/NavBar.css'
import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav className="logo-header">
      <Link to="/" className="logo">Dogvana</Link>
      <div className="navbar-container">
        <Link to="/orders/new" className="navbar">Favorites</Link>
        <span className="navbar">Hello, {user.name}</span>
        <Link to="" className="navbar"onClick={handleLogOut}>Log Out</Link>
      </div>
    </nav>
  )
}