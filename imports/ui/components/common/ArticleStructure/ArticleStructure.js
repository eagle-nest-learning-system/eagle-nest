import React from 'react';

import MainContentWrapper from '../MainContentWrapper';
import MainContentInner from '../MainContentInner';
import ArticleBackground from './ArticleBackground';

import { Paper } from '@material-ui/core';
import theme from '../../../theme';

import styled from 'styled-components';

import { connect } from 'react-redux';

const StyledArticleWrapper = styled(Paper)`
  width: 800px;
  padding: ${theme.spacing.unit * 6}px;
  margin: auto;

  @media (max-width: ${theme.breakpoints.values.sm}px) {
    min-height: 100%;
    padding: ${theme.spacing.unit * 4}px;
  }
`;

const mapStateToProps = state => ({
  viewportWidth: state.app.viewportWidth,
  navigationHeight: state.navigation.navigationHeight
})

const ArticleStructure = ({ children, navigationHeight, viewportWidth }) => {
  const isMobile = viewportWidth < theme.breakpoints.values.sm;

  return (  
    <MainContentWrapper pushHeight={navigationHeight}>
      <ArticleBackground />
      <MainContentInner noGutterOnMobile>
        <StyledArticleWrapper square={isMobile}>
          {children}
        </StyledArticleWrapper>
      </MainContentInner>
    </MainContentWrapper>
  );
};

export default connect(mapStateToProps, null)(ArticleStructure)
