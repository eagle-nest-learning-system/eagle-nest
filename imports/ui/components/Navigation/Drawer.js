import React, { Component } from "react";

import DrawerList from "./DrawerList";

import { IconButton, SwipeableDrawer } from "@material-ui/core";
import { MenuOutlined as MenuIcon } from "@material-ui/icons";

import ToolbarComponent from "../common/ToolbarComponent";

export default class Drawer extends Component {
  state = {
    drawerOpened: false
  };

  openDrawer = () => {
    this.setState({
      drawerOpened: true
    });
  };

  closeDrawer = () => {
    this.setState({
      drawerOpened: false
    });
  };

  render() {
    const { drawerOpened } = this.state;

    return (
      <ToolbarComponent>
        <IconButton color="inherit" onClick={this.openDrawer}>
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          open={drawerOpened}
          onOpen={this.openDrawer}
          onClose={this.closeDrawer}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.closeDrawer}
            onKeyDown={this.closeDrawer}
          >
            <DrawerList />
          </div>
        </SwipeableDrawer>
      </ToolbarComponent>
    );
  }
}
