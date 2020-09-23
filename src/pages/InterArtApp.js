import React from 'react'
import './TravelApp.scss'
import './InterArt.scss'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import WorkHeader from '../components/WorkHeader'



function InterArtApp() {
    return (

        <div className="width-100">
            <WorkHeader
                title="InterArt"
                subtitle="Interactive art community web app"
                role="Role: Product Designer & UX Engineer / Duration: 1 month"
            />

            <article className="main-content work-content">
                <section>
                    <p className="body-s">React / Sass / Node / Express / Heroku</p>
                    <h2>An interactive multimedia art community for designers and art lovers</h2>
                   
                </section>

                <div><img src={require('../images/interart-1.jpg')} alt="desktop and mobile view"></img></div>
                <br /><br />
                <section>
                    <h3>Lightbulb moment (Problem) </h3>
                    <p>I used to work as an interactive installation designer. This emerging field is trendy, which attracts more and more designers transiting into this novel realm. Nonetheless, its community is still immature. Unlike architectural designers, who could find trending architecture projects on Archdaily, or UX designers, who could get inspirations from Dribbble/Behance, <b>interactive art designers do not have a centralized place to find, collect or share related projects.</b>This issue inspires me to create a website for all interactive art designers and art lovers.</p>
                </section>
                <section>
                    <h3>What is interactive multimedia art?</h3>
                    <div className="three-cols">
                        <div>
                            <img src={require('../images/hot-i.png')} alt="hot icon"></img>
                            <p>Interactive multimedia art refers to art installations that viewers could interact with. This type of art often integrates emerging technologies with multiple media materials such as light, sound, and physical objects which can dynamically change their digital and/or physical interfaces according to viewers’ motions</p>
                        </div>
                        <div>
                            <img src={require('../images/location-i.png')} alt="location icon"></img>
                            <p>Interactive multimedia art is trendy in a lot of countries, and has gradually penetrated people’s daily lives. Interactive multimedia art could be found on art exhibitions, shopping centers, hotel lobbies and open public areas</p>
                        </div>
                        <div>
                            <img src={require('../images/light-i.png')} alt="location icon"></img>
                            <p>Light effects are the most common used effects in interactive multimedia art to provide immersive experience. Tips: Click <a href="https://borderless.teamlab.art/shanghai/" target="_blank" rel="noopener noreferrer"><b>HERE</b></a> to checkout teamLab’s awesome borderless exhibition</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h3>Define</h3>
                    <p>An overarching design question for this project is:</p>
                    <p className="insight" style={{ fontSize: "18px", margin: "2em 0" }}><b>How to build a website where <span>interactive art designers and art lovers</span> could <span>conveniently get inspirations</span> and <span>interact with the community?</span></b></p>
                    <p>To better understand the design question, I  conducted 4 user interviews focusing on these research questions:</p>
                    <br />
                    <ol>
                        <li>When will designers and art lovers visit a similar website? (scenarios)</li>
                        <li>Why will designers and art lovers visit a similar website? (purpose)</li>
                        <li>How would they look for projects, and what kinds of information will designers and art lovers pay attention to? (pattern)</li>
                        <li>How do designers and art lovers interact with a community?(pattern)</li>
                    </ol>
                        <h4>1) Synthesising insights through Affinity Diagramming</h4>
                    </section>
                        <a href="https://miro.com/app/board/o9J_kmQK9CE=/" rel="noopener noreferrer" target="_blank"><img src={require('../images/analysis-thumb.jpg')} alt="affinity diagram"></img></a>
                    <section>
                        <h4>2) Generate Persona through insights</h4>
                    </section>
                  
              
                <img src={require('../images/persona.png')} alt="persona"></img>
                <section>
                    <h4>3) Main takeaways</h4>
                    <div>
                    <p><b>Observation 1 : Desktop website for project references, and mobile website for daily digests.</b></p>
                    <p className="note-s">4/4 participants indicated that they would visit a website via computers when they were looking for references for a project. When they were looking for daily digests, they will check out  a website via mobile phones</p>
                    <br/>
                    <p className="insight"><b><span>Insight:</span></b> Make the website responsive, which desktop view and mobile view should have different emphasis. Desktop view should prioritize project searching and mobile view should prioritize the article reading experience</p>

                    <br/>
                    <p><b>Observation 2: Photos are the most important information for project searching.</b></p>
                    <p className="note-s">4/4 participants mentioned that they paid most attention to what a project looked like </p>
                    <br/>
                    <p className="insight"><b><span>Insight:</span></b> Allow flexible image height to best showcase a project</p>

                    <br/>
                    <p><b>Observation 3: Participants often search for projects through categories. ( designer/ materials/topic tags)</b></p>
                    <p className="note-s">4/4 participants mentioned that they paid most attention to what a project looked like </p>
                    <br/>
                    <p className="insight"><b><span>Insight:</span></b> 2/4 participants mentioned that they would look at the category menu if they need references for a specific type of project </p>

                    <br/>
                    <p><b>Observation 4: Participants usually share posts through mobile phone</b></p>
                    <br/>
                    <p className="insight"><b><span>Insight:</span></b> UI should be user-friendly for making photo posts in mobile view, in order to encourage participants to interact and contribute to the community </p>
                    </div>

                    

                </section>
                <section>
                    <h3>Ideation</h3>
                    <p>Gained from previous insights, I started sketching following these requirements:</p>
                    <div className="design-requirements">
                    <p><b>General</b></p>
                    <div><DonutLargeIcon fontSize="large"/>Make the website responsive, which desktop view and mobile view should have different emphasis</div>
                    <div><DonutLargeIcon fontSize="large" />Allow flexible image height to best showcase a project</div>
                    <div><DonutLargeIcon fontSize="large" />Use dark theme to better showcase artworks' light effects</div>
                    <p><b>Desktop</b></p>
                    <div><DonutLargeIcon fontSize="large"/>prioritize project searching</div>
                    <div><DonutLargeIcon fontSize="large"/>Make categories easy to find</div>
                    <p><b>Mobile</b></p>
                    <div><DonutLargeIcon fontSize="large"/>prioritize reading experience</div>
                    <div><DonutLargeIcon fontSize="large"/>UI should be user-friendly for making photo posts in mobile view</div>
                    </div>
                </section>
                
                <a href="https://drive.google.com/file/d/1-zNqfiI-lnA1L7-YRgomdYBPRRkrwn-9/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img src={require('../images/flow-1.png')} alt="user flow" className="user-flow"></img></a>
               
               <section>
                   <h3>Test and Iteration</h3>
                   <p></p>
               </section>





            </article>


        </div>


    )
}

export default InterArtApp