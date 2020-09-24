import React from 'react'
import './Message.scss';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Message(props) {
    const [showMessage,setShowMessage] = useState(props.showMessage)

    useEffect(()=>{
        setShowMessage(props.showMessage)
    },[props.showMessage])

    return (
        <div className={showMessage ? "msg":"hidden"}>
            <div><CloseIcon onClick={()=>{
               setShowMessage(false)
               props.changeMsgVis(false)
            }}/></div>
            <div>
                <h3>It might took 5~10 seconds to load. <br />Please Do NOT close the browser while loading.</h3>
                <p>* This is because the Heroku Dyno, which powers the app, sleeps after 30 mins of inactivity in free plan. *</p>
                <a href={props.demo} rel="noopener noreferrer" target="_blank" className="msg-btn">Take me to the live demo</a>
            </div>


        </div>
    )
}

