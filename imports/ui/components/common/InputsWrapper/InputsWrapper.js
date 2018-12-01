import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../../theme';

const StyledInputsWrapper = styled.div`
  margin-bottom: ${theme.spacing.unit * 2}px;
`;

const InputsWrapper = ({ children }) => (
  <StyledInputsWrapper>{children}</StyledInputsWrapper>
);

InputsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputsWrapper;
