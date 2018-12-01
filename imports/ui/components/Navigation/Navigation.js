import React, { Component } from "react";

import styled from "styled-components";

import Title from "./Title";
import Drawer from "./Drawer";
import ButtonGroup from "./ButtonGroup";
import SearchGroup from "./SearchGroup";

import { AppBar, Toolbar, RootRef } from "@material-ui/core";
import theme from "../../theme";

import { connect } from "react-redux";
import { navigationActions } from "./controllers";

import ResizeDetector from "react-resize-detector";

const StyledNavigationPusher = styled.div`
  height: ${({ navigationHeight }) => navigationHeight}px;
`;

const mapStateToProps = state => ({
  viewportWidth: state.app.viewportWidth,
  navigationHeight: state.navigation.navigationHeight
});

export default connect(
  mapStateToProps,
  navigationActions
)(
  class Navigation extends Component {
    updateNavigationHeight = () => {
      this.props.updateNavigationHeight(this.navigationRef.clientHeight);
    };

    componentDidMount() {
      this.updateNavigationHeight();
    }

    render() {
      const { viewportWidth, navigationHeight } = this.props,
        isMobile = viewportWidth < theme.breakpoints.values.sm;

      return (
        <>
          <RootRef rootRef={x => (this.navigationRef = x)}>
            <AppBar position="fixed">
              <Toolbar>
                <Drawer />
                <Title />
                {!isMobile && <ButtonGroup />}
                <SearchGroup />
              </Toolbar>
              <ResizeDetector
                handleHeight
                onResize={this.updateNavigationHeight}
              />
            </AppBar>
          </RootRef>
          <StyledNavigationPusher navigationHeight={navigationHeight} />
        </>
      );
    }
  }
);
