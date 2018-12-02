import React from 'react';
import { Spring } from 'react-spring';
import AnimatedTitle from './AnimatedTitle';
import ToolbarComponent from '../common/ToolbarComponent';

const Title = () => (
  <ToolbarComponent stretch flex hiddenOverflow>
    <Spring native from={{ transform: 'translateX(-100%)' }} to={{ transform: 'translateX(0%)' }}>
      {style => <AnimatedTitle style={style} />}
    </Spring>
  </ToolbarComponent>
);
export default Title;
