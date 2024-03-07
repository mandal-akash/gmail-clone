import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faRotateRight, faEllipsisVertical, faArrowLeft, faArrowRight, faInbox, faTag, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import "../style/emailList.css"
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from './Firebase';
const EmailList = () => {
  const [emails, setEmails] = useState([])


  useEffect(() => {
    db.collection("email").orderBy('timeStamp' , 'desc').onSnapshot((snapshot) => {
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, [db]);
  return (
    <div className='email-list'>
      <div className="email-list-top">
        <div className="email-list-top-left">
          <span className="icons"><input type="checkbox" name="checkbox" id="checkbox" /></span>
          <span className="icons"><FontAwesomeIcon icon={faCaretDown} /></span>
          <span className="icons"> <FontAwesomeIcon icon={faRotateRight} /></span>
          <span className="icons"><FontAwesomeIcon icon={faEllipsisVertical} /></span>
        </div>
        <div className="email-list-top-right">
          <span className="icons"> <FontAwesomeIcon icon={faArrowLeft} /></span>
          <span className="icons"> <FontAwesomeIcon icon={faArrowRight} /></span>
        </div>
      </div>

      <div className="email-list-section">
        <Section icon={<FontAwesomeIcon icon={faInbox} />} tittle={'Primary'} selected={true} />
        <Section icon={<FontAwesomeIcon icon={faTag} />} tittle={'Promotions'} />
        <Section icon={<FontAwesomeIcon icon={faUserGroup} />} tittle={'Social'} />
      </div>

      <div className="email-row-list">
        {
          emails.map(({ id, data: { to, subject, message, timeStamp } }) => (
            <EmailRow id={id} key={id} tittle={to} subject={subject} message={message} time={new Date(timeStamp?.seconds * 1000).toUTCString()} />
          ))
        }
      </div>
    </div>
  )
}

export default EmailList