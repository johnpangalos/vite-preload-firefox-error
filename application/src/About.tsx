import React from "react";
import _ from "lodash";
import myFunc from "my-package";
myFunc();

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
