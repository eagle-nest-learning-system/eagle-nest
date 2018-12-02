import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../../../theme';

const StyledToolbarComponent = styled.div`
  &:not(:last-child) {
    margin-right: ${theme.spacing.unit * 2}px;
  }
  ${({ stretch }) =>
    stretch &&
    css`
      flex: 1 0 auto;
    `}
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
    `}
  ${({ hiddenOverflow }) =>
    hiddenOverflow &&
    css`
      overflow: hidden;
    `}
`,
  ToolbarComponent = ({ stretch, flex, hiddenOverflow, children }) => (
    <StyledToolbarComponent stretch={stretch} flex={flex} hiddenOverflow={hiddenOverflow}>
      {children}
    </StyledToolbarComponent>
  );

ToolbarComponent.propTypes = {
  children: PropTypes.node.isRequired,
  flex: PropTypes.bool,
  hiddenOverflow: PropTypes.bool,
  stretch: PropTypes.bool,
};

ToolbarComponent.defaultProps = {
  flex: false,
  hiddenOverflow: false,
  stretch: false,
};

export default ToolbarComponent;
