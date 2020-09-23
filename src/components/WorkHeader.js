import React from 'react'
import './WorkHeader.scss'
import GitHubIcon from '@material-ui/icons/GitHub';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import { Link } from 'react-router-dom';


function WorkHeader(props){
    return(

        <div className="work-header-container">
            <div className="work-header-content">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <p>{props.role}</p>
           
               
                <div>
                    
                        <Link to={props.demo}><LiveTvIcon />Live Demo</Link>
                    
                    
                    <Link to={props.github}><GitHubIcon />GitHub</Link>
                </div>
            </div>
            
        </div>
    
    
        )
}

export default WorkHeader