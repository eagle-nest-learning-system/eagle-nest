import React, { Component } from 'react';
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
  `;

class ImageUploader extends Component {
  state = {
    uploadedImages: [],
  };

  handleChange = e => {
    const { uploadedImages } = this.state,
      target = e.target,
      files = [...target.files],
      pendingImages = files
        .map(image => ({
          info: image,
          url: URL.createObjectURL(image),
        }))
        .filter(image => uploadedImages.indexOf(image) === -1);

    this.setState(prevState => ({
      uploadedImages: [...prevState.uploadedImages, ...pendingImages],
    }));

    target.value = '';

    this.props.onChange(e);
  };

  handleRemove = image => () => {
    const { uploadedImages } = this.state,
      imageIndex = uploadedImages.indexOf(image);

    this.setState(prevState => ({
      uploadedImages: prevState.uploadedImages.filter((image, index) => index !== imageIndex),
    }));
  };

  handleRemoveAllClick = () => {
    this.setState({
      uploadedImages: [],
    });
  };

  render() {
    const { className, label, id, multiple, name, onBlur } = this.props,
      { uploadedImages } = this.state;

    return (
      <div className={className}>
        <Typography>{label}</Typography>
        <StyledPreviewerContainer>
          <Transition
            native
            keys={image => uuidv5(image.info.name, uuidv5.URL)}
            items={uploadedImages}
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
                src={image.url}
                image={image}
                onRemove={this.handleRemove}
                style={style}
              />
            )}
          </Transition>
        </StyledPreviewerContainer>
        <FileUploadButton
          id={id}
          multiple={multiple}
          name={name}
          onChange={this.handleChange}
          onBlur={onBlur}
        />
        {uploadedImages.length >= 2 && (
          <StyledRemoveAllButton onClick={this.handleRemoveAllClick}>
            Delete all
          </StyledRemoveAllButton>
        )}
      </div>
    );
  }
}

ImageUploader.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

ImageUploader.defaultProps = {
  multiple: false,
};

export default ImageUploader;
