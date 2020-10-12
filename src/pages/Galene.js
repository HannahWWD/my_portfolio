import React,{useEffect,useState} from 'react';
import './TemplateStyle.scss';
import './Galene.scss';
import WorkHeader from '../components/WorkHeader';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SectionNav from '../components/SectionNav';

export default function Galene() {
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
                title="Project Galene"
                subtitle="Mobile App UX Design"
                role="Role: UX Researcher & UX Designer / Duration: 9 weeks / with Jazz Ang, Kelly Lin, Weixi Zhang"
                figma="https://www.figma.com/proto/PY1KJdZU8YKCgFpyJjmvie/Project-Galene?node-id=8%3A2&viewport=358%2C226%2C0.053081218153238297&scaling=scale-down"
            />
            <article className="main-content work-content">
                <section id="about" data-section-name="beginning">
                    <p className="body-s">Figma / Rhino / Cura / Adobe Creative Cloud</p>
                    <h2>A combination of mobile app and hardware kit aims at encouraging scuba divers to contribute to microplastic research</h2>
                </section>
                <img src={require('../images/galene/Outcome-Overview.jpg')} alt="overview"></img>
                <section id="overview" data-section-name="TL;DR">
                <h3>TL;DR</h3>
                <h4>The Problem</h4>
                <p>Microplastics—tiny pieces less than five millimeters in size—have largely been studied on the ocean surface because of its accessibility. However, many scientists and researchers have discovered that microplastics are also presented at deep-sea columns. To further expand the microplastic research, it is necessary to analyze sediment samples from deep-sea locations worldwide. However, this type of sediment sample is largely inaccessible by land-based scientists.<br/>
                <b>To help solve the problem of inaccessible and insufficient sediment samples for micro-plastic pollution research,</b> we sought to the citizens who possess the necessary skills, interests, and capacity to collect sediment samples - scuba divers.</p>

                <h4>Skateholders</h4>
                <div className="fig-with-caption">
                    <figure>
                    <img src={require('../images/galene/noun_scuba_diver.png')} alt="scubar diver"></img>
                    <figcaption>Scuba Diver</figcaption>
                </figure>
                <figure>
                    <img src={require('../images/galene/noun_Scientist.png')} alt="microplastic researcher"></img>
                    <figcaption>Microplastic Researcher</figcaption>
                </figure></div>

                <h4>Design Question</h4>
                <p className="insight highlight"><b>How can we engage and empower <span>scuba divers</span> to collect <span>deep-sea samples</span> and contribute to <span>microplastic</span> pollution research? </b></p>

                <h4>Key Findings</h4>
                <div className="fig-with-caption">
                    <figure>
                        <img src={require('../images/galene/Bottle.jpg')} alt="bottle"></img>
                        <figcaption>Portable deep-sea sample collection</figcaption>
                    </figure>
                    <figure>
                        <img src={require('../images/galene/chemistry.jpg')} alt="chemistry bottle"></img>
                        <figcaption>Satisfies minimum research requirements</figcaption>
                    </figure>
                    <figure>
                        <img src={require('../images/galene/diver.jpg')} alt="diving"></img>
                        <figcaption>Convenient & intuitive for divers</figcaption>
                    </figure>
                </div>
                <h4>Final Product</h4>
                <p><b>Galene App: Data Report Application</b></p>
                <iframe src="https://www.youtube.com/embed/yq_iz9P0COw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="demo"></iframe>
                <br/>
                <p><b>Galene Capsule: Foldable Sampler</b></p>
                <img src={require('../images/galene/iterated-prototype.jpg')} alt="hardware"></img>
                </section>
                <section id="process" data-section-name="process">
                <h3>Process</h3>
                <div className="stepper">
                <Stepper alternativeLabel activeStep={-1}>
                    <Step>
                        <StepLabel>
                          <b>Exploratory</b><br/>
                          Problem Discover<br/>
                        Expert Interview​<br/>
                        Contextual Inquiry<br/>
                        User Interviews<br/>
                        Surveys<br/>
                        Personas<br/>
                        Synthesize Findings<br/>
                        Iterated Question<br/>
                          </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                        <b>Generative</b><br/>
                        Ideation and Sketching<br/>
                        Concept Testing<br/>
                        Physical Prototyping<br/>
                        User Flow<br/>
                        Wireframing<br/>
                        </StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>
                        <b>Evaluative</b><br/>
                        Usability Testing<br/>
                        Affinity Diagramming<br/>
                        High Fidelity Prototype<br/>
                        Design Specification<br/>
                        Reflection & Next Steps<br/>
                        </StepLabel>
                    </Step>
                </Stepper>

              
          </div>

                </section>
                <section id="exploratory" data-section-name="Exploratory">

                    <h4>Initial Problem Discover</h4>
                    <p>Rather than biodegrading, plastic just gets smaller into microplastics. A 2014 study suggests that there are an estimated 51 trillion particles in the ocean, perhaps even more. It is impossible to clean, and the size of microplastics makes it almost impossible to separate them from water, and hence, marine animals often mistake them as food. Now, 100,000 marine creatures die due to microplastic pollution every year. <b>To study the sources, distribution, and effects of micro-plastic pollution, scientists and researchers require a large quantity of reliable offshore samples - largely inaccessible for land-based scientists.</b></p>
                    <h4>Initial Design Question</h4>
                    <p className="insight highlight"><b>How can we engage and empower <span>people</span>to collect <span>water samples</span> and contribute to microplastic research?</b></p>
                    <h4>Research Method</h4>
                    <div className="research-methods">
                        <div>
                            <p><b>131<br></br>surveys</b></p>
                            {/* <p>We got 131 responses in total from UW student diving club, Seattle Scuba, Silent World Diving System etc. <br/>The survey aims to find out typical diver’s experience, criteria for choosing scuba gear, and willingness to contribute to any scientific research in the future.</p> */}
                        </div>
                        <div>
                            <p><b>1<br></br>expert interview</b></p>
                            {/* <p>We conducted an interview with Dr. Julie Masura in the Geoscience department at UW Tacoma. Her fieldwork has expanded to determining the concentrations of microplastics in the waters of the Pacific Northwest. <br/>We found out current research needs and problems during the interview.</p> */}
                        </div>
                        <div>
                            <p><b>1<br></br>contextual inquiry</b></p>
                            {/* <p>We did the contextual inquiry at Diver Institute of Technology with have the chance to interview Mike Hemion, who is an dive supervisor that trains professional divers.<br/>The observation helped us to understand contextual activities and conditions while diving.</p> */}
                        </div>
                        <div>
                            <p><b>8<br></br>user interviews</b></p>
                            {/* <p>We interviewed 8 scuba divers from diverse backgrounds. <br/> We learned about their motivations for environmental programs, potential concerns about the sampling device and the sample collection process in detail.</p> */}
                        </div>

                    </div>
                <h4>Research Findings</h4>
                <div className="three-cols three-col-galene">
                <div>
                        <img src={require('../images/galene/noun_Water_1808325-01.png')} alt="deep sea"></img>
                        <p>Deep-Sea samples are necessary but inaccessible</p>
                    </div>
                    <div>
                        <img src={require('../images/galene/noun_Bottle_2070603-01.png')} alt="200g bottle"></img>
                        <p>200g of samples needed for conclusive research</p>
                    </div>
                    <div>
                        <img src={require('../images/galene/Page1.png')} alt="search"></img>
                        <p>Missing data happens in current sampling method</p>
                    </div>
                    <div>
                        <img src={require('../images/galene/link1.png')} alt="easy to attach"></img>
                        <p>Function, easy to attach and decent weight are crucial for diving devices</p>
                    </div>
                    <div>
                        <img src={require('../images/galene/high-five-31.png')} alt="high five"></img>
                        <p>Most divers are happy to help, but convenience and user-friendly are important</p>
                    </div>
                    <div>
                        <img src={require('../images/galene/dive-computer.png')} alt="dive computer"></img>
                        <p>Divers are familiar with clip-on hooks and dive computer</p>
                    </div>
                </div>

                <h4>Persona</h4>
                <p>With our insights generated from our user research, we created their respective personas to represent the motivation and frustrations of our primary stakeholders.</p>
                <a href={require('../images/galene/Personas-1.jpg')}  rel="noopener noreferrer" target="_blank"><img src={require('../images/galene/Personas-1.jpg')} alt="persona"></img></a>
                <h4>iterated Design Question</h4>
                <img src={require('../images/galene/revised-question.jpg')} alt="iterated questions"></img>

                <h4>Design Requirements</h4>
                <p>We synthesized the insights from the user researches, and concluded with the following eight 8 core requirements.</p><br/>
                <div className="customized-list">
                    <div><DonutLargeIcon fontSize="large"/>Able to collect at least 200g sediments</div>
                    <div><DonutLargeIcon fontSize="large" />Easy to attach on dive equipments</div>
                    <div><DonutLargeIcon fontSize="large" />Easy to operate under water</div>
                    <div><DonutLargeIcon fontSize="large" />Align with current mental model</div>
                    <div><DonutLargeIcon fontSize="large"/>Able to withstand water pressure</div>
                    <div><DonutLargeIcon fontSize="large" />Leak proof underwater</div>
                    <div><DonutLargeIcon fontSize="large" />Record accurate and valid data</div>
                    <div><DonutLargeIcon fontSize="large" />Easy and automatic data collection</div>

                    </div>



                
                </section>
                <section id="generative" data-section-name="Generative">
                <h3>Generative</h3>
                    <h4>Ideation and Sketching</h4>
                    <p>Based on the above design principles, we explored a variety of form and material through 24 sketches. The sketches were created to explore the breadth of our ideas that prioritizes on three main components of our solution:</p>

                    <p className="highlight">3 necessary components</p>
                    <div className="three-cols three-col-galene">
                        <div>
                        <img style={{width:"80px"}} src={require('../images/galene/noun_Carabiner_850412.png')} alt="carabiner"></img>
                        <p>A carabiner commonly use to securely attach additional devices</p>
                        </div>
                    <div>
                        <img style={{width:"80px"}} src={require('../images/galene/noun_sensor_1895989.png')} alt="sensor"></img>
                        <p>A smart tracker that automatically tracks data</p>
                    </div>
                    <div>
                        <img style={{width:"80px"}} src={require('../images/galene/noun_Bottle_425392.png')} alt="bottle"></img>
                        <p>A smart tracker that automatically tracks data</p>
                    </div>
                    </div>
                    <br></br>
                    <br></br>
                    <img src={require('../images/galene/sketches.jpg')} alt="sketches"></img>
                    <p>Then we narrowed down to three concept from all 24 sketches. We evaluated based on the design principles and eventually down-selected to one concept that combine S-biner with Foldable Bottle to suit all the requirements.</p>
                    <img src={require('../images/galene/down-selection.jpg')} alt="down selection"></img>
                    <h4>Hardware Prototyping Process</h4>
                    <p>Our first hardware prototypes, including the s-biner carabiner, and a sampling device (Galene Capsule), were based on our finalized sketches. The physical prototypes are modelled by Rhino and materialized with 3D printing. After that, we assembled the printed prototype with a collapsible cup that was purchased in the market.</p>
                    <img src={require('../images/galene/process-of-1st-prototype.jpg')} alt="process of 1st prototype"></img>
                    <h4>Mid-Fidelity Hardware Prototype</h4>
                    <img src={require('../images/galene/result-of-1st-prototype.jpg')} alt="result of 1st prototype"></img>
                    <h4>User-Flow and Wireframing for Galene App</h4>
                    <p>To facilitate the process of sample collection, the Galene App is connected to the Galene devices to find projects nearby, record sample collection and data, and submit them</p>
                    <a href={require('../images/galene/On-Boarding.jpg')}  rel="noopener noreferrer" target="_blank"><img src={require('../images/galene/On-Boarding.jpg')} alt="on boarding"></img></a>
                    <a href={require('../images/galene/Find-Project.jpg')}  rel="noopener noreferrer" target="_blank"><img src={require('../images/galene/Find-Project.jpg')} alt="find project"></img></a>
                    <a href={require('../images/galene/Submit-Sample.jpg')}  rel="noopener noreferrer" target="_blank"><img src={require('../images/galene/Submit-Sample.jpg')} alt="submit sample"></img></a>
                    <h3>Evaluative</h3>
                    <h4>Usability Test</h4>
                    <a href={require('../images/galene/Usablity-Test.jpg')}  rel="noopener noreferrer" target="_blank"><img src={require('../images/galene/Usablity-Test.jpg')} alt="affinity diagramming"></img></a>
                    <img src={require('../images/galene/Usablity-Test-highlight.jpg')} alt="result"></img>
                    <h4>Iterated hardware prototype</h4>
                    <img src={require('../images/galene/Frame-4.jpg')} alt="affinity diagramming"></img>

                    <h4>Iterated Mobile Application</h4>
                    </section>

                    <section>

                    <p className="highlight"><b>On Boarding Issue</b></p>
                        <p>Some divers are unfamiliar with citizen science and microplastics. More explanations are needed before participating in a project</p>
                        <br/>
                        <p className="insight"><b><span>Solution: </span></b>Provide citizen scieence and microplastic information at the on-boarding pages. Build background knowledge before exploring projects</p>
                    </section>
                    <a href={require('../images/galene/ON-BOARDING1.jpg')}  rel="noopener noreferrer" target="_blank"><img className="extra-margin" src={require('../images/galene/ON-BOARDING1.jpg')} alt="on boarding iteration"></img></a>

                    <section>

                        <p className="highlight"><b>Find Projects and Project Overview Issues </b></p>
                            <p>1. Need a clearer instruction of how to collect the sample.<br/>
                            2. Since the data tracking function is only kept in the capsule, users need to pair a capsule to the phone each time they join a project (*Previously the data trackers locate both in the s-biner and capsule, once the s-biner is connected, the data could be automatically sync to the phone even though the capsule is replaced or not*)</p>
                            <br/>
                            <p className="insight"><b><span>Solution: </span></b>1. Add “how to collect sample” instruction.<br/>
                            2. Set up and connect Galene Capsule after divers confirm to join the project.</p>
                        </section>
                        <a href={require('../images/galene/Find-Project-after.jpg')}  rel="noopener noreferrer" target="_blank"><img className="extra-margin" src={require('../images/galene/Find-Project-after.jpg')} alt="find project iteration"></img></a>

                        <section>

                        <p className="highlight"><b>Upload Data and Sample Issues</b></p>
                            <p>1. Participants need more instructions of the sample submission process.<br/>
                            2. Participants would like to edit the dive log before linking aquatic data to the project.<br/>
                            3. Participants prefer to reuse the sample collector instead of one-time use.</p>
                            <br/>
                            <p className="insight"><b><span>Solution: </span></b>1.Add Galene Capsule sample collection tutorial and detailed submission process<br/>
                            2. Add the “edit log” function before sample submission.<br/>
                            3. Add a sample bottle in the last step of sample submission process. Divers can pour the water sample in the sample bottle and reuse the Galene Capsule.<br/>
                            4. Remove “take a photo” function since each sample bottle has a serial number for tracking.</p>
                        </section>
                        <a href={require('../images/galene/Submit-Sample1.jpg')}  rel="noopener noreferrer" target="_blank"><img className="extra-margin" src={require('../images/galene/Submit-Sample1.jpg')} alt="submit sample iteration"></img></a>

                        <section>
                            <h4>High Fidelity Hardware Prototype</h4>
                            <p>The Galene capsule is mainly used to collect the sample and captured related data leveraging the embedded tracker. The S-biner, which connects both to the capsule and the BCD, is one of the two associates that comes with the main capsule. Another associate is the retractable cable, which additionally attached to the S-biner and the capsule, prevents the capsule from accidentally flowing away while detaching from the carabiner.</p>
                        </section>
                        <img className="extra-margin" src={require('../images/galene/iterated-prototype.jpg')} alt="high fidelity hardware prototype"></img>

                        <section>
                            <h4>High Fidelity Mobile Application</h4>
                            <p>Working closely with the Galene Capsule, the Galene App includes three main features: 1)discover/participate in a project; 2)data upload; 3) sample submission.</p>
                            <p className="highlight"><span><b>Try out our prototype</b></span> below:</p>
                            <iframe frameBorder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FPY1KJdZU8YKCgFpyJjmvie%2FProject-Galene%3Fnode-id%3D128%253A0%26viewport%3D358%252C226%252C0.053081218153238297%26scaling%3Dscale-down&chrome=DOCUMENTATION" allowFullScreen title="demo-end"></iframe>
                        </section>

                        <section id="reflection" data-section-name="reflection">
                        <h3>Reflection</h3>
                            <p><b>What was helpful?</b></p>
                            <p>
                                Expert interview & usability tests have been the most helpful in figuring out the requirements from the researchers and what citizen scuba divers’ desire in order to go out and collect samples. For an area this niche, subject matter experts and talking to people firsthand gave us more insights over hours of secondary research.
                            </p>
                            <p><b>What was surprising?</b></p>
                            <p>
                            1. For a skill-based hobby like scuba diving, we need to consider the proficiency and capacity. Novice scuba divers might not feel comfortable or confident to operate other devices underwater, especially when they are still learning to control their buoyancy.<br/>
                            2. Our interpretation of what is seemingly easy, is completely different in the natural environment context (i.e. 40 feet down underwater with bulky scuba gears). Divers wear different gears and gloves that would affect how they interact with the device.
​
                            </p>
                            <p><b>Given more time…</b></p>
                            <p>
                            1. Talking to more researchers will provide us a better understanding of the different research needs. Further, establishing validity to our solution. By doing so, Galene kit could be use for different kinds of research as well.<br/>2.Testing the prototype under constraints (e.g. underwater). Doing so, allow us to simulate similar environment that scuba divers would have. Putting ourselves in their condition, their shoes.
​
                            </p>

                        </section>



                   


                    



                    


                
                
            </article>
            
        </div>
    )
}
