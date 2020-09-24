import React from 'react'
import {HashLink} from 'react-router-hash-link';
import './SectionNav.scss';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function SectionNav(props) {

    return (
            <div className="section-nav">
            {props.ids.map((id,index)=>(
                <HashLink smooth to={"#" + id} key={Math.random()}><FiberManualRecordIcon />{props.sectionNames[index]}</HashLink>
            ))}
       
    
        </div>
           
    )
}

export default SectionNav
