import React from 'react';

import styled from 'styled-components';

import theme from '../../../theme';

const StyledInputsWrapper = styled.div`
  margin-bottom: ${theme.spacing.unit * 2}px;
`;

const InputsWrapper = ({ children }) => 
  <StyledInputsWrapper>
    {children}
  </StyledInputsWrapper>
;

export default InputsWrapper