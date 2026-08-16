import React from 'react'
import LoginDrawer from './LoginDrawer'
import SignUpDrawer from './SignUpDrawer'
import { useState } from 'react';

function LoginSection() {
    const [activeDrawer, setActiveDrawer] = useState('login');

  return (
    <>
    {activeDrawer === 'login' && <LoginDrawer onSwitchToSignup={() => setActiveDrawer('signup')} />}
    {activeDrawer === 'signup' && <SignUpDrawer onSwitchToSignup={() => setActiveDrawer('login')}/>}
    </>
  )
}

export default LoginSection