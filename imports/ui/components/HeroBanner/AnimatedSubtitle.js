import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { animated } from 'react-spring';

const AnimatedTypography = animated(Typography),
  AnimatedSubtitle = ({ isMobile, style }) => (
    <AnimatedTypography
      variant={isMobile ? 'h6' : 'h5'}
      component="span"
      color="inherit"
      style={style}
    >
      Set and submit homework, study with friends, engage parents, share resources,... all online.
    </AnimatedTypography>
  );

AnimatedSubtitle.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  style: PropTypes.object.isRequired,
};

export default AnimatedSubtitle;
