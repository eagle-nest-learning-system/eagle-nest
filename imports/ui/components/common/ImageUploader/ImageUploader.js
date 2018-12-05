import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FileUploadButton from '../FileUploadButton';
import AnimatedImagePreviewer from './AnimatedImagePreviewer';
import { Typography, Button } from '@material-ui/core';
import theme from '../../../theme';
import { Transition } from 'react-spring';
import uuidv5 from 'uuid/v5';

const StyledPreviewerContainer = styled.div`
    display: flex;
    margin: ${theme.spacing.unit}px -${theme.spacing.unit}px;
    overflow: hidden;
    overflow-x: auto;
  `,
  StyledRemoveAllButton = styled(Button)`
    && {
      margin-left: ${theme.spacing.unit * 2}px;
    }
  `,
  ImageUploader = ({
    className,
    label,
    id,
    multiple,
    name,
    value,
    onChange,
    onBlur,
    onRemove,
    onRemoveAll,
  }) => (
    <div className={className}>
      <Typography>{label}</Typography>
      <StyledPreviewerContainer>
        <Transition
          native
          keys={image => uuidv5(image.info.name, uuidv5.URL)}
          items={value}
          from={{
            height: 0,
            opacity: 0,
            margin: '0px 0px',
          }}
          enter={{
            height: 128,
            opacity: 1,
            margin: `0 ${theme.spacing.unit}px`,
          }}
          leave={{
            height: 0,
            opacity: 0,
            margin: '0px 0px',
          }}
        >
          {image => style => (
            <AnimatedImagePreviewer
              name={name}
              src={image.url}
              image={image}
              onRemove={onRemove}
              style={style}
            />
          )}
        </Transition>
      </StyledPreviewerContainer>
      <FileUploadButton
        id={id}
        multiple={multiple}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {value.length >= 2 && (
        <StyledRemoveAllButton onClick={onRemoveAll(name)}>Delete all</StyledRemoveAllButton>
      )}
    </div>
  );

ImageUploader.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onRemoveAll: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
};

ImageUploader.defaultProps = {
  multiple: false,
};

export default ImageUploader;
