import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import GoogleLoginForm from "../../components/GoogleLoginForm/GoogleLoginForm";

const clientId = '798631431124-3t89jnlu98aurqa6gjm6vfivs753ukur.apps.googleusercontent.com'

export default function AuthPage({setUser}){

    return(
        <main>
            <h1>AuthPage</h1>
            <SignupForm setUser={setUser}/>
            <LoginForm setUser={setUser}/>
        </main>
    )
}