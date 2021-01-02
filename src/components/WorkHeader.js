import React from 'react'
import './WorkHeader.scss'
import GitHubIcon from '@material-ui/icons/GitHub';
import LiveTvIcon from '@material-ui/icons/LiveTv';
//import Message from '../components/Message';
// import { useState } from 'react';


function WorkHeader(props) {
    // const [showMessage, setShowMessage] = useState(false);

    // const changeMsgVis = (shouldShowMessage) => {
    //     setShowMessage(shouldShowMessage)
    // }

    let linkConditions = null;
    if(props.figma){
        linkConditions = "figma";
    }else if(props.demo && props.github){
        linkConditions = "github"
    }

    return (

        <div className="work-header-container">
            {/* <Message demo={props.demo} showMessage={showMessage} changeMsgVis={changeMsgVis} /> */}
            <div className="work-header-content">
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
                <p>{props.role}</p>


                <div className={linkConditions === "figma"? null:"hidden"}>
                    <a href={props.figma} rel="noopener noreferrer" target="_blank"><LiveTvIcon />Figma Demo</a>
                </div>
                <div className={linkConditions === "github"? null:"hidden"}>
                    <a href={props.demo} rel="noopener noreferrer" target="_blank"><LiveTvIcon />Live App</a>
                    <a href={props.github} rel="noopener noreferrer" target="_blank"><GitHubIcon />GitHub</a>
                </div>
            </div>

        </div>


    )
}

export default WorkHeader