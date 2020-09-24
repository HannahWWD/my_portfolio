import React from 'react'
import './WorkHeader.scss'
import GitHubIcon from '@material-ui/icons/GitHub';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import Message from '../components/Message';
import { useState } from 'react';


function WorkHeader(props){
    const [showMessage,setShowMessage] = useState(false);

    const changeMsgVis = (shouldShowMessage) => {
        setShowMessage(shouldShowMessage)
    }

    return(

        <div className="work-header-container">
           <Message demo={props.demo} showMessage={showMessage} changeMsgVis={changeMsgVis}/>
            <div className="work-header-content">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <p>{props.role}</p>
           
               
                <div>
                    <button onClick={()=>{
                        setShowMessage(true)
                    }}><LiveTvIcon />Live Demo</button>
                    <a href={props.github} rel="noopener noreferrer" target="_blank"><GitHubIcon />GitHub</a>
                </div>
            </div>
            
        </div>
    
    
        )
}

export default WorkHeader