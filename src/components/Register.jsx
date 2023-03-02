import React from 'react'
import "./Register.css"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../AuthContext'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase';

function Register() {

  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user } = UserAuth()
  const navigate = useNavigate()

  const signUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      navigate('/')
    })
  };

  return (
    <div className='register'>
        <Link to='/'>
          <img src='https://links.papareact.com/f90' alt='' className='login_logo' />
        </Link>

        <div className='login_container'>
            <h1>Sign Up</h1>
            <form>
                <h5>Name</h5>
                <input type='text' value={displayName} onChange={e => setDisplayName(e.target.value)} />  

                <h5>Email</h5>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button className='login_signInButton' type='submit' onClick={signUp}>Sign up</button>
                
            </form>
            <p>By signing up you agree to our Terms and Conditions</p>

              <hr />
            <p>Have an account?</p>
            <Link to='/login'>
                <button className='login_registerButton'>Sign In</button>
            </Link>
        </div>
    </div>
  )
}

export default Register