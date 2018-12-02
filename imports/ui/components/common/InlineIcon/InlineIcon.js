import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../../../theme';

const StyledInlineIcon = styled.div`
    display: inline-flex;
    ${({ left }) =>
      left &&
      css`
        margin-right: ${theme.spacing.unit}px;
      `}
    ${({ right }) =>
      right &&
      css`
        margin-left: ${theme.spacing.unit}px;
      `}
  `,
  InlineIcon = ({ left, right, icon }) => (
    <StyledInlineIcon left={left} right={right}>
      {icon}
    </StyledInlineIcon>
  );

InlineIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  left: PropTypes.bool,
  right: PropTypes.bool,
};

InlineIcon.defaultProps = {
  left: true,
  right: false,
};

export default InlineIcon;
