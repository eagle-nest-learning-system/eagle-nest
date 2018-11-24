import React from 'react';

import MainContentWrapper from '../common/MainContentWrapper';
import HeroBackground from './HeroBackground';
import Content from './Content';

import { connect } from 'react-redux';

const mapStateToProps = state => ({
  navigationHeight: state.navigation.navigationHeight
});

const HeroBanner = ({ navigationHeight }) => 
  <MainContentWrapper pushHeight={navigationHeight}>
    <HeroBackground />
    <Content />
  </MainContentWrapper>
;

export default connect(mapStateToProps, null)(HeroBanner)