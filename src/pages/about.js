import React,{useState} from 'react'
import Header from '../components/Header'
import './About.scss'

function About() {
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
                <Header title="About" />
                <div className="about-container">
                    <div className="about-left">
                        <img src={require('../images/self-pic.jpg')} alt="avatar" className="mobile-avatar"></img>
                        <h2>Hi! I am Hannah.</h2>
                        {/* TODO:NEED TO REMOVE DUPLICATES */}
                        <p>Hello! I am Hannah, a designer turned Frontend Web Developer who is currently pursuing the MS in Human-Centered & Engineering degree at the University of Washington. I am interested in combining my passion for web development and my UX design skills, to explore possibilities that could bring convenience for users' routine life. My latest project is an asynchronous travel web app that allows users to obtain and document necessary information for their future trips Hello! I am Hannah, a designer turned Frontend Web Developer who is currently pursuing the MS in Human-Centered & Engineering degree at the University of Washington. I am interested in combining my passion for web development and my UX design skills, to explore possibilities that could bring convenience for users' routine life. My latest project is an asynchronous travel web app that allows users to obtain and document necessary information for their future trips</p>
                    </div>
                    <div className="about-right">
                        <img src={require('../images/self-pic.jpg')} alt="avatar"></img>
                        <a href="/"><h2>Resume</h2></a>
                    </div>

                </div>
            </div>
            

        </div>
    )
}

export default About