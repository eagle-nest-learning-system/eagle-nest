import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledMainContentWrapper = styled.div`
  position: relative;
  width: 100vw;
  ${({ pushHeight }) =>
    pushHeight
      ? css`
          height: calc(100vh - ${pushHeight}px);
        `
      : `
    height: 100vh;
  `}
`;

const MainContentWrapper = ({ pushHeight, children }) => (
  <StyledMainContentWrapper pushHeight={pushHeight}>
    {children}
  </StyledMainContentWrapper>
);

MainContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  pushHeight: PropTypes.number,
};

MainContentWrapper.defaultProps = {
  pushHeight: 0,
};

export default MainContentWrapper;
