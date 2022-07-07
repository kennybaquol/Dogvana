import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import './AuthPage.css'
import { Link } from 'react-router-dom'

export default function AuthPage({ setUser }) {
    return (
        <>
            <div className="top-header"></div>
            <header className="logo-header">
                <Link to="/" className="logo">Dogvana</Link>
            </header>
            <main className="auth-page">
                <SignupForm setUser={setUser} />
                <LoginForm setUser={setUser} />
            </main>
        </>
    )
}