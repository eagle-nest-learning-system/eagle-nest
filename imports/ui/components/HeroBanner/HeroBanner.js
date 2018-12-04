import React from 'react';
import PropTypes from 'prop-types';
import MainContentWrapper from '../common/MainContentWrapper';
import HeroBackground from './HeroBackground';
import Content from './Content';
import theme from '../../theme';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    viewportWidth: state.app.viewportWidth,
    navigationHeight: state.navigation.navigationHeight,
  }),
  HeroBanner = ({ viewportWidth, navigationHeight }) => {
    const isMobile = viewportWidth < theme.breakpoints.values.sm;

    return (
      <MainContentWrapper pushHeight={navigationHeight}>
        <HeroBackground />
        <Content isMobile={isMobile} />
      </MainContentWrapper>
    );
  };

HeroBanner.propTypes = {
  navigationHeight: PropTypes.number,
  viewportWidth: PropTypes.number,
};

export default connect(
  mapStateToProps,
  null,
)(HeroBanner);
