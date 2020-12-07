import React from "react";
import './Solution.scss'

export default function Insight(props) {
  return (
    <div className="solution">
      <img
        src={require("../images/mellow.png")}
        alt="insight section"
      ></img>
      <p>
        <b>Idea</b>
      </p>
      <p className="solution-explanation">{props.explanation}</p>
    </div>
  );
}
