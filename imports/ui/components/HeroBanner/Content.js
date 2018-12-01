import React from "react";

import MainContentInner from "../common/MainContentInner";

import AnimatedContent from "./AnimatedContent";

import styled from "styled-components";

import theme from "../../theme";

import { connect } from "react-redux";

const StyledMainContent = styled.div`
  margin: auto;
  color: ${theme.palette.common.white};
  text-align: center;
  user-select: none;
`;

const mapStateToProps = state => ({
  viewportWidth: state.app.viewportWidth
});

const Content = ({ viewportWidth }) => {
  const isMobile = viewportWidth < theme.breakpoints.values.sm;

  return (
    <MainContentInner>
      <StyledMainContent>
        <AnimatedContent isMobile={isMobile} />
      </StyledMainContent>
    </MainContentInner>
  );
};

export default connect(
  mapStateToProps,
  null
)(Content);
