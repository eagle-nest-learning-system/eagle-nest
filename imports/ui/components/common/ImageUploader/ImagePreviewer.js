import React, { Component } from "react";

import styled from "styled-components";

import AnimatedImageActions from "./AnimatedImageActions";

import { ClickAwayListener } from "@material-ui/core";
import theme from "../../../theme";

const StyledImagePreviewer = styled.div`
  position: relative;
  user-select: none;
  overflow: hidden;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: ${theme.spacing.unit * 2}px;
  }
`;

const StyledImage = styled.img`
  height: 100%;
`;

export default class ImagePreviewer extends Component {
  state = {
    actionsOpened: false
  };

  openActions = () => {
    this.setState({
      actionsOpened: true
    });
  };

  closeActions = () => {
    this.setState({
      actionsOpened: false
    });
  };

  render() {
    const { actionsOpened } = this.state,
      { src, image, onRemove, style } = this.props;

    return (
      <ClickAwayListener onClickAway={this.closeActions}>
        <StyledImagePreviewer onClick={this.openActions} style={style}>
          <StyledImage src={src} />
          <AnimatedImageActions
            actionsOpened={actionsOpened}
            image={image}
            onRemove={onRemove}
          />
        </StyledImagePreviewer>
      </ClickAwayListener>
    );
  }
}
