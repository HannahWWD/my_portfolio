import React from 'react'
import Header from '../components/Header'
import './About.scss'

function About() {
    // document.body.style.overflow="hidden";
    

    // const [isAnimationDone, setIsAnimationDone] = useState(false)

    // function loadedContent(){
    //     setTimeout(()=>{
    //         setIsAnimationDone(true)},2000)
    //     }
    
    // if(isAnimationDone){
    //     document.body.style.overflowY="scroll";
    // }

    return (

        <div>
{/* 
        <div className={isAnimationDone? "hidden":"overlay"}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div> */}

            <div className="main-content">
                <Header title="About" />
                <div className="about-container">
                    <div className="about-left">
                    <img src={require('../images/self-pic.jpg')} alt="avatar"></img>
                       
                    </div>
                    <div className="about-right">
                    <div>
                    <h2>Hi! I am Hannah.</h2>
                        {/* TODO:NEED TO REMOVE DUPLICATES */}
                        <p>Hello! I am Hannah, a designer UX Engineer who is currently pursuing the MS in Human-Centered & Engineering degree at the University of Washington. I am interested in combining my passion for web development and my UX design skills, to explore possibilities that could bring convenience for users' routine life. <br/> <br/> I enjoy building functionable, high-fidelity prototypes to test out concepts. Before HCDE, I was a UX designer at SeeekLab in China. Teamed with software and hardware engineers, I designed and developed high fidelity prototypes for 10+ proof-of-concept projects.<br/> <br/><b>Before UX:</b> <br/>I also hold a master's and a bachelor's degree in architecture design. <br/>I am capable of making 3D models and renderings.</p>
                        </div>
                        <a href={require('../images/resume_Wu_Hannah_1.pdf')} rel="noopener noreferrer" target="_blank"><h2>Resume</h2></a>
                    </div>
                   

                </div>
            </div>
            

        </div>
    )
}

export default About