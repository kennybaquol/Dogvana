import React from 'react'
import { GoogleLogout } from 'react-google-login'

const clientId = '798631431124-3t89jnlu98aurqa6gjm6vfivs753ukur.apps.googleusercontent.com'

export default function GoogleLogin() {
    // Source: https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del
    function LogOut() {
        const onSuccess = () => {
            console.log('Successfully logged out')
        }
    }

    return (
        <>
            <GoogleLogout
                clientId={clientId}
                buttonText='Logout'
                onLogoutSuccess={onSuccess}
            />
        </>
    )
}


