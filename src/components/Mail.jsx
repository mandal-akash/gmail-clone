import React from 'react'
import "../style/mail.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faDownload, faCircleExclamation, faTrashCan, faEnvelope, faClock, faEllipsisVertical, faCaretLeft,faCaretRight, faPrint ,faShareFromSquare, faTag} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectOpenMail } from '../feature/MailSlice';
const Mail = () => {
  const history = useNavigate();

  const selectMail = useSelector(selectOpenMail);

  const prevClick = () =>{
    history("/");
  }
  return (
   <div className="mail">
    <div className="mail-Header">
      <div className="mailHeader-left-tools">
      <span onClick={prevClick} className="icon"><FontAwesomeIcon icon={faArrowLeft} /></span>
      <span className="icon"><FontAwesomeIcon icon={faDownload} /></span>
      <span className="icon"><FontAwesomeIcon icon={faCircleExclamation} /></span>
      <span className="icon"><FontAwesomeIcon icon={faTrashCan} /></span>
      <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
      <span className="icon"><FontAwesomeIcon icon={faClock} /></span>
      <span className="icon"> <FontAwesomeIcon icon={faEllipsisVertical} /></span>
      </div>
      <div className="mail-header-right-tools">
      <span className="icon"> <FontAwesomeIcon icon={faCaretLeft} /></span>
      <span className="icon"> <FontAwesomeIcon icon={faCaretRight} /></span>
      </div>
      </div>

      <div className="mail-body">
          <div className="mail-body-header">
           <p>{selectMail?.subject}</p>
            <div className="mail-body-icon">
            <span className="icon"> <FontAwesomeIcon icon={faPrint} /></span>
            <span className="icon"><FontAwesomeIcon icon={faShareFromSquare} /></span>
            </div>
          </div>
          <div className="mail-message">
            <p>{selectMail?.message}</p>
          </div>
      </div>
   </div>
  )
}

export default Mail