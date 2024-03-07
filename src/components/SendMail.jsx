import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faUpRightAndDownLeftFromCenter, faMinus, faA, faPaperclip, faLink, faFaceSmile, faImage, faLock, faPen, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import "../style/sendMail.css"
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { useForm } from "react-hook-form"
// import { ErrorMessage } from "@hookform/error-message"
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../feature/MailSlice';
import { db } from './Firebase';
import firebase from "firebase/compat/app";
const SendMail = () => {

  const { register, handleSubmit, watch, formState: { errors }} = useForm();

  const dispatch =  useDispatch();

  const onSubmit = (formData) =>{
    console.log(formData);
      db.collection("email").add({
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      dispatch(closeSendMessage());
  }

  return (
    <div className="sendMail">
      <div className="sendMail-header">
        <h4>New Message</h4>
        <div className="sendMail-h-icon">
          <span className="icon"><FontAwesomeIcon icon={faMinus} /></span>
          <span className="icon"><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} /></span>
          <span onClick={() => dispatch(closeSendMessage())} className="icon"><FontAwesomeIcon icon={faXmark} /></span>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name='to' placeholder='To' {...register('to', { required: true })}/>
        {/* <ErrorMessage errors={errors} name="to"  render={({ message }) => <p>{message}</p>}/> */}
        <input type="text" name='subject' placeholder='Subject' {...register('subject', { required: true })}  />
        <input type="text" name='message' className='sendMail-message' {...register('message', { required: true })} />
        <div className="sendMail-option">
          <button className="send">Send</button>
          <span className="icon"><FontAwesomeIcon icon={faA} /></span>
          <span className="icon"><FontAwesomeIcon icon={faPaperclip} /></span>
          <span className="icon"><FontAwesomeIcon icon={faLink} /></span>
          <span className="icon"><FontAwesomeIcon icon={faFaceSmile} /></span>
          <span className="icon"><FontAwesomeIcon icon={faGoogleDrive} /></span>
          <span className="icon"><FontAwesomeIcon icon={faImage} /></span>
          <span className="icon"><FontAwesomeIcon icon={faLock} /></span>
          <span className="icon"><FontAwesomeIcon icon={faPen} /></span>
          <span className="icon"><FontAwesomeIcon icon={faEllipsisVertical} /></span>
        </div>
      </form>
    </div>
  )
}

export default SendMail