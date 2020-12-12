import React from 'react'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import './IssueCause.scss'

export default function IssueCause(props) {
    return (
        <div className="issue-cause">
        <div className="issue-cause-title"><ErrorOutlineIcon fontSize="large"></ErrorOutlineIcon><span>Problems:</span></div>
        <ul>
            {props.problems.map(problem=><li key={Math.random()}>{problem}</li>)}
        </ul>
        <div className="issue-cause-title"><SentimentVeryDissatisfiedIcon fontSize="large"></SentimentVeryDissatisfiedIcon><span>Causes:</span></div>
        <ul>
            {props.causes.map(cause=><li key={Math.random()}>{cause}</li>)}
        </ul>
            
        </div>
    )
}
