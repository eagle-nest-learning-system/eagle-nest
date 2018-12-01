import React from "react";

import AnimatedTitle from "./AnimatedTitle";

import ToolbarComponent from "../common/ToolbarComponent";

const Title = () => (
  <ToolbarComponent stretch flex hiddenOverflow>
    <AnimatedTitle />
  </ToolbarComponent>
);
export default Title;
