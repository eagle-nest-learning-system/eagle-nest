import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import theme from '../../../theme';

const StyledMainContentInner = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    padding: ${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px;
    overflow-x: hidden;
    ${({ noGutterOnMobile }) =>
      noGutterOnMobile &&
      css`
        @media (max-width: ${theme.breakpoints.values.sm}px) {
          padding: 0;
        }
      `}
  `,
  MainContentInner = ({ children, noGutterOnMobile, className }) => (
    <StyledMainContentInner className={className} noGutterOnMobile={noGutterOnMobile}>
      {children}
    </StyledMainContentInner>
  );

MainContentInner.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  noGutterOnMobile: PropTypes.bool,
};

MainContentInner.defaultProps = {
  noGutterOnMobile: false,
};

export default MainContentInner;
