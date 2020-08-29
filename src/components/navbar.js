import React,{useState} from 'react'
import { Link, withRouter } from 'react-router-dom'
import './Navbar.scss'
import MenuIcon from '@material-ui/icons/Menu';


function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false)

    function handleNavClicked (){
        setIsExpanded(!isExpanded);
    }


    return (
        <nav className={isExpanded? "nav-wrapper":"nav-wrapper nav-shrink"}>
            <ul className="tab">
                <li><Link to="/">Work</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <MenuIcon className="expand-icon" onClick={handleNavClicked}/>
        </nav>)



}

export default withRouter(Navbar)