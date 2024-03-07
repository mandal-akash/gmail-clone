import React from 'react'
import "../style/login.css"
import { auth, provider } from './Firebase'
import { login } from '../feature/UserSlice'
import { useDispatch } from 'react-redux'
const Login = () => {
    const dispatch = useDispatch();
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
            }))
        })
        .catch(error => alert(error.message))
    }
  return (
    <div className="login">
       <div className="login-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZ01BFdLCZQfgNjldR733OZFLDqoXpe-sdA&usqp=CAU" alt="" />
        <h1>Google  Workspace</h1>
        <button className="loginBtn" onClick={signIn}>Login</button>
       </div>
    </div>
  )
}

export default Login