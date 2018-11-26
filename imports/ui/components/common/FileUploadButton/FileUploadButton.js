import React from 'react';

import styled from 'styled-components';

import { Button } from '@material-ui/core';
import { CloudUpload as UploadIcon } from '@material-ui/icons';

import theme from '../../../theme';

const StyledFileUploadButton = styled.div`
  margin-top: ${theme.spacing.unit * 2}px;
`;

const StyledFileInput = styled.input.attrs({
  multiple: true,
  type: 'file',
  id: ({ buttonId }) => buttonId
})`
  display: none;
`;

const StyledIcon = styled(UploadIcon)`
  margin-right: ${theme.spacing.unit}px;
`;

const FileUploadButton = ({ buttonId }) =>
  <StyledFileUploadButton>
    <StyledFileInput buttonId={buttonId} />
    <label htmlFor={buttonId}>
      <Button 
        variant="contained" 
        component="span"
      >
        <StyledIcon />
        Upload
      </Button>
    </label>
  </StyledFileUploadButton>
;

export default FileUploadButton;