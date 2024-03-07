import React from 'react'
import '../style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar } from '@mui/material'
import { faBars, faMagnifyingGlass, faQuestion, faGear, faUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { auth } from './Firebase'
import { logout } from '../feature/UserSlice'
const Header = () => {

  const dispatch = useDispatch();

  const signOut = () => {
      auth.signOut().then(() =>{
        dispatch(logout())
      })
  }
  return (
    <div className="header">
      <div className="header-left">
        <span className="menuBar"><FontAwesomeIcon icon={faBars} /></span>
        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="" />
      </div>
      <div className="header-middle">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder='Search mail' />
      </div>
      <div className="header-right">
        <span className='icon questionIcon'><FontAwesomeIcon icon={faQuestion} size="lg" /></span>
        <span className='icon gearIcon'> <FontAwesomeIcon icon={faGear} size="lg" /></span>
        <span className='icon userIcon'> <FontAwesomeIcon icon={faUser} size="lg" /></span>
        <span onClick={signOut}><Avatar /></span>
      </div>
    </div>
  )
}

export default Header