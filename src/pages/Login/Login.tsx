import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Login.css'
import {login , signup} from '../../firebase'
import netflixSpinner from '../../assets/netflix_spinner.gif'

const Login = () => {

  const [signState , setSignState] = useState('Sign In');
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [loading , setLoading] = useState(false)

  const user_auth = async (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    if(signState == 'Sign In'){
      await login({email , password})
    } else {
      await signup({name ,email , password})
    }
    setLoading(false)
  }

  return (
    
      loading ? (
        <div className="spinner flex justify-center items-center h-screen">
          <img src={netflixSpinner} alt="Loading" className="w-16 h-16" />
        </div>
      ) : (
        <div className="h-screen flex flex-col items-center justify-center px-4 sm:px-8 bg-cover bg-center login">
          <img src={logo} alt="Netflix Logo" className="w-32 mb-6 sm:w-40" />
          
          <div className="w-full max-w-md bg-black bg-opacity-75 rounded-lg p-8 sm:p-12 text-white">
            <h1 className="text-2xl font-semibold mb-6 text-center">{signState}</h1>
    
            <form className="flex flex-col space-y-4" onSubmit={user_auth}>
              {signState !== 'Sign In' && (
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                />
              )}
    
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
    
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
    
              <button
                type="submit"
                className="w-full p-3 bg-red-600 text-white rounded-md text-lg font-medium hover:bg-red-700 transition duration-300"
              >
                {signState}
              </button>
    
              <div className="flex items-center justify-between text-sm text-gray-400">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Remember me</span>
                </label>
                <p className="cursor-pointer hover:underline">Need help?</p>
              </div>
            </form>
    
            <div className="mt-6 text-center text-gray-400">
              {signState !== 'Sign In' ? (
                <p>
                  Already have an account?{' '}
                  <span
                    onClick={() => setSignState('Sign In')}
                    className="text-white cursor-pointer hover:underline"
                  >
                    Sign In Now
                  </span>
                </p>
              ) : (
                <p>
                  New to Netflix?{' '}
                  <span
                    onClick={() => setSignState('Sign Up')}
                    className="text-white cursor-pointer hover:underline"
                  >
                    Sign Up Now
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      )
  )
}

export default Login
