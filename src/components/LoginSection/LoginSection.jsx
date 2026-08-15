import React from 'react'
import LoginDrawer from './LoginDrawer'
import SignUpDrawer from './SignUpDrawer'
import { useState } from 'react';

function LoginSection() {
    const [signUp, setSignUp] = useState(false);

    // function showSignUpPage() {

    // }
  return (
    <>
    <LoginDrawer showSignUpPage={() => setSignUp(false)}/>
    <SignUpDrawer showSignUpPage={() => setSignUp(true)}/>
    </>
  )
}

export default LoginSection