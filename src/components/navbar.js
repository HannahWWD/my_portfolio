import React,{useState} from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Navbar.scss'
import MenuIcon from '@material-ui/icons/Menu';


function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false)

    // expand/collapse when menu icon is clicked
    // collapse (reset navbar) when link is clicked
    function handleNavClicked (event){
        if(event.target.nodeName==="svg"||event.target.nodeName==="path"){
            setIsExpanded(!isExpanded);
        }else if(event.target.nodeName==="A"){
            setIsExpanded(false)
        }
    }

    return (
        <nav onClick={handleNavClicked} className={isExpanded? "nav-wrapper":"nav-wrapper nav-shrink"}>
            
            <ul className="tab">
                <li><Link to="/">Work</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href={require('../images/resume_Wu_Hannah_1.pdf')} rel="noopener noreferrer" target="_blank">Resume</a></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <MenuIcon className="expand-icon"/>
            
        </nav>)



}

export default withRouter(Navbar)