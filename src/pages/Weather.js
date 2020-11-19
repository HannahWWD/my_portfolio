import React from "react";
import "./TemplateStyle.scss";
import "./Weather.scss";
import WorkHeader from "../components/WorkHeader";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import GitHubIcon from "@material-ui/icons/GitHub";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import { HashLink } from "react-router-hash-link";

function Weather() {
  return (
    <div>
      <WorkHeader
        title="Weather Widget"
        subtitle="Weather Web App"
        role="Role: Product Designer & Front End Engineer / Duration: 1 week"
        github="https://github.com/HannahWWD/weather-widget"
        demo="https://weather-widget-demo.netlify.app/"
      />

      <article className="main-content work-content">
        <section className="about">
          <p className="body-s">Typescript / Webpack / AJAX / REST Api </p>
          <h2>Know current and future weather in your city at a glance</h2>
          <HashLink smooth to="#weather-code">
            Jump to Development Section
          </HashLink>
        </section>

     

        <div className="videos">
          <video autoPlay loop>
            <source src={require("../images/weather/demo_3.mov")}></source>
            Your browser does not support HTML video.
          </video>
        </div>

        <section>
        <p>
            The weather widget is a one-week personal project to get my hands
            dirty on TypeScript features such as type checking, decorators and
            interfaces. The web app detects user input (with a autocomplete
            feature) to update multiple components with designated city's
            weather and image data. A lazing loading library with blurry effect
            is used to handle the latency of downloading high-solution
            background images.
          </p>
        </section>

        <section id="weather-code" data-section-name="technical sheet">
          <h3>Technical Sheet</h3>
          <p>Technologies:</p>
          <br />
          <div className="customized-list">
            <div>
              <DonutLargeIcon fontSize="large" />
              TypeScript
            </div>
            <div>
              <DonutLargeIcon fontSize="large" />
              Webpack
            </div>
            <div>
              <DonutLargeIcon fontSize="large" />
              REST Api
            </div>
            <div>
              <DonutLargeIcon fontSize="large" />
              Lozad
            </div>
            <div>
              <DonutLargeIcon fontSize="large" />
              AJAX
            </div>
          </div>
          <br />
          <p>Features:</p>
          <div className="customized-list">
            <div>
              <DonutLargeIcon fontSize="large" />
              Autocompleter for faster and reliable city input
            </div>
            <div>
              <DonutLargeIcon fontSize="large" />
              Lazing loading with blurry effect for background image update
            </div>
          </div>

          <br />
          <h3>Live Demo and GitHub</h3>
          <p>Checkout the live web app demo and github repository:</p>
          <div className="live-demo-container">
            <a
              href="https://weather-widget-demo.netlify.app/"
              rel="noopener noreferrer"
              target="_blank"
              className="live-demo-btn"
            >
              <LiveTvIcon />
              Live App
            </a>

            <a
              href="https://github.com/HannahWWD/weather-widget"
              rel="noopener noreferrer"
              target="_blank"
              className="live-demo-btn btn-contour"
            >
              <GitHubIcon />
              GitHub
            </a>
          </div>
        </section>
      </article>
    </div>
  );
}

export default Weather;
