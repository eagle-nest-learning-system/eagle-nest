import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paper, IconButton, InputBase } from '@material-ui/core';
import { CloseOutlined as CloseIcon } from '@material-ui/icons';
import theme from '../../theme';
import { animated } from 'react-spring';

const StyledNavigationButtonWrapper = styled.div`
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    padding-right: ${theme.spacing.unit * 2}px;
    display: flex;
    align-items: center;
  `,
  StyledNavigationSearchInput = styled(props => (
    <InputBase
      {...props}
      classes={{
        input: 'search-input',
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
  `,
  StyledNavigationSearchWrapper = animated(
    styled(Paper)`
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    `,
  ),
  AnimatedSearchInput = ({ style, value, onChange, onSubmit, onClose }) => (
    <StyledNavigationSearchWrapper
      square
      style={style}
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
  );

AnimatedSearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
};

export default AnimatedSearchInput;
