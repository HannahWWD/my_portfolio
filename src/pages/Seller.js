import React, { useEffect, useState } from "react";
import "./TemplateStyle.scss";
import "./Galene.scss";
import "./Seller.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import WorkHeader from "../components/WorkHeader";
import SectionNav from "../components/SectionNav";
import Solution from "../components/Solution";
import ProgressiveImage from "react-progressive-image";
import lozad from "lozad";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

export default function Seller() {
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

    const media = document.querySelectorAll("video,iframe");
    const observer = lozad(media);
    observer.observe();
  }, []);

  return (
    <div>
      {ids.length ? <SectionNav ids={ids} sectionNames={sectionNames} /> : null}
      <WorkHeader
        title="Peer Market"
        subtitle="Web Application for P2P Selling"
        role="Role: UX Designer / Duration: 4 weeks / Individual Project"
        figma="https://www.figma.com/proto/Ht2EGi625WXMuz0E9LLaxv/dp2?node-id=209%3A724&viewport=299%2C354%2C0.03355732187628746&scaling=scale-down&page-id=0%3A1"
      />

      <article className="main-content work-content">
        <section id="seller-about" data-section-name="beginning">
          <p className="body-s">Figma</p>
          <h2>Help P2P sellers better manage their business</h2>
        </section>

        <ProgressiveImage
          src={require("../images/seller/cover-lg.jpg")}
          placeholder={require("../images/seller/cover-lg-placeholder.jpg")}
        >
          {(src, loading) => (
            <img
              className={
                loading ? "progressive-cover" : "progressive-cover-done"
              }
              src={src}
              alt="overview"
            />
          )}
        </ProgressiveImage>

        <section
          id="seller-overview"
          data-section-name="overview"
          className="about"
        >
          <h3>Overview</h3>
          <p>
            P2P selling is a model that two individuals buy and sell products
            directly. Sellers love the flexibility of direct selling, but they
            don't always have much experience in managing a business. In this
            course project, I was asked to build a desktop experience that helps
            P2P sellers manage their online stores. This is an individual
            project. My responsibilities include iterating persona,
            investigating user needs, defining design requirements, and creating
            3 scenarios of the final hi-fi prototype.
          </p>
          <br />
          <p>The problem statement for this project is:</p>
          <p className="design-question">
            "How might we design a desktop experience to help P2P sellers sale
            and manage bulk items with less effort?"
          </p>
          <p>Here is a quick strategy overview for the final solution:</p>
          <img
            className="light-shadow"
            src={require("../images/seller/summary.jpg")}
            alt="strategy overview"
          ></img>
          <p>Please find the video demo below.</p>
          <br />
          <iframe
            src="https://www.youtube.com/embed/iCzbOUqS_Ag"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </section>

        <section id="seller-context" data-section-name="context">
          <h3>The context</h3>
          <h4>Design prompt</h4>
          <p>
            I was provided the following prompts for this project.
            <br />
            <br />
            <b>
              "Based on a given persona, design a desktop experience for P2P
              sellers who sell items in bulk. Prototype happy paths of the
              following flows: signup up as a new seller; listing and manage
              stocks; audit sales and manage orders. "
            </b>
          </p>
          <br />
          <br />
          <p>
            <b>Limitations</b>
          </p>
          <ul className="seller-ul">
            <li>
              I was not involved in the research phase. I was given a persona as
              the starting point
            </li>
            <li>Must be a desktop experience</li>
            <li>No access to real users</li>
          </ul>
          <h4>Target Audience</h4>
          <p>
            <b>Seller type</b>
          </p>
          <ul className="seller-ul">
            <li>P2P sellers who sell products in bulk</li>
          </ul>
          <p>
            <b>Experience</b>
          </p>
          <ul className="seller-ul">
            <li>New to P2P selling</li>
            <li>Have prior experience in P2P selling but willing to grow</li>
          </ul>
          <h4>Original persona</h4>
          <p>
            I was given a P2P BUYER profile as the starting point. It describes
            some of the needs of our target audience, but it does not fully
            represent the needs of a P2P seller. To find the missing pieces, I
            conducted complementary secondary research on P2P sellers.
          </p>
          <div className="two-column-seller">
            <Zoom>
              <img
                src={require("../images/seller/og-persona.jpg")}
                alt="original persona"
                className="zoom-image"
              ></img>
            </Zoom>
            <div>
              <p>
                <b>User needs</b>
              </p>
              <ul className="seller-ul">
                <li>Have clothes to sell</li>
                <li>Don't have much time or experience</li>
                <li>Not tech-savvy, need guidance</li>
              </ul>
            </div>
          </div>
          <div className="two-column-seller">
            <p>
              <b>Secondary research</b>
            </p>
            <div>
              <p>
                <b>User needs</b>
              </p>
              <ul className="seller-ul">
                <li>Buy products in bulk and sell fast</li>
                <li>Make money quickly and easily</li>
                <li>
                  Care about efficiency in business management, prefers
                  digitized solutions
                </li>
                <li>Seek out advice on market trends and strategy making</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="seller-synthesize" data-section-name="synthesize">
          <h3>Synthesize</h3>
          <h4>Reversed engineering - synthesized user needs</h4>
          <p>
            In most cases, we should have known the user goals and needs before
            building a persona. But since I was not involved in the research
            phase, I could only rely on the original persona and the secondary
            research to understand the problem space. The following shows the
            user goal and needs that I synthesized from insights in previous
            sections.
          </p>
          <Zoom>
            <img
              src={require("../images/seller/goals2.jpg")}
              alt="user goals"
              className="zoom-image light-shadow"
            ></img>
          </Zoom>
          <h4>Iterated Persona</h4>
          <p>
            Based on the user goal and needs defined, I developed an iterated
            persona to better represent the user profiles for P2P sellers who
            sell products in bulk.
          </p>
          <Zoom>
            <img
              src={require("../images/seller/persona-iterated.jpg")}
              alt="user goals"
              className="zoom-image"
            ></img>
          </Zoom>
        </section>
        <section id="seller-ideation" data-section-name="ideation">
          <h3>Ideation</h3>
          <h4>Inform design through contextual scenarios</h4>
          <p>
            Driven by the persona, I created 3 context scenarios. Design
            requirements are sussed out through detailed steps users might take
            to accomplish each task.
          </p>
          <div className="two-column-seller two-column-seller-variant">
            <div>
              <p>
                <b>Setting</b>
              </p>
              <p>
                Amy has a short break on Sunday afternoon. She is frustrated
                with her full storage room and makes up her mind to clean up
                those unwanted clothes. She used her personal laptop at home to
                find an online platform to sell her clothes and found a P2P
                selling web app called 'PeerMarket'. She decided to start her
                business with this platform.{" "}
              </p>
              <p>
                <b>Constrains</b>
              </p>
              <ul className="seller-ul">
                <li>She has no idea how to use the web app</li>
                <li>She has no experience in selling</li>
              </ul>
            </div>
            <div>
              <p>
                <b>Key scenarios</b>
              </p>
              <ul className="seller-ul">
                <li>
                  Amy wants to list 50 clothes on the website during her short
                  break.
                </li>
                <li>
                  Amy received an email notice about 10 new orders. She wants to
                  take care of these orders before her break ends.
                </li>
                <li>
                  Amy is learning to be a good seller. She wants to know if
                  she's running the business well and where she could improve.
                </li>
              </ul>
            </div>
          </div>
          <h4>Suss out requirements from key scenarios </h4>
          <div className="flex-row-seller">
            <Zoom>
              <img
                src={require("../images/seller/cs1.png")}
                alt="key scenario one"
                className="zoom-image"
              ></img>
            </Zoom>
            <Zoom>
              <img
                src={require("../images/seller/cs2.png")}
                alt="key scenario two"
                className="zoom-image"
              ></img>
            </Zoom>
            <Zoom>
              <img
                src={require("../images/seller/cs3.png")}
                alt="key scenario three"
                className="zoom-image"
              ></img>
            </Zoom>
          </div>
          <h4>Result: Mapping user needs and requirements</h4>
          <Zoom>
            <img
              src={require("../images/seller/requirements2.jpg")}
              alt="requirements"
              className="zoom-image light-shadow"
            ></img>
          </Zoom>
        </section>
        <section id="seller-design" data-section-name="design">
          <h3>Design</h3>
          <h4>User flows</h4>
          <p>I created the happy path of 3 scenarios to drive my design.</p>
          <div className="flex-row-seller">
            <Zoom>
              <img
                src={require("../images/seller/flow1.jpeg")}
                alt="user flow 1"
                className="zoom-image zoom-image-variant"
              ></img>
            </Zoom>
            <Zoom>
              <img
                src={require("../images/seller/flow2.jpeg")}
                alt="user flow 2"
                className="zoom-image zoom-image-variant"
              ></img>
            </Zoom>
            <Zoom>
              <img
                src={require("../images/seller/flow3.jpeg")}
                alt="user flow 3"
                className="zoom-image zoom-image-variant"
              ></img>
            </Zoom>
          </div>
          <h4>Some challenges I encountered</h4>
          <p>
            <b>
              #1 While listing an item, what if the user only want to save
              partial setting as defaults?
            </b>
          </p>
          <p>
            During the listing process, users might want to save some settings
            as defaults for future use. However, within 4 main
            settings(category, product detail, price and shipping), users might
            only saving the category and shipping options, since the others are
            usually unique and might not be applicable to the rest of the items.{" "}
          </p>
          <p>
            <b>Initial solution</b>
          </p>
          <Zoom>
            <img
              src={require("../images/seller/default-old2.jpg")}
              alt="initial default saving"
              className="zoom-image"
            ></img>
          </Zoom>
          <p>
            My initial thought is to use a modal to ask users which settings
            they want to save, as the last step of listing. A feedback I got was
            that users might have already forgot what they have done in each
            section at this point. Without any reference, asking users to recall
            individual settings increases their cognitive loads.
          </p>
          <br />
          <br />
          <p>
            <b>Iteration</b>
          </p>

          <Zoom>
            <img
              src={require("../images/seller/default-iterated2.jpg")}
              alt="iterated default saving"
              className="zoom-image"
            ></img>
          </Zoom>
          <p>
            I added a 'save xxx as default' option in each step of the listing
            process. Users can save the setting in the current section as they
            go. Since they can refer to their choices in place, this solution
            reduces the cognitive load in recalling.
          </p>
          <br />
          <p>
            <b>Final design</b>
          </p>
          <img
            src={require("../images/seller/mini-default.gif")}
            alt="gif for final solution one"
          ></img>
          <br />
          <br />
          <p>
            <b>#2 How should I present a high volume of orders intuitively?</b>
          </p>
          <p>
            Managing hundreds of orders could be stressful. I would to find a
            good way to display orders, so that it could reduce administrative
            workloads and raise efficiency.
          </p>
          <br />
          <p>
            <b>Option 1</b>
          </p>
          <Zoom>
            <img
              src={require("../images/seller/orders_old.png")}
              alt="order UI option 1"
              className="zoom-image"
            ></img>
          </Zoom>
          <div className="two-column-seller two-column-seller-variant">
            <p>
              <b>Pros: </b>Cards make the information easy to read. Users can
              differentiate orders quickly through images.
            </p>
            <p>
              <b>Cons: </b>Cards take a lot of space and disperse the orders.
              Only 3 cards are fully shown in this screen size. Users need to do
              a lot of scrolling to locate an order when the number of orders
              accumulates. Also, if users want to select multiple orders that
              are not consecutive, they need to jump back and forth a lot.
            </p>
          </div>

          <p>
            <b>Option 2</b>
          </p>
          <Zoom>
            <img
              src={require("../images/seller/orders-new.png")}
              alt="order UI option 2"
              className="zoom-image"
            ></img>
          </Zoom>
          <div className="two-column-seller two-column-seller-variant">
            <p>
              <b>Pros: </b>Order Information is more centralized using in a
              table setting. Users can skim through at least 5 orders at a time.
              Users can use the checkbox to select multiple orders and apply
              settings to selected items. This multi-choice pattern is widely
              used so that users won't need to spend a lot of time figuring out
              how to apply bulk actions
            </p>
            <p>
              <b>Cons: </b>The content in this page may look too dense.{" "}
            </p>
          </div>

          <p>
            <b>Final design</b>
          </p>
          <br />
          <Zoom>
            <img
              src={require("../images/seller/orders.png")}
              alt="order UI final solution"
              className="zoom-image"
            ></img>
          </Zoom>
          <p>
            Since sellers are familiar with their listings, they don't need
            large images to identify items, and thumbnails will be sufficient in
            this case. Further, adjacent rows are separated with different
            background colors, which makes the content less 'clunky' visually.
          </p>
        </section>
        <section id="seller-solution" data-section-name="solution">
          <h3>solutions</h3>
          {/* solution 1 */}
          <h4>Avoid repetitive actions in listing</h4>
          <div className="videos seller-videos">
            <div className="issue-cause">
              <div className="issue-cause-title">
                <ErrorOutlineIcon fontSize="large"></ErrorOutlineIcon>
                <span>User need:</span>
              </div>
              <ul>
                <li>Put a high volume of clothes into market quickly</li>
              </ul>
            </div>
            <Solution
              final
              solution="Customized default setting & bulk listing"
            />
            <ul className="seller-ul">
              <li>
                Users could then save the settings of an item as default for
                future use
              </li>
              <li>
                Users can add multiple items to the 'listing basket' and publish
                them together(Think about putting multiple songs into an album,
                and then published the whole album, instead of publishing each
                song one-by-one)
              </li>
            </ul>

            <video autoPlay loop muted playsInline>
              <source
                data-src={require("../images/seller/mini-listing.mov")}
              ></source>
              Your browser does not support HTML video.
            </video>
          </div>
          {/* solution2 */}
          <h4>Reduce manual effort in order management</h4>
          <div className="videos seller-videos">
            <div className="issue-cause">
              <div className="issue-cause-title">
                <ErrorOutlineIcon fontSize="large"></ErrorOutlineIcon>
                <span>User need:</span>
              </div>
              <ul>
                <li>Keep all orders on track without much effort</li>
              </ul>
            </div>
            <Solution
              final
              solution="Bulk order editing & automatic order update"
            />
            <ul className="seller-ul">
              <li>
                Users could select multiple orders at a time and mark them as
                shipped
              </li>
              <li>
                Once the 'shipped' status are set, users can downloaded all
                shipping labels for selected orders
              </li>
              <li>
                Order status will be automatically updated based on tracking
                information
              </li>
              <li>
                Users will get the payment once the package is delivered, no
                extra actions required
              </li>
            </ul>

            <video autoPlay loop muted playsInline>
              <source
                data-src={require("../images/seller/mini-tracking.mov")}
              ></source>
              Your browser does not support HTML video.
            </video>
          </div>
          {/* solution3 */}
          <h4>Show business performance </h4>
          <div className="videos seller-videos">
            <div className="issue-cause">
              <div className="issue-cause-title">
                <ErrorOutlineIcon fontSize="large"></ErrorOutlineIcon>
                <span>User need:</span>
              </div>
              <ul>
                <li>Know how the business is doing now and what to improve</li>
              </ul>
            </div>
            <Solution
              final
              solution="Store statistics & personalized recommendations for business grow"
            />
            <ul className="seller-ul">
              <li>
                Users can learn how their business is doing through the
                statistics of actively listing, orders, and finance
              </li>
              <li>
                Personalized insights reflects current market trends and
                provides strategy suggestions. Users could refer to insights to
                improve the store
              </li>
            </ul>

            <video autoPlay loop muted playsInline>
              <source
                data-src={require("../images/seller/mini-insight.mov")}
              ></source>
              Your browser does not support HTML video.
            </video>
          </div>
          <h4>Final prototype</h4>
          <Zoom>
            <img
              src={require("../images/seller/prototype-overview.png")}
              alt="prototype overview"
              className="zoom-image"
            ></img>
          </Zoom>
          <p>
            Check out the video demo for the final prototype. You may also find
            the embedded verison in the overview section.
          </p>
          <div className="live-demo-container">
            <a
              href="https://youtu.be/iCzbOUqS_Ag"
              rel="noopener noreferrer"
              target="_blank"
              className="live-demo-btn"
            >
              <LiveTvIcon />
              Video demo
            </a>

            <a
              href="https://www.figma.com/proto/Ht2EGi625WXMuz0E9LLaxv/dp2?node-id=209%3A724&viewport=299%2C354%2C0.03355732187628746&scaling=scale-down&page-id=0%3A1"
              rel="noopener noreferrer"
              target="_blank"
              className="live-demo-btn btn-contour"
            >
              <DataUsageIcon />
              Figma
            </a>
          </div>
        </section>
        <section id="seller-reflection" data-section-name="reflection">
          <h3>Reflection</h3>
          <h4>Future work</h4>
          <p>
            <b>Potential usability issues to measure</b>
          </p>
          <p>
            Due to time constraints, I didn't conduct a usability test for this
            project. However, it ran through 4 rounds of design critiques and
            got plenty of feedback during the walk-through. The following shows
            a list of potential issues for validation.
          </p>
          <ul className="seller-ul">
            <li>
              Is the 'listing basket' concept understandable? Do users know they
              could add multiple items to a 'container' and then publish all of
              them together?
            </li>
            <li>
              Is it clear that order status will be automatically updated? Do
              users need more instructions and hints?
            </li>
            <li>
              Are the insights useful? What other insights user might want to
              see?
            </li>
          </ul>
          <br />
          <p>
            <b>Potential feature improvement</b>
          </p>
          <ul className="seller-ul">
            <li>
              How could we increase the efficiency of the bulk listing? Even
              though the default setting is useful, but users still update
              product names, photos, descriptions, etc. for each product. Is
              there a way to lift this burden?
            </li>
          </ul>
          <br />
          <h4>What I have learned</h4>
          <p>
            <b>Move on with whatever is given</b>
          </p>
          <p>
            It is the first time I start a project with (only) a persona. As the
            only artifact to represent the users, the persona is informative but
            also too underwhelmed. I am not confident to design an app without
            talking to real users. However, I understand that this might be more
            aligned with reality. Designers won't don't have the luxury to
            participate in the full research-design cycle. Sometimes we joined
            the team in the middle and have to move on with whatever resources
            we have. This project is a great practice and turns out there is
            always a way to design even with limited research materials.
          </p>
          <br />

          <p>
            <b>
              Contextual scenario is an amazing artifact to identify user goals
              and design requirements
            </b>
          </p>
          <p>
            I love contextual scenarios! It is known that designers transform
            findings into design requirements like a miracle. The synthesizing
            process is usually ambiguous and hard to explain. Contextual
            scenario forces me to think through this process step by step, and
            establish a clearer relationship between user goals and design
            requirements.
          </p>
          <br />
          <br />
          <p>
            <i>
              Required attribution: Logo vector & PSD template created by
              freepik - www.freepik.com
            </i>
          </p>
        </section>
      </article>
    </div>
  );
}
