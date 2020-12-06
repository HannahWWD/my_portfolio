import React from "react";
import WorkHeader from "../components/WorkHeader";
import "./TemplateStyle.scss";
import "./Galene.scss";
import "./Pet.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Pet() {
  return (
    <div>
      <WorkHeader
        title="Fluffy"
        subtitle="Animal Adoption Website"
        role="Role: UX Designer / Duration: 5 days / Personal Project"
        figma="TODO"
      />

      <article className="main-content work-content">
        <section id="about" data-section-name="beginning">
          <p className="body-s">Figma / Protopie</p>
          <h2>Connecting adopters with their ideal pets</h2>
        </section>
        <img src={require("../images/pet/cover_pet.jpg")} alt="overview"></img>
        <section id="overview" data-section-name="TL;DR">
          <h3>TL;DR</h3>
          <h4>The Problem</h4>
          <p>
            This project starts with a given design prompt from one of my
            classes (modified from a google interview question):<br></br>
            “Millions of animals are currently in shelters and foster homes
            awaiting adoption. Design an experience that will help connect
            people looking for a new pet with the right companion for them. Help
            an adopter find a pet that matches their lifestyle, considering
            factors including breed, gender, age, temperament, and health
            status.”
            <br />
          </p>
          <h4>Design Question</h4>
          <p>
            To begin with, I set the landscape of the project by asking this
            design question:
            <br />
          </p>
          <p className="insight highlight">
            <b>
              How could we design an experience that helps{" "}
              <span>adopters connect with their ideal pets</span>?
            </b>
          </p>
          <h4>Solution</h4>
          <iframe
            title="pet prototype"
            frameBorder="0"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1NB4T561nfhOYVEWVhrito%2Fpet-adoption%3Fnode-id%3D1%253A2%26viewport%3D-220%252C-227%252C0.391780287027359%26scaling%3Dscale-down-width"
            allowFullScreen
          ></iframe>
        </section>
        <section id="pet-research" data-section-name="research">
          <h3>Research</h3>
          <p>
            <b>How did experienced adopters connect with their ideal pets?</b>
          </p>
          <h4>Research Questions</h4>
          <ul>
            <li>
              How do experienced adopters obtain information about available
              pets?
            </li>
            <li>
              What are some important factors that adopters care about when
              selecting pets?{" "}
            </li>
            <li>
              What does the final adoption process look like after selecting the
              pet?
            </li>
            <li>What problems do they encounter during the adoption</li>
          </ul>
          <h4>Research Methods</h4>
          {/* TODO:adjust layout */}
          <div className="research-methods research-methods-pet">
            <div>
              <p>
                <b>
                  65<br></br>surveys on MTurk
                </b>
              </p>
            </div>
            <div>
              <p>
                <b>
                  2<br></br>User interviews
                </b>
              </p>
            </div>
            <div>
              <p>
                <b>
                  2<br></br>contextual <br></br>inquiries
                </b>
              </p>
            </div>
          </div>

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
            viewing pet profiles, and the final adoption process.
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
              How do we help adopters find the right pet easier and also smooth
              the adoption process?
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
          <Zoom>
            <img
              src={require("../images/pet/taskflow.jpg")}
              alt="task flow"
              className="zoom-image"
            ></img>
          </Zoom>

          <Zoom>
            <img
              src={require("../images/pet/wireframing.jpg")}
              alt="wireframing"
              className="zoom-image"
            ></img>
          </Zoom>
          <p>
            <b>Problem1: How do I design the filtering flow?</b>
          </p>
          <p>
            I struggled with whether to show the filter before or after
            displaying the pet list.
          </p>
          <Zoom>
            <img
              src={require("../images/pet/option1.png")}
              alt="challenge 1"
              className="zoom-image"
            ></img>
          </Zoom>
          <p>
            After consulting with a previous adopter, I found that adopters
            usually didn’t know what kind of pets they wanted until they saw all
            the options. So I decided to show the filter after displaying all
            the available pets.
          </p>

          <p>
            <b>
              Problem2: How to expose adopters to the adoption process as early
              as possible?
            </b>
          </p>
          <p>
            I struggled with whether to show the filter before or after
            displaying the pet list.
          </p>
          <Zoom>
            <img
              src={require("../images/pet/option2.png")}
              alt="challenge 2"
              className="zoom-image"
            ></img>
          </Zoom>
          <p>
            After consulting with a previous adopter, I found that adopters
            usually didn’t know what kind of pets they wanted until they saw all
            the options. So I decided to show the filter after displaying all
            the available pets.
          </p>
        </section>

        <section id="pet-eval-iterate" data-section-name="Evaluate and Iterate">
          <h3>Evaluate and Iterate</h3>
          <p>
            After the wireframes were set up, I conducted two usability tests
            with an experienced adopter and a potential adopter.
          </p>
          <h4>Research Questions</h4>
          <ul>
            <li>
              Is it straightforward to find available pets that match the
              adopters’ expectations?
            </li>
            <li>Is the comparison feature useful?</li>
            <li>Is the adoption flow clear?</li>
          </ul>

          <h4>Key issues</h4>
          <div>
            <p className="highlight">
              <b>The species entry is not straightforward enough to find</b>
            </p>
            <p>
              1.It is counter-intuitive for participants to find animal types in
              filters.
              <br />
              2.Participants tried navigating a specific type(e.g.cats and dogs)
              before checking for available pets
            </p>
            <br />
            <p className="insight">
              <b>
                <span>Solution: </span>
              </b>
              add species entries on the “available pets are here” section
            </p>
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
              <b>The entry for pet comparison is not recognizable</b>
            </p>
            <p>
              The bag icon is confusing. One participant mentioned:"I guess I
              should click on this icon... but it is too confusing since (the
              icon) looks like a shopping bag. It should be a heart or something
              else."
            </p>
            <br />
            <p className="insight">
              <b>
                <span>Solution: </span>
              </b>
              use a text button labeling with “compare” instead.
            </p>
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
                The filter button is hard to find and not straightforward to
                read
              </b>
            </p>
            <p>
              Participants tended to locate the filter button somewhere close to
              the title and subtitle, instead of the bottom of the page. One
              participant mentioned: "You know the amazon filters… you can
              always find it in the left hand side”"
            </p>
            <br />
            <p className="insight">
              <b>
                <span>Solution: </span>
              </b>
              move the filter button closer to the title, and layout the filters
              vertically
            </p>
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
          <p>Pet Finding</p>
          <ol>
            <li>It is too time-consuming to visit all shelters</li>
            <li>
              Available pet information is very scattered, had to checkout
              multiple shelter websites to find the ideal pet
            </li>
            <li>
              It is very hard to know what’s the pet like in reality by looking
              at a few photos
            </li>
            <li>Most shelter websites lack the filtering feature</li>
          </ol>

          <div className="videos">
            <video autoPlay loop>
              <source src={require("../images/pet/switchcity1.mov")}></source>
              Your browser does not support HTML video.
            </video>
            <p><b>Show available pets from multiple animal shelters</b></p>
          <p>The result of available pets is fetching from different shelters at the location that user chose. Users can change the location anytime to explore options in another area.</p>
          </div>

          <div className="videos">
            <video autoPlay loop>
              <source src={require("../images/pet/filtering.mov")}></source>
              Your browser does not support HTML video.
            </video>
            <p><b>Enable the filtering feature</b></p>
          <p>Filter pets by age range, temperament, and health condition to locate the right pet in one click</p>
          <p><b>Enhance the pet profile with information that adopters care</b></p>
          <p>Users can find a pet’s appearance, name, gender, age, temperament in the profile preview. Detailed descriptions such as health condition, possible breed, and adoption tips are listed in the detail page.</p>
          </div>

          <p>Decision Making</p>
          <ol>
            <li>It is hard to remember all the interested pets</li>
            <li>
            Pets cannot be reserved online. Ideal pets picked online might have been adopted before in-person shelter visit
            </li>
          </ol>

          <div className="videos">
            <video autoPlay loop>
              <source src={require("../images/pet/compare.mov")}></source>
              Your browser does not support HTML video.
            </video>
            <p><b>Comparison with multiple pets</b></p>
          <p>Users can save as many pets as they wished, and compare them later.</p>

          <p><b>Online reservation and waitlist</b></p>
          <p>After making a decision, users can make a reservation online. If the pet has been reserved, they can join the waitlist and wait for further information.</p>
          </div>

          <p>Adoption</p>
          <ol>
            <li>Adopters usually cannot adopt the pet on the first visit to the shelter since they didn’t bring the required documentation with them. (they don’t know what kind of materials are needed before the visit)</li>
          </ol>

          <div className="videos">
            <video autoPlay loop>
              <source src={require("../images/pet/overview.mov")}></source>
              Your browser does not support HTML video.
            </video>
            <p><b>Show an overview of the adoption process in an easy-to-find place</b></p>
                <p>Before viewing a list of available pets, a high-level overview of the adoption process will be shown.</p>
          </div>
            
          <Zoom>
              <img
                src={require("../images/pet/reserve-process2.png")}
                alt="upload materials online"
                className="zoom-image"
              ></img>
            </Zoom>
            <p><b>Upload materials online </b></p>
                <p>Upload the required materials and submit the application online to avoid multiple visits to the shelter</p>
            
        </section>

        <section id="pet-reflection" data-section-name="reflection">
        <h3>Reflection</h3>
        <p><b>Learn from experienced adopters and existed adoption websites</b></p>
        <p>It is extremely useful to learn about previous adopters’ adoption experience. Animal adoption is not a new thing, there are many animal shelter websites out there and most of the adopters have experience in using them. Adopters’ stories of interacting with these websites can reveal many design opportunities. It simplifies the challenge by improving the adoption experience instead of creating a new one.</p>
        <p><b>Stay tune with feedback </b></p>
        <p>I got a lot of feedback during the usability testing, and my intuition was to change everything that users have opinions about. But I realized that some opinions were more related to personal preferences. As a designer, it is always important to make logical decisions based on the research result. </p>




        </section>
      </article>
    </div>
  );
}
