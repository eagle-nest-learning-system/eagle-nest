import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Title from './Title';
import Drawer from './Drawer';
import ButtonGroup from './ButtonGroup';
import SearchGroup from './SearchGroup';
import { AppBar, Toolbar, RootRef } from '@material-ui/core';
import theme from '../../theme';
import { connect } from 'react-redux';
import { navigationActions } from './controllers';
import ResizeDetector from 'react-resize-detector';

const StyledNavigationPusher = styled.div`
    height: ${({ navigationHeight }) => navigationHeight}px;
  `,
  mapStateToProps = state => ({
    viewportWidth: state.app.viewportWidth,
    navigationHeight: state.navigation.navigationHeight,
  });

class Navigation extends Component {
  componentDidMount() {
    this.handleResize();
  }

  handleResize = () => {
    this.props.updateNavigationHeight(this.navigationRef.clientHeight);
  };

  render() {
    const { viewportWidth, navigationHeight } = this.props;

    const isMobile = viewportWidth < theme.breakpoints.values.sm;

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
            <ResizeDetector handleHeight onResize={this.handleResize} />
          </AppBar>
        </RootRef>
        <StyledNavigationPusher navigationHeight={navigationHeight} />
      </>
    );
  }
}

Navigation.propTypes = {
  navigationHeight: PropTypes.number,
  updateNavigationHeight: PropTypes.func,
  viewportWidth: PropTypes.number,
};

export default connect(
  mapStateToProps,
  navigationActions,
)(Navigation);
