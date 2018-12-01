import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import theme from '../../../theme';
import styled from 'styled-components';

const StyledExpansionTypography = styled(Typography)`
  && {
    font-size: ${theme.typography.pxToRem(15)};
  }
`;

const ExpansionTypography = ({ text }) => (
  <StyledExpansionTypography>{text}</StyledExpansionTypography>
);

ExpansionTypography.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExpansionTypography;
