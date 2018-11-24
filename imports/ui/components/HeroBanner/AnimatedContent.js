import React from 'react';

import ActionButton from './ActionButton';

import { Typography } from '@material-ui/core';

import { 
  Motion, 
  spring 
} from 'react-motion';

const AnimatedContent = ({ isMobile }) =>
  <Motion 
    defaultStyle={{
      order: 0
    }} 
    style={{
      order: spring(3, {
        stiffness: 40
      }
    )}}
  >
    {({ order }) => {
        const titleYPos = order <= 1 ? (order - 1) * 100 : 0,
        titleOpacity = order <= 1 ? order : 1,
        subtitleYPos = 1 < order && order <= 2 ? (order - 2) * 100 : order > 2 ? 0 : -100,
        subtitleOpacity = 1 < order && order <= 2 ? order - 1 : order > 2 ? 1 : 0,
        buttonYPos = 2 < order && order <= 3 ? (order - 3) * 100 : -100,
        buttonOpacity = 2 < order && order <= 3 ? order - 2 : 0;

        return (
          <>
            <Typography 
              variant={isMobile ? "h2" : "h1"} 
              component="h2" 
              color="inherit" 
              gutterBottom
              style={{
                transform: `translateY(${titleYPos}px)`,
                opacity: titleOpacity
              }}
            >
              Online school platform
            </Typography>
            <Typography 
              variant={isMobile ? "h6" : "h5"}
              component="span" 
              color="inherit"
              style={{
                transform: `translateY(${subtitleYPos}px)`,
                opacity: subtitleOpacity
              }}
            >
              Set and submit homework, study with friends, engage parents, share resources,... all online.
            </Typography>
            <ActionButton 
              buttonYPos={buttonYPos} 
              buttonOpacity={buttonOpacity} 
            />
          </>
        );
      }
    }
  </Motion>
;

export default AnimatedContent
