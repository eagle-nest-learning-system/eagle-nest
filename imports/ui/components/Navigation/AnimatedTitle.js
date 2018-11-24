import React from 'react';

import styled from 'styled-components';

import { Typography } from '@material-ui/core';

import { 
  Motion, 
  spring 
} from 'react-motion';

import Link from 'next/link';

const StyledNavigationTitle = styled(Typography)`
  && {
    display: inline-block;
    cursor: pointer;
  }
`;

const AnimatedTitle = () => 
  <Motion 
    defaultStyle={{
      xpos: -100  
    }}
    style={{
      xpos: spring(0)
    }}
  >
    {({xpos}) =>
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
    }
  </Motion>
;

export default AnimatedTitle