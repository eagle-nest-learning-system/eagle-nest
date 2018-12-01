import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fade } from '@material-ui/core/styles/colorManipulator';
import theme from '../../../theme';

const StyledBackground = styled.div`
  background: url(${({ src }) => src}) center/cover no-repeat fixed;
  position: absolute;
  width: 100%;
  height: 100%;
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${fade(theme.palette.primary.main, 0.4)};
  }
`;

const Background = ({ src }) => <StyledBackground src={src} />;

Background.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Background;
