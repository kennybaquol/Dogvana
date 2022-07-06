import { GoogleLogin } from 'react-google-login';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css'
import { useState } from 'react';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  // For Google login
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  )

  const cId = process.env.CLIENT_URL

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  // For Google login
  const handleFailure = (result) => {
    console.log('client id: ' + cId)
    alert(result)
  }

  const handleLogin = async (googleData) => {
    console.log(googleData)
    // const res = await fetch('/api/google-login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     token: googleData.tokenId
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })

    // const data = await res.json()
    // setLoginData(data)
    // localStorage.setItem('loginData', JSON.stringify(data))
  }

  const handleLogout = () => {
    localStorage.removeItem('loginData')
    setLoginData(null)
  }

  return (
    <div>
      <div className="login-form-container" onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <form className="login-form"autoComplete="off" >
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>

      {/* Google login button */}
      <div>
        {
          loginData ? (
            <div>
              <h3>You logged in as {loginData.email}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )
            : (
              <GoogleLogin
                clientId={cId}
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
              ></GoogleLogin>
            )
        }
      </div>

      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}