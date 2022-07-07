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
      <Link to="/favorites" className="not-logo">Favorites</Link>
      <header className="not-logo">Hello, {user.name}</header>
      <Link to="" className="not-logo"onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}