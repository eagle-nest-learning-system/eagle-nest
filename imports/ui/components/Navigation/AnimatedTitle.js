import React from "react";

import styled from "styled-components";

import { Typography } from "@material-ui/core";

import { Spring } from "react-spring";

import Link from "next/link";

const StyledNavigationTitle = styled(Typography)`
  && {
    display: inline-block;
    cursor: pointer;
  }
`;

const AnimatedTitle = () => (
  <Spring
    from={{
      xpos: -100
    }}
    to={{
      xpos: 0
    }}
  >
    {({ xpos }) => (
      <Link href="/">
        <StyledNavigationTitle
          style={{
            transform: `translateX(${xpos}%)`
          }}
          variant="h4"
          component="h1"
          color="inherit"
        >
          Eagle Nest
        </StyledNavigationTitle>
      </Link>
    )}
  </Spring>
);
export default AnimatedTitle;
