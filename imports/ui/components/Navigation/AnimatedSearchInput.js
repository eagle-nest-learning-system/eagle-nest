import React from "react";

import styled from "styled-components";

import { Paper, IconButton, InputBase } from "@material-ui/core";
import { CloseOutlined as CloseIcon } from "@material-ui/icons";
import theme from "../../theme";

import { Motion, spring } from "react-motion";

const StyledNavigationButtonWrapper = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  padding-right: ${theme.spacing.unit * 2}px;
  display: flex;
  align-items: center;
`;

const StyledNavigationSearchInput = styled(props => (
  <InputBase
    {...props}
    classes={{
      input: "search-input"
    }}
  />
))`
  && {
    width: 100%;
    height: 100%;
    color: ${theme.palette.common.white};
    & .search-input {
      width: 100%;
      height: calc(100% - ${theme.spacing.unit * 4}px);
      background-color: ${theme.palette.primary.dark};
      color: inherit;
      padding: ${theme.spacing.unit * 2}px;
    }
  }
`;

const StyledNavigationSearchWrapper = styled(Paper)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const AnimatedSearchInput = ({
  searchOpened,
  value,
  onChange,
  onSubmit,
  onClose
}) => (
  <Motion
    defaultStyle={{
      ypos: -110
    }}
    style={{
      ypos: spring(searchOpened ? 0 : -110, {
        stiffness: 170,
        damping: 15
      })
    }}
  >
    {({ ypos }) => (
      <StyledNavigationSearchWrapper
        square
        style={{
          transform: `translateY(${ypos}%)`
        }}
        method="get"
        onSubmit={onSubmit}
        autoComplete="off"
        component="form"
      >
        <StyledNavigationSearchInput
          placeholder="Type your query and hit Enter..."
          name="query"
          value={value}
          onChange={onChange}
        />
        <StyledNavigationButtonWrapper>
          <IconButton color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </StyledNavigationButtonWrapper>
      </StyledNavigationSearchWrapper>
    )}
  </Motion>
);
export default AnimatedSearchInput;
