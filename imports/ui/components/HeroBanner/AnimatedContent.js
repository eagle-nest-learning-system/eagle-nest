import React from 'react';
import ActionButton from './ActionButton';
import uuidv5 from 'uuid/v5';
import { Typography } from '@material-ui/core';
import { Trail } from 'react-spring';

const Title = ({ isMobile, style }) => (
  <Typography
    variant={isMobile ? 'h2' : 'h1'}
    component="h2"
    color="inherit"
    gutterBottom
    style={style}
  >
    Online school platform
  </Typography>
);
const Subtitle = ({ isMobile, style }) => (
  <Typography
    variant={isMobile ? 'h6' : 'h5'}
    component="span"
    color="inherit"
    style={style}
  >
    Set and submit homework, study with friends, engage parents, share
    resources,... all online.
  </Typography>
);
const items = [Title, Subtitle];

const AnimatedContent = ({ isMobile }) => (
  <Trail
    items={items}
    from={{
      ypos: -100,
      opacity: 0,
    }}
    style={{
      ypos: 0,
      opacity: 1,
    }}
  >
    {Item => () => <Item />}
  </Trail>
);
export default AnimatedContent;
