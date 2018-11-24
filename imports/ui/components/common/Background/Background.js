import React from 'react';

import styled from 'styled-components';

import { fade } from '@material-ui/core/styles/colorManipulator';
import theme from '../../../theme';

const StyledBackground = styled.div`
  background: url(${props => props.image}) center/cover no-repeat fixed;
  position: absolute;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${fade(theme.palette.primary.main, 0.4)};
  }
`;

const Background = ({ image }) => <StyledBackground image={image} />;

export default Background