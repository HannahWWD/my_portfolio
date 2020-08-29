import React,{useState} from 'react'
import './Contact.scss'
import Header from '../components/Header'

function Contact() {

    document.body.style.overflow="hidden";
    

    const [isAnimationDone, setIsAnimationDone] = useState(false)

    function loadedContent(){
        setTimeout(()=>{
            setIsAnimationDone(true)},2000)
        }
    
    if(isAnimationDone){
        document.body.style.overflowY="scroll";
    }

    return (
        <div onLoad={loadedContent}>

            <div className={isAnimationDone? "hidden":"overlay"}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>


            <div className="main-content">
                <Header title="contact" />
                <div className="contact-content">
                    <div className="contact-left">
                        <img src={require('../images/heart.png')} alt="decoration"></img>
                    </div>
                    <div className="contact-right">
                        <h2>I am <br />looking <br />forward to <br />hearing from <br />you.</h2>
                        <div className="contact-method">
                            <div>
                                <p className="body-s">email</p>
                                <p>hannahwu0707@gmail.com</p>
                            </div>
                            <div>
                                <p className="body-s">phone</p>
                                <p>+1 (206) 291 2675</p>
                            </div>
                            <div>
                                <p className="body-s">follow me</p>
                                <div className="social-icons">
                                    <a href="https://github.com/HannahWWD" target="_blank" rel="noopener noreferrer"><img src={require('../images/github.svg')} alt="GitHub"></img></a>
                                    <a href="https://www.linkedin.com/in/hannah-wu-wendan/" target="_blank" rel="noopener noreferrer"><img src={require('../images/linkedin.svg')} alt="LinkedIn"></img></a>
                                    <a href="https://www.instagram.com/ponyyyyy_0v0/" target="_blank" rel="noopener noreferrer"><img src={require('../images/ins.svg')} alt="Instagram"></img></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Contact