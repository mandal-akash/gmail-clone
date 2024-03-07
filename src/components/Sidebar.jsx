import React from 'react'
import '../style/sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen , faEnvelope , faStar, faClock, faPaperPlane, faNewspaper} from '@fortawesome/free-solid-svg-icons';
import SidebarOption from "./SidebarOption";
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../feature/MailSlice';
const Sidebar = () => {
    const dispatch = useDispatch()
    return (
        <div className="sidebar">
            <button className='composeBtn' onClick={() => dispatch(openSendMessage())}>
            <span className='penIcon'><FontAwesomeIcon icon={faPen} /></span> Compose</button>
            <SidebarOption Icon={<FontAwesomeIcon icon={faEnvelope} />} tittle='Inbox' num="20" inboxStyle={true}/>
            <SidebarOption Icon={<FontAwesomeIcon icon={faStar}/>} tittle='Starred'/>
            <SidebarOption Icon={<FontAwesomeIcon icon={faClock} />} tittle='Snoozed'/>
            <SidebarOption Icon={<FontAwesomeIcon icon={faPaperPlane} />} tittle='Sent'/>
            <SidebarOption Icon={<FontAwesomeIcon icon={faNewspaper} />} tittle='Drafts' num="7"/>
        </div>
    )
}

export default Sidebar