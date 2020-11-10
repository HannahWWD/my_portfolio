import React,{useEffect,useState} from 'react'
import './TemplateStyle.scss'
import './InterArt.scss'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import WorkHeader from '../components/WorkHeader';
import GitHubIcon from '@material-ui/icons/GitHub';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SectionNav from '../components/SectionNav';
import {HashLink} from 'react-router-hash-link';
import HorizontalStepper from '../components/HorizontalStepper'




function InterArtApp() {
    const [ids, setIds] = useState([])
    const [sectionNames,setSectionNames] = useState([])

    useEffect(() => {
        const allSection = document.querySelectorAll('section');
        for(let section of allSection){
            if(section.id){
                setIds(prev=>[...prev,section.id])
                setSectionNames(prev=>[...prev,section.dataset.sectionName])
            }
        }
        
    }, [])



    return (
       
        <div>
         {ids.length ? <SectionNav ids={ids} sectionNames={sectionNames}/>:null}
            <WorkHeader
                title="InterArt"
                subtitle="Interactive art community web app"
                role="Role: Product Designer & Front End Engineer / Duration: 1 month"
                github="https://github.com/HannahWWD/interart_with_server"
                demo="https://interart-app.herokuapp.com/"
            />

            <article className="main-content work-content">
                <section id="about" data-section-name="beginning" className="about">
                    <p className="body-s">React / Sass / Node / Express / Heroku / GitHub / AJAX</p>
                    <h2>An interactive multimedia art community for designers and art lovers</h2>
                    <HashLink smooth to="#code">Jump to Development Section</HashLink>
                   
                </section>

                <div><img src={require('../images/interart-1.jpg')} alt="desktop and mobile view"></img></div>
                <br /><br />
                <section id="problem" data-section-name="the problem">
                    <h3>Lightbulb moment (Problem) </h3>
                    <p>I used to work as an interactive installation designer. This emerging field is trendy, which attracts more and more designers transiting into this novel realm. Nonetheless, its community is still immature. Unlike architectural designers, who could find trending architecture projects on Archdaily, or UX designers, who could get inspirations from Dribbble/Behance, <b>interactive art designers do not have a centralized place to find, collect or share related projects.</b>This issue inspires me to create a website for all interactive art designers and art lovers.</p>
                    <h4>Timeline and Process</h4>
                    <HorizontalStepper />

                </section>
                <section id="background" data-section-name="background intro">
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
                <section id="define" data-section-name="define requirement">
                    <h3>Define Design Requirements</h3>
                    <p>An overarching design question for this project is:</p>
                    <p className="insight highlight"><b>How to build a website where <span>interactive art designers and art lovers</span> could <span>conveniently get inspirations</span> and <span>interact with the community?</span></b></p>
                    <p>To better understand the design question, I  conducted 4 user interviews focusing on these research questions:</p>
                    <br />
                    <ol>
                        <li>When will designers and art lovers visit a similar website? (scenarios)</li>
                        <li>Why will designers and art lovers visit a similar website? (purpose)</li>
                        <li>How would they look for projects, and what kinds of information will designers and art lovers pay attention to? (pattern)</li>
                        <li>How do designers and art lovers interact with a community?(pattern)</li>
                    </ol>
                        <h4>1) Synthesising insights through Affinity Diagramming</h4>
                        <a href="https://miro.com/app/board/o9J_kmQK9CE=/" rel="noopener noreferrer" target="_blank"><img src={require('../images/analysis-thumb.jpg')} alt="affinity diagram"></img></a>
                        <h4>2) Generate Persona through insights</h4>
                        <a href={require('../images/persona.png')} rel="noopener noreferrer" target="_blank"><img src={require('../images/persona.png')} alt="persona"></img></a>
                    </section>
                  
              
                
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
                <section id="ideation" data-section-name="ideation">
                    <h3>Ideation</h3>
                    <p>Gained from previous insights, I started sketching following these requirements:</p>
                    <div className="customized-list">
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
                    <h4>User Task Flow</h4>
                    <a href={require('../images/task_flow_small.jpg')} target="_blank" rel="noopener noreferrer"><img src={require('../images/task_flow_small.jpg')} alt="task flow"></img></a>
              
                    <h4>Wireframing</h4>
                    <a href={require('../images/taskflow_prev.png')} target="_blank" rel="noopener noreferrer"><img src={require('../images/taskflow_prev.png')} alt="user flow prev" className="user-flow"></img></a></section>
                
               
               
               <section id="test" data-section-name="test and iteration">
                   <h3>(Mini) Usability Test and Iteration</h3>
                   <p>I conducted informal, rapid usability tests with 2 potential users. Four main usability issues and their solutions as follows: </p>
                  
                   <p><b>Issue 1: Participants didn’t realize that he could comment / like / share posts</b></p>
                    <p className="note-s">Lacking proper indicators for comment/like/share functionalities made participants considered this website as a project searching website instead of a community(2/2 participants).</p>
                    <br/>
                    <p className="insight"><b><span>Solution: </span></b>On the home page, use ‘like,’ ‘comment,’ ‘share’ icon as hints to acknowledge first-time users that this website a community instead of a static project searching website. </p>
                   
                   <br/>
               </section>
                <img className="extra-margin" src={require('../images/ut1.png')} alt="usability change 1"></img>

                <section>

                <p><b>Issue 2: One Participant searched for collections in the search bar</b></p>
                    <p className="note-s">A participant used the search bar to search for ‘design one’s project collection. The search result only showed scattered posts related to ‘designer one,’ instead of a well-organized collection.(1/2 participants)</p>
                    <br/>
                    <p className="insight"><b><span>Solution: </span></b>Make the category menu easier to find in the home page. Also display collection entry when certain terms are detected in the search bar.</p>
                </section>
                <img className="extra-margin" src={require('../images/ut2.png')} alt="usability change 2"></img>

            <section>
                <p><b>Issue 3: One Participant couldn’t find the “my archives” tab</b></p>
                    <p className="note-s">The “my archives” tab could only be accessed after clicking the avatar. When a participant was asked to find the posts he saved, he tried to find it from the main menu, and the “my archived” option was not there.(1/2 participants)</p>
                    <br/>
                    <p className="insight"><b><span>Solution: </span></b>Allow multiple ways to get access to “my archives”.</p>
            </section>
                <img className="extra-margin" src={require('../images/ut3.png')} alt="usability change 3"></img>

                <section>
                <p><b>Issue 4: One participant spent some time to find his profile in the mobile view</b></p>
                    <p className="note-s">A lack of consistency in the navbar confused the participant. He tried to get access to his profile through the avatar but couldn't find the avatar icon on the mobile view's navbar. Although this task was successfully completed, the participant spent a while to locate his profile within the hamburger menu(1/2 participants)</p>
                    <br/>
                    <p className="insight"><b><span>Solution: </span></b>Add an avatar icon to the navigation bar in mobile view.</p>
            </section>
                <img className="extra-margin" src={require('../images/ut4.png')} alt="usability change 4"></img>
            <section>
                <h4>Iterated user task flow</h4>
            </section>
                <img src={require('../images/taskflow_after.png')} alt="task flow after"></img>
                <img src={require('../images/taskflow_after-m.png')} alt="task flow after mobile"></img>

            <section>
                <h4>Final App Hierarchy</h4>
                <a href={require('../images/webapp-userflow_small.jpg')} target="_blank" rel="noopener noreferrer"><img src={require('../images/webapp-userflow_small.jpg')} alt="webapp user flow"></img></a>
            </section>

            
            <section id="high-fid" data-section-name="high fidelity prototype">
                <h3>High Fidelity Prototype in Figma</h3>
                <p>Before dived into live demo development, I made a high fidelity prototype in Figma as a blue print for the website.</p>
                
            </section>
            
            
            

            <figure>
                <img className="extra-margin" src={require('../images/all_desktop.jpg')} alt="desktop view"></img>
                <figcaption>Desktop View</figcaption>
            </figure>
            <figure>
                <img className="extra-margin" src={require('../images/all_mobile.jpg')} alt="mobile view"></img>
                <figcaption>Mobile View</figcaption>
            </figure>

            <section id="code" data-section-name="code it up and deploy">
                <h3>Coding It Up and Deploy</h3>
                <p>I coded up the web app after the high fidelity was done. It took me about 2 weeks to implement its functionalities, and it was great fun to really made the web app operational. I started with using React to build the front end interfaces, and then established a server with Node.js and Express to host user data. I developed an API myself to faked the posts feeds that could dynamically update the client interfaces.</p>
            </section>
            <section id="technical" data-section-name="technical sheet">
                <h3>Technical Sheet</h3>
                <p>Code technologies that I used for this project:</p>
                <br/>
                <div className="customized-list">
                <div><DonutLargeIcon fontSize="large"/>React -- JSX, ES6</div>
                <div><DonutLargeIcon fontSize="large"/>SASS, BootStap</div>
                <div><DonutLargeIcon fontSize="large"/>Node.JS and Express -- backend server</div>
                <div><DonutLargeIcon fontSize="large"/>Heroku with GitHub -- deployment</div>
                <div><DonutLargeIcon fontSize="large"/>AJAX</div>
                </div>
                <br/>
                <p>Implemented Features:</p>
                <div className="customized-list">
                <div><DonutLargeIcon fontSize="large"/>Continuously obtain new feed through infinite scrolling</div>
                <div><DonutLargeIcon fontSize="large"/>Get access to all posts and collections which are dynamically generated through mock APIs on the server</div>
                <div><DonutLargeIcon fontSize="large"/>Save posts and find them in archives</div>
                <div><DonutLargeIcon fontSize="large"/>Make new posts</div>
                <div><DonutLargeIcon fontSize="large"/>Delete posts</div>
                </div>

                <br/>
                <h3>Live Demo and GitHub</h3>
                <p>View the live web app demo and github:</p>
                <div className="live-demo-container">
                <p>The Heroku Dyno, which powers the app, sleeps after 30 mins of inactivity in free plan and needs time to re-power.</p>
                <br/>
                <p><b><span>It might take 5~10 seconds to load the demo. Please Do NOT close the browser while loading.</span></b></p>
                
                <a href="https://interart-app.herokuapp.com/" rel="noopener noreferrer" target="_blank" className="live-demo-btn"><LiveTvIcon />Live App</a>
                
                <a href="https://github.com/HannahWWD/interart_with_server" rel="noopener noreferrer" target="_blank" className="live-demo-btn btn-contour"><GitHubIcon />GitHub</a>
                </div>
            </section>
            <section id="reflection" data-section-name="reflection">

                <h3>Reflection</h3>
                <p>It was a long journey --- from UX research to UX design, and from UX design to deploy the web app. I appreciate this challenging experience of implementing everything as a one-man-army. It is hard, but I've learned a lot.</p>
                <p><b>what was surprising</b></p>
                <p>Developing a live prototype is extremely helpful for discovering design problems. Even though I had made a high fidelity prototype in Figma, I still found several neglected details during the development of the live version. For example, I didn't realize that the search bar would eventually disappear in the viewport during the vertical scrolling. To fix this issue, I have to add a fixed search bar on the navbar. </p>
                <p><b>Giving more time</b></p>
                <p>1. Talk to more users and gain comprehensive insights for UX design</p>
                <p>2. Revise the user interface design and add more details functions</p>
                <p>3. Implemented the signup and login functions to make the web app fully workable</p>

            </section>
                
            </article>

        </div>


    )
}

export default InterArtApp
