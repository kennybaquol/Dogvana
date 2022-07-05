import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { refreshTokenSetup } from '../../utilities/resfreshToken'

const clientId = '798631431124-3t89jnlu98aurqa6gjm6vfivs753ukur.apps.googleusercontent.com'

// Source: https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del
export default function GoogleLoginForm() {
    const onSuccess = (res) => {
        console.log('Successfully logged in as: ' + res.profileObj)
        refreshTokenSetup(res)
    }
    const onFailure = (res) => {
        console.log('Login failed res: ' + res)
    }


    return (
        <>
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </>
    )
}


