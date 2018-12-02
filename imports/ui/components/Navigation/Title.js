import React from 'react';
import { Spring } from 'react-spring';
import AnimatedTitle from './AnimatedTitle';
import ToolbarComponent from '../common/ToolbarComponent';

const Title = () => (
  <ToolbarComponent stretch flex hiddenOverflow>
    <Spring native from={{ xpos: -100 }} to={{ xpos: 0 }}>
      {({ xpos }) => <AnimatedTitle xpos={xpos} />}
    </Spring>
  </ToolbarComponent>
);
export default Title;
