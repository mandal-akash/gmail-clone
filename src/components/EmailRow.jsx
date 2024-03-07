import React from 'react'
import '../style/emailRow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectMail } from '../feature/MailSlice';
const EmailRow = ({id, tittle, subject, message, time }) => {

    const history = useNavigate();

    const dispatch = useDispatch();

    const mailClick = () =>{
        dispatch(
            selectMail({
                id, tittle, subject, message, time 
            })
        )
        history("/mail");
    }
    return (
        <div onClick={mailClick} className="email-row">
            <div className="email-row-options">
                <span className="icons"><input type="checkbox" name="checkbox" id="checkbox" /></span>
                <span className="icons"><FontAwesomeIcon icon={faStar} /></span>
            </div>

            <div className="email-row-tittle">
                <h4>{tittle}</h4>
            </div>
            <div className="email-row-message">
                <h4>{subject}</h4>
            </div>

            <div className="email-row-desc">
                <p>{message}</p>
            </div>

            <div className="email-row-time">
                <span className="time">{time}</span>
            </div>
        </div>
    )
}

export default EmailRow