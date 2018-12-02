import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnimatedImageActions from './AnimatedImageActions';
import { ClickAwayListener } from '@material-ui/core';
import { Spring, animated } from 'react-spring';

const StyledImagePreviewer = animated(
    styled.div`
      position: relative;
      user-select: none;
      height: 128px;
      cursor: pointer;
    `,
  ),
  StyledImage = styled.img`
    height: 100%;
  `;

class ImagePreviewer extends Component {
  state = {
    actionsOpened: false,
  };

  handleOpenActions = () => {
    this.setState({
      actionsOpened: true,
    });
  };

  handleCloseActions = () => {
    this.setState({
      actionsOpened: false,
    });
  };

  render() {
    const { actionsOpened } = this.state;
    const { src, image, onRemove, style } = this.props;

    return (
      <ClickAwayListener onClickAway={this.handleCloseActions}>
        <StyledImagePreviewer onClick={this.handleOpenActions} style={style}>
          <StyledImage src={src} />
          <Spring
            native
            from={{
              scale: 0,
            }}
            to={{
              scale: actionsOpened ? 1 : 0,
            }}
          >
            {({ scale }) => (
              <AnimatedImageActions scale={scale} image={image} onRemove={onRemove} />
            )}
          </Spring>
        </StyledImagePreviewer>
      </ClickAwayListener>
    );
  }
}

ImagePreviewer.propTypes = {
  image: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};

export default ImagePreviewer;
