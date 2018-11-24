import React from 'react';

import styled from 'styled-components';

import { Button } from '@material-ui/core';
import theme from '../../theme';

import Link from 'next/link';

const StyledButtonWrapper = styled.div`
  position: absolute;
  bottom: ${theme.spacing.unit * 3}px;
  right: 0;
  width: 100%;
`;

const StyledButton = styled(Button)`
  && {
    min-width: 140px;
  }
`;

const ActionButton = ({ buttonYPos, buttonOpacity }) => 
  <StyledButtonWrapper>
    <Link href="/register">
      <StyledButton 
        style={{
          transform: `translateY(${buttonYPos}px)`,
          opacity: buttonOpacity
        }}
        variant="extendedFab" 
        color="secondary" 
      >
        Join now!
      </StyledButton>
    </Link>
  </StyledButtonWrapper>
;

export default ActionButton