import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { DeleteOutline as DeleteIcon } from '@material-ui/icons';
import InlineIcon from '../InlineIcon';
import { fade } from '@material-ui/core/styles/colorManipulator';
import theme from '../../../theme';
import { animated } from 'react-spring';

const StyledImageActions = animated(
    styled.div`
      position: absolute;
      top: 0;
      left: 0;
      color: ${theme.palette.common.white};
      background-color: ${fade(theme.palette.common.black, 0.4)};
      width: 100%;
      height: 100%;
      display: flex;
    `,
  ),
  StyledImageActionsInner = styled.div`
    margin: auto;
  `,
  AnimatedImageActions = ({ style, onRemove, image }) => (
    <StyledImageActions style={style}>
      <StyledImageActionsInner>
        <Button color="inherit" onClick={onRemove(image)}>
          <InlineIcon icon={<DeleteIcon />} />
          Delete
        </Button>
      </StyledImageActionsInner>
    </StyledImageActions>
  );

AnimatedImageActions.propTypes = {
  image: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

export default AnimatedImageActions;
