import React from 'react'
import LoginDrawer from './LoginDrawer'
import SignUpDrawer from './SignUpDrawer'
import { useState } from 'react';

function LoginSection({ closeDrawer }) {
  const [activeDrawer, setActiveDrawer] = useState('login');

  return (
    <>
      {activeDrawer === 'login' && <LoginDrawer onSwitchToSignup={() => setActiveDrawer('signup')} closeDrawer={closeDrawer} />}
      {activeDrawer === 'signup' && <SignUpDrawer onSwitchToLogin={() => setActiveDrawer('login')} closeDrawer={closeDrawer}/>}
    </>
  )
}

export default LoginSection