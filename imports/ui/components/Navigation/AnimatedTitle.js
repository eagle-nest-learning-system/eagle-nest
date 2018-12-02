import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { animated } from 'react-spring';
import Link from 'next/link';

const StyledNavigationTitle = animated(
    styled(Typography)`
      && {
        display: inline-block;
        cursor: pointer;
      }
    `,
  ),
  AnimatedTitle = ({ xpos }) => (
    <Link href="/">
      <StyledNavigationTitle
        style={{
          transform: xpos.interpolate(x => `translateX(${x}%)`),
        }}
        variant="h4"
        component="h1"
        color="inherit"
      >
        Eagle Nest
      </StyledNavigationTitle>
    </Link>
  );

AnimatedTitle.propTypes = {
  xpos: PropTypes.object.isRequired,
};

export default AnimatedTitle;
