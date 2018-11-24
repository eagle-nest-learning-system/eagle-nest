import React from 'react';

import styled, { css } from 'styled-components';
import theme from '../../../theme';

const StyledMainContentInner =  styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  padding: ${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px;
  overflow-x: hidden;
  ${props => props.noGutterOnMobile && css`
    @media (max-width: ${theme.breakpoints.values.sm}px) {
      padding: 0;
    }
  `}

`;

const MainContentInner = ({ children, noGutterOnMobile, className }) => 
  <StyledMainContentInner 
    className={className} 
    noGutterOnMobile={noGutterOnMobile}
  >
    {children}
  </StyledMainContentInner>
;

export default MainContentInner