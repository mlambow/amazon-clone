import React from 'react'
import "./Register.css"
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../AuthContext'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db } from '../firebase';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';

function Register() {

  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { user } = UserAuth()
  const navigate = useNavigate()

  const signUp = async (e) => {
    try {
      e.preventDefault()
      const res = await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
        setError(error.message);
      });
      await updateProfile(auth.currentUser, {displayName: displayName}).catch((error) => {
        setError(error.message);
      })
      await setDoc(doc(db, 'user', res.user.uid), {
        name: displayName,
        email: res.user.email,
        timeStamp: serverTimestamp()
      });
    }
    catch (error) {
      setError(error.message)
    }
  };

  console.log(error)

   {
      user ? navigate('/') : navigate('/register')
    }
    

  return (
    <div className='register'>
        <Link to='/'>
          <img src='https://links.papareact.com/f90' alt='' className='login_logo' />
        </Link>

        <div className='register_container'>
            <h1>Sign Up</h1>
            <form>
                <h5>Name</h5>
                <input type='text' value={displayName} onChange={e => setDisplayName(e.target.value)} />  

                <h5>Email</h5>
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} className='set' onChange={e => setPassword(e.target.value)} />

                <button className='registerButton' type='submit' onClick={signUp}>Sign Up</button>
            </form>
            <p>By signing up you agree to our Terms and Conditions</p>

              <hr />
            <p>Have an account?</p>
            <Link to='/login'>
              <button className='register_signInButton'>Sign In</button>
            </Link>
         {/* {error && <span className='register_error'>Wrong password or email</span>} */}
        </div>
    </div>
  )
}

export default Register