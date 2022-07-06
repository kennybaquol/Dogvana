import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import './AuthPage.css'

export default function AuthPage({ setUser }) {
    return (
        <>
            <div className="top-header"></div>
            <header>
                <span>Dogvana</span>
            </header>
            <main className="auth-page">
                <SignupForm setUser={setUser} />
                <LoginForm setUser={setUser} />
            </main>
        </>
    )
}