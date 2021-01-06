import React from "react";
import "./TemplateStyle.scss";
import "./Blender3d.scss";
import WorkHeader from "../components/WorkHeader";
import Zoom from "react-medium-image-zoom";
import ProgressiveImage from "react-progressive-image";

export default function Blender3d() {
  return (
    <div>
      <WorkHeader
        title="Project 3D"
        subtitle="3D Illustrations"
        role="Role: Product Designer / Duration: Ongoing Project"
        hidden
      />

      <article className="main-content work-content">
        <section className="about">
          <p className="body-s">Blender / Photoshop</p>
          <h2>3D illustrations built from scratch</h2>
        </section>

        <ProgressiveImage
          src={require("../images/blender3d/phone-scene-render-cover.jpg")}
          placeholder={require("../images/blender3d/phone-scene-render-cover-placeholder.jpg")}
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

        <section className="about">
          <h3>Overview</h3>

          <p>
            This project is to get my hands on Blender, an open source 3d
            software. In this project, I want to practice my skills on
            making 3d illustrations and explore how these 3d illustrations could
            be used in UX products. My 3d modeling experience gained from my
            architecture education (for 8 years!) helped a lot in this
            journey. 
            <br/><br/>
            This is an on-going project and will be consistently updated.
          </p>

          <div className="gallery-row">
          <Zoom>
            <img
              src={require("../images/blender3d/phone-scene-render2.jpg")}
              alt="3d phone scene"
              width="100%"
            ></img>
          </Zoom>

          
          <Zoom>
            <img
              src={require("../images/blender3d/tree.jpg")}
              alt="2021 tree"
              width="100%"
            ></img>
        </Zoom>
        <Zoom>
            <img
              src={require("../images/blender3d/tv-composition-xl.jpg")}
              alt="3d tv with QR code"
              width="100%"
            ></img>
          </Zoom>
          <Zoom>
            <img
              src={require("../images/blender3d/donut_neon.jpg")}
              alt="3d donuts"
              width="100%"
            ></img>
          </Zoom>

         
          
        </div>
        </section>

      
      </article>
    </div>
  );
}
