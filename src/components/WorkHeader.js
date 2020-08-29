import React from 'react'
import './WorkHeader.scss'
import GitHubIcon from '@material-ui/icons/GitHub';
import LiveTvIcon from '@material-ui/icons/LiveTv';


function WorkHeader(props){
    return(

        <div className="work-header-container">
            <div className="work-header-content">
                <p>{props.subtitle}</p>
                <h1>{props.title}</h1>
                <div>
                    <button type="button"><LiveTvIcon />Website</button>
                    <button type="button"><GitHubIcon />GitHub</button>
                </div>
            </div>
            
        </div>
    
    
        )
}

export default WorkHeader