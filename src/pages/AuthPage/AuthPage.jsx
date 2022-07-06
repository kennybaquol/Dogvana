import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import './AuthPage.css'

export default function AuthPage({ setUser }) {
    return (
        <>
            <div className="top-header"></div>
            <header className="logo-header">
                <a href="/" className="logo">Dogvana</a>
            </header>
            <main className="auth-page">
                <SignupForm setUser={setUser} />
                <LoginForm setUser={setUser} />
            </main>
        </>
    )
}