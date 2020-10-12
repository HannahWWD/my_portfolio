import React from 'react'
import './Home.scss'
import Header from '../components/Header'
import Card from '../components/Card'



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
                    body="A designer turned UX ENGINEER who creatively designs and builds products that could bring convenience and beauty for users."
                />
                <div className="project-container">
                    <div className="card-row">
                        <Card
                            image={require('../images/card2.gif')}
                            title="InterArt"
                            subtitle="Interactive Art Community Web App"
                            intro="An interactive multimedia art community for designers and art lovers"
                            backgroundColor="two"
                            link="/interart"
                        />
                         <Card
                            image={require('../images/card4.jpg')}
                            title="Project Galene"
                            subtitle="Mobile App UX Design"
                            intro="A combination of mobile app and hardware kit aims at encouraging scuba divers to contribute to microplastic research"
                            backgroundColor="one"
                            link="/galene"
                        />
                        
                        
                    </div>

                    <div className="card-row">
                    <Card
                            image={require('../images/card1.gif')}
                            title="trip snippet"
                            subtitle="Travel Web App"
                            intro="A travel app to keep all you need for your future trip"
                            backgroundColor="four"
                            tempLink="https://github.com/HannahWWD/travel_app"
                        />
                        <Card
                            image={require('../images/card3.png')}
                            title="Weather Journal"
                            subtitle="Weather and diary web app"
                            intro="Records weather and feelings"
                            backgroundColor="three"
                            link="https://github.com/HannahWWD/weather-journal"
                        />
                       
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home