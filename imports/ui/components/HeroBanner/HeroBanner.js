import React from 'react';
import PropTypes from 'prop-types';
import MainContentWrapper from '../common/MainContentWrapper';
import HeroBackground from './HeroBackground';
import Content from './Content';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    navigationHeight: state.navigation.navigationHeight,
  }),
  HeroBanner = ({ navigationHeight }) => (
    <MainContentWrapper pushHeight={navigationHeight}>
      <HeroBackground />
      <Content />
    </MainContentWrapper>
  );

HeroBanner.propTypes = {
  navigationHeight: PropTypes.number,
};

export default connect(
  mapStateToProps,
  null,
)(HeroBanner);
