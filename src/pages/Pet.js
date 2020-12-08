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

export default function Pet() {
  const [ids, setIds] = useState([]);
  const [sectionNames, setSectionNames] = useState([]);

  useEffect(() => {
    const allSection = document.querySelectorAll("section");
    for (let section of allSection) {
      if (section.id) {
        setIds((prev) => [...prev, section.id]);
        setSectionNames((prev) => [...prev, section.dataset.sectionName]);
      }
    }
  }, []);

  const videos = document.querySelector('video')
  const observer = lozad(videos);
  observer.observe();

  return (
    <div>
      {ids.length ? <SectionNav ids={ids} sectionNames={sectionNames} /> : null}
      <WorkHeader
        title="Fluffy"
        subtitle="Animal Adoption Website"
        role="Role: UX Designer / Duration: 5 days / Personal Project"
        figma="TODO"
      />

      <article className="main-content work-content">
        <section id="pet-about" data-section-name="beginning">
          <p className="body-s">Figma / Protopie</p>
          <h2>Connecting adopters with their ideal pets</h2>
        </section>
        <ProgressiveImage src={require("../images/pet/cover_pet.jpg")} placeholder={require('../images/pet/cover_pet_placeholder.jpg')}>
                        {src => <img className="progressive" src={src} alt="overview" />}
        </ProgressiveImage>
       
        <section
          id="pet-overview"
          data-section-name="overview"
          className="about"
        >
          <h3>Overview</h3>
          
          <p>
            This project started with a given design prompt from one of my
            classes (modified from a google interview question):
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
          <p>Here is a quick strategy overview for the final solution:</p><br/>
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
            The main question I asked in the research phrase was:
            <br />
           
            <b>"How did experienced adopters connect with their ideal pets?"</b>
            <br/>
            <br />
            This question could be further broken down as follows:
          </p>
          <ol style={{ paddingLeft: "1em" }}>
            <li>
            How do experienced adopters find available pets? 
            </li>
            <li>
            How do experienced adopters determine if the pet is suitable for them? 
            </li>
            <li>
            What problems do they have during the adoption?
            </li>
          </ol>
          <h4>Research Methods</h4>
          <img
            src={require("../images/pet/reserach-method.png")}
            alt="research methods"
          ></img>

          <h4>Synthesize</h4>
          <p>
            To make sense of the inputs coming from the researches, I used the
            affinity diagram to group useful information and started identifying
            design opportunities:{" "}
            <a
              href="https://miro.com/app/board/o9J_ldHJpfE=/"
              rel="noopener noreferrer"
              target="_blank"
            >
              View in Miro
            </a>
          </p>

          <Zoom>
            <img
              src={require("../images/pet/affinity_dia.jpg")}
              alt="affinity diagram"
              className="zoom-image"
            ></img>
          </Zoom>

          <p>
            With the insight generated from the affinity diagram, I made a user
            journey map to further identify pain points during four adoption
            phrases: before searching for pets, online searching for pets,
            decision making, and the final adoption process.
          </p>
          <Zoom>
            <img
              src={require("../images/pet/user-journey.jpg")}
              alt="user journey"
              className="zoom-image"
            ></img>
          </Zoom>
          <h3>Research Takeaways</h3>
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
          <p>
            <b>
              "How do we help adopters find the right pet easier and also smooth
              the adoption process?"
            </b>
          </p>
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
            As the design requirements have been identified, it’s time to start
            doing some design work. I put together a user flow diagram as the
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

          <div className="challenge">
            <p>
              <b>Problem 1: Should I ask for comprehensive preferences about the exact age range, temperament, health condition in the questionnaire?</b>
            </p>
            <br />
            <p>
                The first thing I struggled with was how constrained the questionnaire for pet matching should be. The difference between how constrained the question will lead to two different flows to generate recommendations.
            </p>

            <Zoom>
              <img
                src={require("../images/pet/option1.png")}
                alt="challenge 1"
                className="zoom-image"
              ></img>
            </Zoom>
            <p>
            After consulting with a previous adopter, I found that adopters usually didn’t know the exact characteristics of pets (e.g. age range) they wanted at the beginning. So I decided to embrace the loosely-matching plan.
            </p>
          </div>

          <div className="challenge">
            <p>
              <b>
                Problem 2: How to expose adopters to the adoption process as
                early as possible?
              </b>
            </p>
            <br />
            <p>
            The optimized adoption process is different from the common shelter adoption. Adopters are not familiar with features such as personalized recommendations and online reservations. I need to introduce adopters about these inventions before they start to panic.
            </p>
            <Zoom>
              <img
                src={require("../images/pet/option2.png")}
                alt="challenge 2"
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
            <li>Is the adoption flow clear?</li>
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
              <b>Issue 2: The entry for pet comparison is not recognizable</b>
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
                alt="change 2"
                className="zoom-image"
              ></img>
            </Zoom>
          </div>

          <div>
            <p className="highlight">
              <b>
                Issue 3: The filter component is hard to find and not
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
                alt="change 3"
                className="zoom-image"
              ></img>
            </Zoom>
          </div>
        </section>

        <section id="pet-final" data-section-name="final design">
          <h3>Final Design</h3>
          <h4>Iterated User Flow</h4>
          <Zoom>
              <img
                src={require("../images/pet/taskflow_it.jpg")}
                alt="task flow version 2"
                className="zoom-image"
              ></img>
            </Zoom>
          <p>
            Let’s revisit those pain points discovered in the user research
            section, and see how I solved these problems one by one.
          </p>
          <h4>Pet Finding</h4>
          <ol>
            <li>Most shelter websites lack the filtering feature to generate personalized results</li>
            <li>
            It is very hard to decide which pet to adopt based on the information online
            </li>
            <li>Available pet information is very scattered, had to checkout multiple shelter websites to find the ideal pet
            </li>
          </ol>

          <div className="videos pet-videos">
            <Solution
              final
              solution="Show personalized pet recommendations based on questionnaire answer"
              explanation="A list of personalized recommendations are generated based on the adopter’s answer to a few general questions about their lifestyle, personal condition, etc."
            ></Solution>

            <video autoPlay loop muted playsInline>
              <source src={require("../images/pet/personalize.mov")}></source>
              Your browser does not support HTML video.
            </video>
          </div>

          <div className="videos pet-videos">
          <Solution
              final
              solution="Prioritize information that adopters care most in pet profiles"
              explanation="Users can find a pet’s appearance, name, gender, age, temperament in the profile preview. Detailed descriptions such as health condition, possible breed, and adoption tips are listed in the detail page. Users can also find pets that are similar to their current pet profile in the “similar pets” section."
            ></Solution>
            <video autoPlay loop muted playsInline>
              <source src={require("../images/pet/view_details.mov")}></source>
              Your browser does not support HTML video.
            </video>
          </div>

          <div className="videos pet-videos">
            <Solution
              final
              solution="Compile results from multiple nearby animal shelters to diversify choices"
              explanation="The result of available pets is fetching from different shelters at the location that user chose. Users can change the location anytime to explore options in another area."
            ></Solution>

            <video autoPlay loop muted playsInline>
              <source src={require("../images/pet/switchcity1.mov")}></source>
              Your browser does not support HTML video.
            </video>
          </div>

          

          <h4>Decision Making</h4>
          <ol>
            <li>It is hard to remember all the interested pets</li>
          </ol>

          <div className="videos pet-videos">
            <Solution
              final
              solution="The save and compare feature"
              explanation="Users can save as many pets as they wished, and compare them
              later."
            ></Solution>
            <video autoPlay loop muted playsInline>
              <source src={require("../images/pet/compare.mov")}></source>
              Your browser does not support HTML video.
            </video>
            
          </div>

          <h4>Adoption</h4>
          <ol>
            <li>
            Pets cannot be reserved online. Ideal pets picked online might have been adopted before an in-person shelter visit
            </li>
          </ol>

          <div className="videos pet-videos">
          <Solution
              final
              solution="Online reservation and waitlist"
              explanation="After making a decision, users can make a reservation online. If
              the pet has been reserved, they can join the waitlist and wait for
              further information.(This is a timely privilege: online reservations are allowed in many shelters now due to COVID-19)"
            ></Solution>
            <video autoPlay loop muted playsInline>
              <source src={require("../images/pet/reserve.mov")}></source>
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
            <p>This website is currently under development. A demo is expected to be released on early January.</p>
            <p>If you are looking for projects that have been developed, checkout <Link to="/interart">InterArt</Link> and <Link to="/weather-widget">Weather Widget</Link>.</p>
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
