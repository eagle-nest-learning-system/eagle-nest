import React from 'react';

import styled, { css } from 'styled-components';

import theme from '../../../theme';

const StyledToolbarComponent = styled.div`
  &:not(:last-child) {
    margin-right: ${theme.spacing.unit * 2}px;
  }
  ${props => props.stretch && css`
    flex: 1 0 auto;
  `}
  ${props => props.flex && css`
    display: flex;
  `}
  ${props => props.hiddenOverflow && css`
    overflow: hidden;
  `}
`;

const ToolbarComponent = ({stretch, flex, hiddenOverflow, children}) => 
  <StyledToolbarComponent
    stretch={stretch}
    flex={flex}
    hiddenOverflow={hiddenOverflow}
  >
    {children}
  </StyledToolbarComponent>
;

export default ToolbarComponent