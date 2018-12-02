import React from 'react';
import PropTypes from 'prop-types';
import MainContentInner from '../common/MainContentInner';
import AnimatedTitle from './AnimatedTitle';
import AnimatedSubtitle from './AnimatedSubtitle';
import ActionButton from './AnimatedActionButton';
import styled from 'styled-components';
import theme from '../../theme';
import { Spring } from 'react-spring';
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
          <Spring
            native
            from={{
              transform: 'translateY(-100%)',
              opacity: 0,
            }}
            to={{
              transform: 'translateY(0)',
              opacity: 1,
            }}
          >
            {style => <AnimatedTitle isMobile={isMobile} style={style} />}
          </Spring>
          <Spring
            native
            from={{
              transform: 'translateY(-100%)',
              opacity: 0,
            }}
            to={{
              transform: 'translateY(0)',
              opacity: 1,
            }}
            config={{
              delay: theme.transitions.duration.complex,
            }}
          >
            {style => <AnimatedSubtitle isMobile={isMobile} style={style} />}
          </Spring>
          <Spring
            native
            from={{
              transform: 'translateY(-100%)',
              opacity: 0,
            }}
            to={{
              transform: 'translateY(0)',
              opacity: 1,
            }}
            config={{
              delay: theme.transitions.duration.complex * 2,
            }}
          >
            {style => <ActionButton style={style} />}
          </Spring>
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
