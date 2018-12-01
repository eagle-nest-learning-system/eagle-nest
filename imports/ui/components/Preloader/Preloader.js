import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import theme from '../../theme';

const StyledLoader = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1700;
  display: flex;
  background-color: ${theme.palette.primary.main};

  &.eagle-loaded {
    transition: all ${theme.transitions.duration.leavingScreen}ms;
    z-index: -1;
    opacity: 0;
  }
`;

const StyledCircularProgress = styled(CircularProgress)`
  margin: auto;
  color: ${theme.palette.common.white};
`;

const Preloader = () => (
  <StyledLoader className="eagle-preloader">
    <StyledCircularProgress disableShrink />
  </StyledLoader>
);
export default Preloader;
