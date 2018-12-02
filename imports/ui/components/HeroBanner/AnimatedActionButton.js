import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Fab } from '@material-ui/core';
import theme from '../../theme';
import { animated } from 'react-spring';
import Link from 'next/link';

const StyledButtonWrapper = styled.div`
    position: absolute;
    bottom: ${theme.spacing.unit * 3}px;
    right: 0;
    width: 100%;
  `,
  StyledButton = animated(
    styled(Fab)`
      && {
        min-width: 140px;
      }
    `,
  ),
  ActionButton = ({ style }) => (
    <StyledButtonWrapper>
      <Link href="/register">
        <StyledButton style={style} variant="extended" color="secondary">
          Join now!
        </StyledButton>
      </Link>
    </StyledButtonWrapper>
  );

ActionButton.propTypes = {
  style: PropTypes.object.isRequired,
};

export default ActionButton;
