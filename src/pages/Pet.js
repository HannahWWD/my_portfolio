import React, { useEffect, useState } from "react";
import "./TemplateStyle.scss";
import "./Galene.scss";
import "./Pet.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { HashLink } from "react-router-hash-link";
import WorkHeader from "../components/WorkHeader";
import SectionNav from "../components/SectionNav";
import Solution from "../components/Solution";
import {Link} from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image'
import lozad from 'lozad';
import IssueCause from "../components/IssueCause";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import GitHubIcon from "@material-ui/icons/GitHub";
import LiveTvIcon from "@material-ui/icons/LiveTv";

export default function Pet() {
  const [ids, setIds] = useState([]);
  const [sectionNames, setSectionNames] = useState([]);

  useEffect(() => {
    const allSection = document.querySelectorAll("section");
    //document.querySelectorAll('img').forEach((img)=>img.setAttribute('loading','lazy'))
    //document.querySelectorAll('video').forEach(item=>item.classList.add('lozad'))

    for (let section of allSection) {
      if (section.id) {
        setIds((prev) => [...prev, section.id]);
        setSectionNames((prev) => [...prev, section.dataset.sectionName]);
      }
    }

  const media = document.querySelectorAll('video,iframe')
  const observer = lozad(media);
  observer.observe();
  
  
  }, []);

  // const handleLoaded = (event) =>{
  //   const img = event.target;
  //   const src = img.dataset.src;
  //   img.setAttribute('src',src)
  
  // }



 


  return (
    <div>
      {ids.length ? <SectionNav ids={ids} sectionNames={sectionNames} /> : null}
      <WorkHeader
        title="Fluffy"
        subtitle="Animal Adoption Website"
        role="Role: UX Designer / Duration: 5 days / Personal Project"
        figma="https://www.figma.com/proto/1NB4T561nfhOYVEWVhrito/pet-adoption?node-id=1%3A2&scaling=min-zoom"
      />

      <article className="main-content work-content">
        <section id="pet-about" data-section-name="beginning">
          <p className="body-s">Figma / Protopie</p>
          <h2>Connecting adopters with their ideal pets</h2>
        </section>
        

        <ProgressiveImage src={require("../images/pet/cover_pet.jpg")} placeholder={require('../images/pet/cover_pet_placeholder.jpg')}>
                        {(src,loading) => <img className={loading? "progressive-cover":"progressive-cover-done"} src={src} alt="overview" />}
        </ProgressiveImage>

        {/* <img data-src={require("../images/pet/cover_pet.jpg")} data-placeholder-background="red" alt="overview"></img> */}
       
        <section
          id="pet-overview"
          data-section-name="overview"
          className="about"
        >
          <h3>Overview</h3>
          
          <p>
            This project started with a given design prompt from one of my
            courses:
            <br />
            <br />
            “Millions of animals are currently in shelters and foster homes
            awaiting adoption. Design an experience that will help connect
            people looking for a new pet with the right companion for them. Help
            an adopter find a pet that matches their lifestyle, considering
            factors including breed, gender, age, temperament, and health
            status.”
            <br />
          </p>
          <br></br>
          <p>
            To begin with, I set the landscape of the project by asking this
            design question:
            <br />
          </p>
          <p className="design-question">
            "How could we design an experience that helps adopters connect with
            their ideal pets?"
          </p>
          <p>I used the word "connect" in this place instead of "match" because this experience is not limited to find the right pet. It also includes the process of making a decision to adopt the pet or not, and the process of adopting the pet (namely, really bringing the pet home ). <br/><br/>Here is a quick strategy overview for the final solution:</p><br/>
          <img
            src={require("../images/pet/solutions_overview.png")}
            alt="process"
            style={{ margin: "6em 0" }}
          ></img>
          
          <HashLink smooth to="#pet-final">
            See final solution
          </HashLink>
        </section>
        <section id="pet-process" data-section-name="process">
            <h3>process</h3>
            <img
            src={require("../images/pet/process.png")}
            alt="process"
            style={{ marginBottom: "4em" }}
          ></img>
        </section>
        <section id="pet-research" data-section-name="research">
          <h3>Research</h3>
          <h4>Research Questions</h4>

          <p>
            Two main questions I asked in the research phase was:
            <br />
           <b>"How did experienced adopters connect with their ideal pets?"</b>
           <br/>
            <b>"What problems did they encounter? "</b>
            <br/>
            <br />
            {/* This question could be further broken down as follows: */}
          </p>
          {/* <ol style={{ paddingLeft: "1em" }}>
            <li>
            How do experienced adopters find available pets? 
            </li>
            <li>
            How do experienced adopters determine if the pet is suitable for them? 
            </li>
            <li>
            What problems do they have during the adoption?
            </li>
          </ol> */}
          <h4>Research Methods</h4>
          <img
            src={require("../images/pet/reserach-method.png")}
            alt="research methods"
          ></img>

          <h4>Synthesize</h4>
          <p>
            To make sense of the inputs coming from the researches, I used the
            affinity diagram to organize useful information and started identifying
            design opportunities:{" "}
            <a
              href="https://miro.com/app/board/o9J_ldHJpfE=/"
              rel="noopener noreferrer"
              target="_blank"
            >
              View in Miro
            </a>
          </p>

          <br/>
          <p>
            With the initial insight generated from the affinity diagram, I created a user
            journey map to understand the different phases in the adoption process, and mapped pain points to corresponding phases.
          </p>
          <div className="lozad">
          <Zoom>
            <img
              src={require("../images/pet/user-journey.jpg")}
              // onLoad = {handleLoaded}
              alt="user journey"
              className="zoom-image"
            ></img>
          </Zoom>
          </div>
          <br/><br/>
          <p>I analyzed those pain points indicated in the user journey, and identified 5 key problems that repeatedly mentioned by different adopters and survey participants. Before jumping to the solution, I took a step back and investigated the root causes of these issues.
I put the problems in the pink stickers and listed causes in yellow stickers.
 </p>
 <Zoom>
            <img
              src={require("../images/pet/obstacles-mapping.jpg")}
              alt="user journey"
              className="zoom-image"
             
            ></img>
          </Zoom>
          

          <h3>Research Takeaways</h3>
          <p>The investigation was very insightful. Next, I grouped causes mentioned in the last session based on the adoption phases - pet matching, decision making, adoption.</p><br/>
          <Zoom>
            <img
              src={require("../images/pet/research-insights.jpg")}
              alt="key takeaways in ux research"
              className="zoom-image"
            ></img>
          </Zoom>
        </section>

        <section id="pet-ideate" data-section-name="ideate">
          <h3>Ideate</h3>
          <p> After the research was done, The design goal became clear:</p><br/>
          <p>
            <b>
              "Help adopters find the right pet easier, facilitate decisions, and smooth the adoption process."
            </b>
          </p>
          <br/>
          <p>This goal could be achieved by the following strategies:</p>
          <Zoom>
            <img
            src={require("../images/pet/ideation.png")}
             
              alt="ideation"
              className="zoom-image"
            ></img>
          </Zoom>
        </section>
        <section id="pet-design" data-section-name="design">
          <h3>Design</h3>
          <p>
            As the design requirements have been identified, it’s time for the design work. I put together a high-level user flow diagram as the
            guideline for design.
          </p>
          <h4>Task Flow</h4>
          <Zoom>
            <img
              src={require("../images/pet/taskflow.jpg")}
              alt="task flow"
              className="zoom-image"
            ></img>
          </Zoom>
          <h4>Wireframing</h4>
          <Zoom>
            <img
              src={require("../images/pet/wireframing.jpg")}
              alt="wireframing"
              className="zoom-image"
            ></img>
          </Zoom>
          <p>I struggled with a few things while creating the wireframes. Here are some challenges I encountered, and how I solved them at last.</p>

          <div className="challenge">
            
            <p>
              <b>Problem 1: Should I ask for comprehensive preferences about the exact age range, temperament, health condition in the questionnaire?</b>
            </p>
            <br />
            <p>
                The first thing I struggled with was how constrained the assessment for pet matching should be. The difference between how constrained the question led to two different flows to generate recommendations.
            </p>

            <Zoom>
              <img
                src={require("../images/pet/option1.png")}
                alt="challenge 1"
                className="zoom-image"
              ></img>
            </Zoom>
            <p>
            After consulting with a previous adopter, I found that adopters usually didn’t know about the exact requirements of pets (e.g. age range) they wanted at the beginning. Their expectations emerge and change over time (e.g., after seeing the recommendations). So I decided to embrace the loosely-matching plan.
            </p>
          </div>

          <div className="challenge">

          <p>
              <b>
                Problem 2: What information should I put into the profile detail page?
              </b>
            </p>
            <br />
            <p>
            Adopters expect the pet profiles to effectively communicate the information they care about. From the interview, adopters mentioned that age and temperament were important factors. They also claimed that they were not fond of long, wordy descriptions. 
            </p>
            <Zoom>
              <img
                src={require("../images/pet/option2.png")}
                alt="challenge 2"
                className="zoom-image"
              ></img>
            </Zoom>
            <p>
            I selected the second option because it did a better job to communicate the selected pet’s advantages and disadvantages. 
            </p>
          </div>

          <div className="challenge">
            <p>
              <b>
                Problem 3: How to inform adopters of the novel adoption process as early as possible?
              </b>
            </p>
            <br />
            <p>
            The optimized adoption process is different from the common shelter adoption. Adopters are not familiar with features such as personalized recommendations and online reservations. I need to introduce adopters to these inventions before they start to panic.
            </p>
            <Zoom>
              <img
                src={require("../images/pet/option3.png")}
                alt="challenge 3"
                className="zoom-image"
              ></img>
            </Zoom>
            <p>
            To make a decision, I wanted to know how shelters inform their modified adoption process due to COVID-19, as we have a similar issue - to inform adopters about a new process.  I found that professional shelters such as Seattle Humane Society addressed this change by putting a big note before the “see available pets” section, which was similar to option 2. Backed by this example, I selected option 2 as the solution.
            </p>
          </div>
        </section>

        <section id="pet-eval-iterate" data-section-name="Evaluate">
          <h3>Evaluate</h3>
          <p>
            After the wireframes were set up, I conducted two usability tests
            with an experienced adopter and a potential adopter.
          </p>
          <h4>Research Questions</h4>
          <ol>
            <li>
              Is it straightforward to find available pets that match the
              adopters’ expectations?
            </li>
            <li>Is the comparison feature useful?</li>
            <li>What are some burning questions that need to solve?</li>
          </ol>

          <h4>Key issues</h4>
          <div>
            <p className="highlight">
              <b>Issue 1: Choosing a pet type(e.g.cats and dogs) after getting the recommendations is counterintuitive
              </b>
            </p>
            <p>
            Participants are clear about what kind of pet they want to adopt at the beginning. It makes no sense to ask participants to specify the pet type using a filter (after getting the recommendation). 
            </p>
            <br />
            <Solution explanation="Add species entries on the “available pets are here” section"></Solution>
            <Zoom>
              <img
                src={require("../images/pet/change1.png")}
                alt="change 1"
                className="zoom-image"
              ></img>
            </Zoom>
          </div>

          <div>
            <p className="highlight">
              <b>
                Issue 2: The filter component is hard to find and not
                straightforward to read
              </b>
            </p>
            <p>
              Participants tended to locate the filter button somewhere close to
              the title and subtitle, instead of the bottom of the page. One
              participant mentioned: "You know the amazon filters… you can
              always find it in the left hand side”"
            </p>
            <br />
            <Solution
              explanation="Move the filter button closer to the title, and layout the filters
              vertically"
            ></Solution>

            <Zoom>
              <img
                src={require("../images/pet/change3.png")}
                alt="change 2"
                className="zoom-image"
              ></img>
            </Zoom>
          </div>

          <div>
            <p className="highlight">
              <b>Issue 3: The entry for pet comparison is not recognizable</b>
            </p>
            <p>
              The bag icon is confusing. One participant mentioned:"I guess I
              should click on this icon... but it is too confusing since (the
              icon) looks like a shopping bag. It should be a heart or something
              else."
            </p>
            <br />

            <Solution explanation="Use a text button labeling with “compare” instead."></Solution>

            <Zoom>
              <img
                src={require("../images/pet/change2.png")}
                alt="change 3"
                className="zoom-image"
              ></img>
            </Zoom>
          </div>

        </section>

        <section id="pet-final" data-section-name="final design">
          <h3>Final Design</h3>
          <h4>Iterated User Flow</h4>
          <p> I will give a high-level introduction to the user flow and then go into detail for a few important features related to the objective most. At the beginning of the adoption process, users would be asked to answer a few questions related to their lifestyles and preferences. A list of pet recommendations will be shown based on their answers. After that, users could pick multiple pets that align with their expectations, and compare these pets using the comparison feature. If they have made a decision, they can reserve the pet online, and if the pet is on hold, they can join the waitlist and wait for further instructions.</p>
          <Zoom>
              <img
                src={require("../images/pet/taskflow_it.jpg")}
                alt="task flow version 2"
                className="zoom-image"
              ></img>
            </Zoom>
            
          <p>
            Next, let’s revisit those pain points discovered in the user research
            section, and see how I solved these problems one by one.
          </p>
          <h4>Pet Finding</h4>
          
          <div className="videos pet-videos">
          <IssueCause 
          problems={["It is time-consuming to review all the pets, especially when some of the websites do not even have a filter"]} 
          causes={["The searching result is not personalized"]} />
            <Solution
              final
              solution="Show personalized pet recommendations based on assessment answers"
              explanation="A list of personalized recommendations are generated based on the adopter’s answer to a few general questions about their lifestyle, personal condition, etc."
            ></Solution>

            <video autoPlay loop muted playsInline>
              <source data-src={require("../images/pet/personalize.mov")}></source>
              Your browser does not support HTML video.
            </video>
          </div>

          <div className="videos pet-videos">
          <IssueCause 
          problems={["It is difficult to know what the pet really like only based on their online profiles"]} 
          causes={["The pet profiles do not highlight the information that adopters really care about", "in-person interaction cannot be substituted by viewing profiles online"]} />
          <Solution
              final
              solution="Prioritize information that adopters care most in pet profiles"
              explanation="Users can find a pet’s appearance, name, gender, age, temperament in the profile preview. The detailed profile page shows a comprehensive analysis of the selected pet's pros and cons, covering its age, temperament, health condition, size, breed, training status, and other highlights on its personality. Users can also find pets that are similar to their current pet profile in the “similar pets” section."
            ></Solution>
            <video autoPlay loop muted playsInline>
              <source data-src={require("../images/pet/view_details.mov")}></source>
              Your browser does not support HTML video.
            </video>
          </div>

          <div className="videos pet-videos">
            <Solution
              final
              solution="Make an appointment to meet selected pets in person"
              explanation="Adopters can schedule a time to meet with the selected pet using the appointment feature. "
            ></Solution>

            <video autoPlay loop muted playsInline>
              <source data-src={require("../images/pet/appointment.mov")}></source>
              Your browser does not support HTML video.
            </video>
          </div>

          

          <h4>Decision Making</h4>

          <div className="videos pet-videos">
          <IssueCause 
          problems={["It is hard to remember all the pets reviewed","It is difficult to decide which pet is suitable for adoption"]} 
          causes={["Lack of memory aid for reviewed pets", "Lack of an efficient tool to facilitate decisions"]} />
            <Solution
              final
              solution="The save and compare feature"
              explanation="Users can save as many pets as they wished and compare them later. On the comparison page, users could add multiple saved pets to the comparison panel. The system will generate a list of pros and cons for each pet based on their pet profiles, and place them side-by-side to help adopters to make decisions"
            ></Solution>
            <video autoPlay loop muted playsInline>
              <source data-src={require("../images/pet/compare.mov")}></source>
              Your browser does not support HTML video.
            </video>
            
          </div>

          <h4>Adoption</h4>
         

          <div className="videos pet-videos">
          <IssueCause 
          problems={["Ideal pets picked online might be adopted by other adopters very quickly"]} 
          causes={["Pets cannot be reserved ahead"]} />
         
         <Solution
              final
              solution="Online reservation and waitlist"
              explanation='Depending on the availability of the selected pet, users could find either the "reserve" or "join waitlist" button on the profile page. If the pet is ready to be reserved, users will be directed to the reservation page. They will be asked for a few more questions to prove their eligibility for adoption and provided necessary documentation for the shelter to review. (Online reservation is a timely privilege: online reservations are allowed in many shelters now due to COVID-19)' />

            <video autoPlay loop muted playsInline>
              <source data-src={require("../images/pet/reserve.mov")}></source>
              Your browser does not support HTML video.
            </video>
          </div>

          <h4>Final Prototype</h4>
          <iframe
            title="pet prototype"
            frameBorder="0"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1NB4T561nfhOYVEWVhrito%2Fpet-adoption%3Fnode-id%3D1%253A2%26viewport%3D-220%252C-227%252C0.391780287027359%26scaling%3Dscale-down-width"
            allowFullScreen
          ></iframe>
        </section>

        <section id="pet-development" data-section-name="coding it up">
            <h3>Coding it up</h3>
            <p>The pet matching assessment is now live.</p>

            <br />
          <p>Technologies:</p>
          <br />
          <div className="customized-list">
            <div>
              <DonutLargeIcon fontSize="large" />
              React
            </div>
            <div>
              <DonutLargeIcon fontSize="large" />
              REST Api
            </div>
            <div>
              <DonutLargeIcon fontSize="large" />
              SCSS
            </div>
          </div>
          <br />
          <p>Features:</p>
          <div className="customized-list">
            <div>
              <DonutLargeIcon fontSize="large" />
              Recommend matched pets based on the answers of the assessment
            </div>
          </div>

          <br />
          <h4>Live Demo</h4>
          <p>Checkout the live web app demo and github repository:</p>
          <div className="live-demo-container">
            <a
              href="https://fluffy-pet-adoption.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
              className="live-demo-btn"
            >
              <LiveTvIcon />
              Live App
            </a>

            <a
              href="https://github.com/HannahWWD/pet-mockup"
              rel="noopener noreferrer"
              target="_blank"
              className="live-demo-btn btn-contour"
            >
              <GitHubIcon />
              GitHub
            </a>
          </div>
          <br />
            <p>If you are looking for more projects that have been developed, checkout <Link to="/interart">InterArt</Link> and <Link to="/weather-widget">Weather Widget</Link>.</p>
        </section>

        <section id="pet-reflection" data-section-name="reflection">
          <h3>Reflection</h3>
          <p>
            <b>Learn from experienced adopters and existed adoption websites</b>
          </p>
          <p>
            It is extremely useful to learn about previous adopters’ adoption
            experience. Animal adoption is not a new thing, there are many
            animal shelter websites out there and most of the adopters have
            experience in using them. Adopters’ stories of interacting with
            these websites can reveal many design opportunities. It simplifies
            the challenge by improving the adoption experience instead of
            creating a new one.
          </p>
          <br />
          <p>
            <b>Stay tune with feedback </b>
          </p>
          <p>
            I got a lot of feedback during the usability testing, and my
            intuition was to change everything that users have opinions about.
            But I realized that some opinions were more related to personal
            preferences. As a designer, it is always important to make logical
            decisions based on the research result.{" "}
          </p>
        </section>
      </article>
    </div>
  );
}
