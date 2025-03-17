import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Login.css'
import {login , signup} from '../../firebase'

const Login = () => {

  const [signState , setSignState] = useState('Sign In');
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const user_auth = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(signState == 'Sign In'){
      await login({email , password})
    } else {
      await signup({name ,email , password})
    }
  }

  return (
    <div className="h-[100vh] login bg-cover bg-center p-[20px_8%]">
      <img src={logo} alt="" className='w-[150px]'/>
      <div className='w-[100%] max-w-[450px] bg-black bg-opacity-75 rounded-[4px] p-[60px] m-auto'>
        <h1 className='text-[32px] font-medium mb-[28px]'>{signState}</h1>
        <form >
            {signState !== 'Sign In' ? <input type="text" placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)}/>  : <></> }
            
            <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button 
              className='w-[100%] border-none outline-none p-[16px] bg-[#e50914] text-white rounded-[4px] text-[16px] font-medium mt-[20px] cursor-pointer'
              onClick={user_auth}
              type='submit'
            >
              {signState}
            </button>
            <div className='flex items-center justify-between text-[#b3b3b3] text-[13px]'>
              <div className="remember flex items-center gap-[5px] ">
                <input type="checkbox" name="" id=""  className='w-[18px] h-[18px]'/>
                <label htmlFor="">Remember me</label>
              </div>
              <p>need help?</p>
            </div>
        </form>
        <div className="font-switch mt-[40px] text-[#737373] ">
          {signState !== 'Sign In' ? <p>Already have account?<span onClick={() => setSignState('Sign In')}>Sign In Now</span></p>  : <p>New to Netflix? <span onClick={() => setSignState('Sign Up')}>Sign Up Now</span></p> }
          
        </div>
      </div>
    </div>
  )
}

export default Login
