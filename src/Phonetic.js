import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic mt-1">
      <a className="mb-3" href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      <br />
      <span className="text mt-5">{props.phonetic.text}</span>
    </div>
  );
}
