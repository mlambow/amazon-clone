import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../AuthContext'
import "./Login.css"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase';


function Login() {

  const { googleSignIn, signInEmail } = UserAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    navigate('/')
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
    await navigate('/')
    };

  return (
    <div className='login'>
        <Link to='/'>
          <img src='https://links.papareact.com/f90' alt='' className='login_logo' />
        </Link>

        <div className='login_container'>
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button className='login_signInButton' type='submit' onClick={signIn}>Sign in</button>
                <p className='hr'><span>Or</span></p>
                
                <button className='login_signInButton' onClick={handleGoogleSignIn}>Sign in with Google</button>
            </form>
            <p>By signing in you agree to our Terms and Conditions</p>

        <Link to='/register'>
          <button className='login_registerButton'>Create your Amazon Account</button>
        </Link>
        </div>
    </div>
  )
}

export default Login