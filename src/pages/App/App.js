import './App.css';
import { useState } from 'react'
import AuthPage from '../AuthPage/AuthPage'
import SearchPage from '../SearchPage/SearchPage'
import Home from '../Home/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service'

export default function App() {

  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ?
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home user={user}/>}/>
          <Route path="/search" element={<SearchPage />}/>
        </Routes>
      </>
        : 
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}