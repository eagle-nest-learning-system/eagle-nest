import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { CloudUploadOutlined as CloudUploadIcon } from '@material-ui/icons';
import theme from '../../../theme';

const StyledFileInput = styled.input.attrs({
    type: 'file',
  })`
    display: none;
  `,
  StyledUploadIcon = styled(CloudUploadIcon)`
    margin-right: ${theme.spacing.unit}px;
  `,
  FileUploadButton = ({ id, multiple, name, onChange, onBlur }) => (
    <>
      <StyledFileInput
        id={id}
        multiple={multiple}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={id}>
        <Button variant="contained" component="span">
          <StyledUploadIcon />
          Upload
        </Button>
      </label>
    </>
  );

FileUploadButton.propTypes = {
  id: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

FileUploadButton.defaultProps = {
  multiple: false,
};

export default FileUploadButton;
