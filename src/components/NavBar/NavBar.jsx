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
      &nbsp; | &nbsp;
      <Link to="/favorites">Favorites</Link>
      &nbsp; | &nbsp;
      Hello, {user.name}
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}