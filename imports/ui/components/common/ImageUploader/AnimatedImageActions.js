import React from "react";

import styled from "styled-components";

import { Button } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import { fade } from "@material-ui/core/styles/colorManipulator";
import theme from "../../../theme";

import { Spring } from "react-spring";

const StyledImageActions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  color: ${theme.palette.common.white};
  background-color: ${fade(theme.palette.common.black, 0.4)};
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledImageActionsInner = styled.div`
  margin: auto;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  margin-right: ${theme.spacing.unit}px;
`;

const AnimatedImageActions = ({ actionsOpened, onRemove, image }) => (
  <Spring
    from={{
      scale: 0
    }}
    to={{
      scale: actionsOpened ? 1 : 0
    }}
  >
    {({ scale }) => (
      <StyledImageActions
        style={{
          transform: `scale(${scale})`
        }}
      >
        <StyledImageActionsInner>
          <Button color="inherit" onClick={onRemove(image)}>
            <StyledDeleteIcon />
            Delete
          </Button>
        </StyledImageActionsInner>
      </StyledImageActions>
    )}
  </Spring>
);
export default AnimatedImageActions;
