import React from 'react';

import { Typography } from '@material-ui/core';
import theme from '../../../theme';

import styled from 'styled-components';

const StyledExpansionTypography = styled(Typography)`
  && {
    font-size: ${theme.typography.pxToRem(15)};
  }
`;

const ExpansionTypography = ({ text }) => 
  <StyledExpansionTypography>
    {text}
  </StyledExpansionTypography>
;

export default ExpansionTypography