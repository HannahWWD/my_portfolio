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
                    body={["I design and code creative things to test meaningful ideas.",`${String.fromCodePoint("0x1F646")} UX Engineer @UW HCDE`,`${String.fromCodePoint("0x1F4BB")} Prototyping Lover`,`${String.fromCodePoint("0x1F596")} Proudly built this portfolio with React`]}
                />
                <div className="filters">
                    <button onClick={()=>{setActiveTab('all')}} className={activeTab === 'all' ? 'active':null}>All</button>
                    <button onClick={()=>{setActiveTab('ux')}} className={activeTab === 'ux' ? 'active':null}>UX Design</button>
                    <button onClick={()=>{setActiveTab('dev')}} className={activeTab === 'dev'? 'active':null}>Development</button>
                    </div>
                <div className="project-container">
                    <div className={activeTab === 'all' || activeTab === 'ux' ? "card-row":"hidden"}>
                        <Card
                            image={require('../images/mockup_pet.jpg')}
                            placeholderImg = {require('../images/mockup_pet_placeholder.jpg')}
                            title="Fluffy"
                            subtitle="Animal Adoption Website"
                            intro="Connecting adopters with their ideal pets"
                            backgroundColor="two"
                            link="/Pet"
                            // visibility={activeTab === 'all' || activeTab === 'ux' ? true:false}
                            tag={["UX research","UX design","web development"]}
                            />

                        <Card
                            image={require('../images/n_cover_2.jpg')}
                            placeholderImg = {require('../images/n_cover_2_placeholder.jpg')}
                            title="Project Galene"
                            subtitle="Microplastic Research App and Sampler"
                            intro="A combination of mobile app and hardware kit aims at encouraging scuba divers to contribute to microplastic research"
                            backgroundColor="one"
                            link="/galene"
                            // visibility={activeTab === 'all' || activeTab === 'ux'? true:false}
                            tag={["UX research","UX design"]}
                        />                        
                    </div>

                    {/* don't know how to have the animation as well as have a single item in a row */}

                    <div className={activeTab === 'ux' ? "card-row":"hidden"}>
                    <Card
                            image={require('../images/n_cover_1.jpg')}
                            placeholderImg = {require('../images/n_cover_1_placeholder.jpg')}
                            title="InterArt"
                            subtitle="Interactive Art Community Web App"
                            intro="An interactive multimedia art community for designers and art lovers"
                            backgroundColor="four"
                            link="/interart"
                            //visibility={activeTab === 'all' || activeTab === 'ux' || activeTab === 'dev'? true:false}
                            tag={["UX research","UX design","web development"]}
                        />
                        <Card
                            image={require('../images/n_cover_placeholder.png')}
                            backgroundColor="three"
                            
                            visibility="placeholder"
                           
                        />

                    </div>

                    <div className={activeTab === 'all' || activeTab === 'dev' ? "card-row":"hidden"}>
                    <Card
                            image={require('../images/n_cover_1.jpg')}
                            placeholderImg = {require('../images/n_cover_1_placeholder.jpg')}
                            title="InterArt"
                            subtitle="Interactive Art Community Web App"
                            intro="An interactive multimedia art community for designers and art lovers"
                            backgroundColor="four"
                            link="/interart"
                            //visibility={activeTab === 'all' || activeTab === 'ux' || activeTab === 'dev'? true:false}
                            tag={["UX research","UX design","web development"]}
                        />
                         
                    
                    <Card
                            image={require('../images/cover3.jpg')}
                            placeholderImg = {require('../images/cover3_placeholder.jpg')}
                            title="Weather Widget"
                            subtitle="Weather Web App"
                            intro="Know current and future weather in your city at a glance "
                            backgroundColor="three"
                            link="/weather-widget"
                            //visibility={activeTab === 'all' || activeTab === 'dev'? true:false}
                            tag={["web development","UI design"]}
                        />
                    {/* <Card
                            image={require('../images/card1.gif')}
                            title="trip snippet"
                            subtitle="Travel Web App"
                            intro="A travel app to keep all you need for your future trip"
                            backgroundColor="two"
                            tempLink="https://github.com/HannahWWD/travel_app"
                            visibility={activeTab === 'all' || activeTab === 'dev'? true:false}
                            tag={["web development","UI design"]}
                        /> */}
                      
                       
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home