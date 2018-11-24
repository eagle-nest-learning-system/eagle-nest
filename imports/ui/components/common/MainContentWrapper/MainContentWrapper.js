import React from 'react';

import styled, { css } from 'styled-components';

const StyledMainContentWrapper = styled.div`
  position: relative;
  width: 100vw;
  ${props => props.pushHeight ? css`
    height: calc(100vh - ${props => props.pushHeight}px);
  ` : `
    height: 100vh;
  `}
`;

const MainContentWrapper = ({ pushHeight, children }) => 
  <StyledMainContentWrapper pushHeight={pushHeight}>
    {children}
  </StyledMainContentWrapper>
;

export default MainContentWrapper