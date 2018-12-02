import React, { Component } from 'react';
import DrawerList from './DrawerList';
import { IconButton, SwipeableDrawer } from '@material-ui/core';
import { MenuOutlined as MenuIcon } from '@material-ui/icons';
import ToolbarComponent from '../common/ToolbarComponent';

export default class Drawer extends Component {
  state = {
    drawerOpened: false,
  };

  handleOpenDrawer = () => {
    this.setState({
      drawerOpened: true,
    });
  };

  handleCloseDrawer = () => {
    this.setState({
      drawerOpened: false,
    });
  };

  render() {
    const { drawerOpened } = this.state;

    return (
      <ToolbarComponent>
        <IconButton color="inherit" onClick={this.handleOpenDrawer}>
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          open={drawerOpened}
          onOpen={this.handleOpenDrawer}
          onClose={this.handleCloseDrawer}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.handleCloseDrawer}
            onKeyDown={this.handleCloseDrawer}
          >
            <DrawerList />
          </div>
        </SwipeableDrawer>
      </ToolbarComponent>
    );
  }
}
