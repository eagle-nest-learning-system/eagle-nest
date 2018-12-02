import React from 'react';
import PropTypes from 'prop-types';
import MainContentInner from '../common/MainContentInner';
import AnimatedContent from './AnimatedContent';
import styled from 'styled-components';
import theme from '../../theme';
import { connect } from 'react-redux';

const StyledMainContent = styled.div`
    margin: auto;
    color: ${theme.palette.common.white};
    text-align: center;
    user-select: none;
  `,
  mapStateToProps = state => ({
    viewportWidth: state.app.viewportWidth,
  }),
  Content = ({ viewportWidth }) => {
    const isMobile = viewportWidth < theme.breakpoints.values.sm;

    return (
      <MainContentInner>
        <StyledMainContent>
          <AnimatedContent isMobile={isMobile} />
        </StyledMainContent>
      </MainContentInner>
    );
  };

Content.propTypes = {
  viewportWidth: PropTypes.number,
};

export default connect(
  mapStateToProps,
  null,
)(Content);
