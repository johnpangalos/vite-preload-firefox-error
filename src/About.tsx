import React from "react";
import _ from "lodash";

function About() {
  const str = _.join(["a", "b", "c"], "~");
  return (
    <>
      <h2>About</h2>
      <div>{str}</div>
    </>
  );
}

export default About;
