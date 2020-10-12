import React from 'react'
import './Footer.scss'
import {Link} from 'react-router-dom'


function Footer() {


    return (
        <footer>
            <div className="footer-menu">
                <p className="body-s">menu</p>
                <ul>
                    <li><Link to="/">Work</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href={require('../images/resume_Wu_Hannah_1.pdf')} rel="noopener noreferrer" target="_blank">Resume</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="footer-contact">
                <div>
                    <p className="body-s">email</p>
                    <p>hannahwu0707@gmail.com</p>
                </div>
                <div>
                    <p className="body-s">follow me</p>
                    <div className="social-icons">
                        <a href="https://github.com/HannahWWD" target="_blank" rel="noopener noreferrer"><img src={require('../images/github.svg')}  alt="GitHub"></img></a>
                        <a href="https://www.linkedin.com/in/hannah-wu-wendan/" target="_blank" rel="noopener noreferrer"><img src={require('../images/linkedin.svg')} alt="LinkedIn"></img></a>
                        <a href="https://www.instagram.com/ponyyyyy_0v0/" target="_blank" rel="noopener noreferrer"><img src={require('../images/ins.svg')} alt="Instagram"></img></a>
                        
                    </div>
                </div>
                <div className="credit">
                    <p>Designed and developed with React</p>
                    <p>© Hannah Wu 2020</p>
                    {/* <p>See <Link to="/">Credits and Attributions</Link></p> */}
                </div>


            </div>

        </footer>
    )
}

export default Footer