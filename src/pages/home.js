import React,{useState} from 'react'
import './Home.scss'
import Header from '../components/Header'
import Card from '../components/Card'



function Home() {

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
                <Header
                    title="Hannah"
                    subtitle="Wu"
                    body="A designer turned web developer who creatively builds products that could bring convenience and beauty for users."
                />
                <div className="project-container">
                    <div className="card-row">
                        <Card
                            image={require('../images/card1.gif')}
                            title="Future trip snippet"
                            subtitle="Travel Web App"
                            intro="A travel app to keep all you need for your future trip"
                            backgroundColor="one"
                            link="/travel-app"
                        />
                        <Card
                            image={require('../images/card2.gif')}
                            title="Hanna's Blog"
                            subtitle="Blogging Web App"
                            intro="A blogging app that documents the beauty of life"
                            backgroundColor="two"
                            link="/travel-app"
                        />
                    </div>

                    <div className="card-row">
                        <Card
                            image={require('../images/card3.png')}
                            title="Weather Journal"
                            subtitle="Weather and diary web app"
                            intro="Records weather and feelings"
                            backgroundColor="three"
                            link="/travel-app"
                        />
                        <Card
                            image={require('../images/card4.jpg')}
                            title="Project Galene"
                            subtitle="UX Design"
                            intro="A combination of mobile app and hardware kit aims at encouraging scuba divers to contribute to citizen science"
                            backgroundColor="four"
                            link="/travel-app"
                        />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home