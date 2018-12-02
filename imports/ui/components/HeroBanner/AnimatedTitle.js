import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { animated } from 'react-spring';

const AnimatedTypography = animated(Typography),
  AnimatedTitle = ({ isMobile, style }) => (
    <AnimatedTypography
      variant={isMobile ? 'h2' : 'h1'}
      component="h2"
      color="inherit"
      gutterBottom
      style={style}
    >
      Online school platform
    </AnimatedTypography>
  );

AnimatedTitle.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  style: PropTypes.object.isRequired,
};

export default AnimatedTitle;
