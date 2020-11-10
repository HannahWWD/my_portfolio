import React from 'react'
import './Home.scss'
import Header from '../components/Header'
import Card from '../components/Card'
import { useState } from 'react'



function Home() {

    // document.body.style.overflow="hidden";
    

    // const [isAnimationDone, setIsAnimationDone] = useState(false)

    // function loadedContent(){
    //     setTimeout(()=>{
    //         setIsAnimationDone(true)},2000)
    //     }
    
    // if(isAnimationDone){
    //     document.body.style.overflowY="scroll";
    // }

    const [activeTab,setActiveTab] = useState('all')

    


    return (
        <div>

            {/* <div className={isAnimationDone? "hidden":"overlay"}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div> */}


            <div className="main-content">
                <Header
                    title="Hannah"
                    subtitle="Wu"
                    body="A designer turned UX ENGINEER & WEB DEVELOPER trying to bring convenience and beauty for users."
                />
                <div className="filters">
                    <button onClick={()=>{setActiveTab('all')}} className={activeTab === 'all' ? 'active':null}>All</button>
                    <button onClick={()=>{setActiveTab('dev')}} className={activeTab === 'dev'? 'active':null}>Development</button>
                    <button onClick={()=>{setActiveTab('ux')}} className={activeTab === 'ux' ? 'active':null}>UX Design</button>
                    </div>
                <div className="project-container">
                    <div className="card-row">
                        <Card
                            image={require('../images/n_cover_1.jpg')}
                            title="InterArt"
                            subtitle="Interactive Art Community Web App"
                            intro="An interactive multimedia art community for designers and art lovers"
                            backgroundColor="four"
                            link="/interart"
                            visibility={activeTab === 'all' || activeTab === 'ux' || activeTab === 'dev'? true:false}
                            tag={["UX research","UX design","web development"]}
                        />
                         <Card
                            image={require('../images/n_cover_2.jpg')}
                            title="Project Galene"
                            subtitle="Microplastic Research App and Sampler"
                            intro="A combination of mobile app and hardware kit aims at encouraging scuba divers to contribute to microplastic research"
                            backgroundColor="one"
                            link="/galene"
                            visibility={activeTab === 'all' || activeTab === 'ux'? true:false}
                            tag={["UX research","UX design"]}
                        />
                        
                        
                    </div>

                    <div className="card-row">
                    <Card
                            image={require('../images/cover3.jpg')}
                            title="Weather Widget"
                            subtitle="Weather Web App"
                            intro="Know current and future weather in your city at a glance "
                            backgroundColor="three"
                            link="/weather-widget"
                            visibility={activeTab === 'all' || activeTab === 'dev'? true:false}
                            tag={["web development","UI design"]}
                        />
                    <Card
                            image={require('../images/card1.gif')}
                            title="trip snippet"
                            subtitle="Travel Web App"
                            intro="A travel app to keep all you need for your future trip"
                            backgroundColor="two"
                            tempLink="https://github.com/HannahWWD/travel_app"
                            visibility={activeTab === 'all' || activeTab === 'dev'? true:false}
                            tag={["web development","UI design"]}
                        />
                      
                       
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home