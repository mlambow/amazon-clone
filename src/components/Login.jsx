import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../AuthContext'
import "./Login.css"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase';


function Login() {

  const { googleSignIn, user } = UserAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const signIn = async (e) => {
    try{
      e.preventDefault();
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      setError(error.message)
    }
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault()
    try {
      await googleSignIn();
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    {user ? navigate('/') : navigate('/login')}
  }, [user])

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
                <input type='password' value={password} className='password' onChange={e => setPassword(e.target.value)} />

                <button className='login_signInButton' type='submit' onClick={signIn}>Sign in</button>
                <p className='hr'><span>Or</span></p>
                
                <button className='login_signInButton' onClick={handleGoogleSignIn}>Sign in with Google</button>
                
            </form>
            <p>By signing in you agree to our Terms and Conditions</p>
            <hr />
            <p>Don't have an account?</p>
        <Link to='/register'>
          <button className='login_registerButton'>Create your Amazon Account</button>
        </Link>
        {error && <span className='error'>{error}</span>}
        </div>
    </div>
  )
}

export default Login