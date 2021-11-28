import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        console.log(props.results.word);
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
