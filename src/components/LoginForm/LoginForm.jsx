import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
// import { GoogleLogin } from 'react-google-login'
import { useGoogleLogin } from 'react-google-login';
import { GoogleLogin } from '@react-oauth/google';


export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  // Google API -KB
  // const { signIn, loaded } = useGoogleLogin({
  //   onSuccess,
  //   onAutoLoadFinished,
  //   clientId,
  //   cookiePolicy,
  //   loginHint,
  //   hostedDomain,
  //   autoLoad,
  //   isSignedIn,
  //   fetchBasicProfile,
  //   redirectUri,
  //   discoveryDocs,
  //   onFailure,
  //   uxMode,
  //   scope,
  //   accessType,
  //   responseType,
  //   jsSrc,
  //   onRequest,
  //   prompt
  // })

  const clientId = '798631431124-3t89jnlu98aurqa6gjm6vfivs753ukur.apps.googleusercontent.com'

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

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  const responseGoogle = (response) => {
    console.log()
    console.log(response);
  }

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off" >
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
        </form>
      </div>

      {/* Google login button */}
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />

      {/* Google login button
      <GoogleLogin
        // data-onsuccess={onSignIn}
        clientId={clientId}
        buttonText="Sign in with Google"
        // onSuccess={onSignIn}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      /> */}
      {/* , */}
      {/* document.getElementById('googleButton') */}

      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}