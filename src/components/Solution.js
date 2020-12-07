import React from "react";
import './Solution.scss'

export default function Solution(props) {
  return (
    <div className="solution">
      <img
        src={props.final ? require("../images/pet/lightbulb.png"):require("../images/pet/ideas.png")}
        alt="solution section"
      ></img>
      <p>
        <b>{props.final? props.solution:"Iteration"}</b>
      </p>
      <p className="solution-explanation">{props.explanation}</p>
      {/* in case have multiple lines */}
      <p className="solution-explanation">{props.explanation2}</p>
      <p className="solution-explanation">{props.explanation3}</p>
      <p className="solution-explanation">{props.explanation4}</p>
    </div>
  );
}
