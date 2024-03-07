import React, { useEffect } from 'react'
import './App.css'
import Header from "./components/Header";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import Login from "./components/Login";
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SendMail from './components/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import  {selectSendMessageIsOpen}  from "./feature/MailSlice";
import { login, selectUser } from './feature/UserSlice';
import { auth } from './components/Firebase';
function App() {
   const SendMessageIsOpen = useSelector(selectSendMessageIsOpen);
   const user = useSelector(selectUser);
   const dispatch = useDispatch();

   useEffect(() => {
      auth.onAuthStateChanged((user)=>{
        if (user) {
          dispatch(
            login({
              displayName: user.displayName,
              email: user.email
            })
          )
        }
      })
   }, [])
   
  return (
    <Router>
      {!user? (
        <Login/>
      ):(
        <div className="App">
        <Header />
        <div className="app-body">
          <Sidebar />
          <Routes>
          <Route exact path="mail" element={<Mail/>}/>
          <Route exact path="/" element={<EmailList/>}/>
          </Routes>
        </div>
        {SendMessageIsOpen && <SendMail/>}
      </div>
      )}
    </Router>
  )
}

export default App
