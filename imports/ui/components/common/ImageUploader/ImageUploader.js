import React, { Component } from "react";

import styled from "styled-components";

import FileUploadButton from "../FileUploadButton";
import ImagePreviewer from "./ImagePreviewer";

import { Typography, Button } from "@material-ui/core";
import theme from "../../../theme";

import { TransitionMotion, spring } from "react-motion";

import uuidv5 from "uuid/v5";

const StyledPreviewerContainer = styled.div`
  display: flex;
  margin: ${theme.spacing.unit}px 0;
  overflow: hidden;
  overflow-x: auto;
`;

const StyledRemoveAllButton = styled(Button)`
  && {
    margin-left: ${theme.spacing.unit * 2}px;
  }
`;

export default class ImageUploader extends Component {
  state = {
    uploadedImages: []
  };

  uploadImages = e => {
    const { uploadedImages } = this.state,
      files = [...e.target.files],
      pendingImages = files
        .map(image => ({
          info: image,
          url: URL.createObjectURL(image)
        }))
        .filter(image => uploadedImages.indexOf(image) === -1);

    this.setState(
      prevState => ({
        uploadedImages: [...prevState.uploadedImages, ...pendingImages]
      }),
      () => {
        console.log(this.state);
      }
    );

    this.props.onChange(e);
  };

  removeImage = image => () => {
    const { uploadedImages } = this.state,
      imageIndex = uploadedImages.indexOf(image);

    this.setState(
      prevState => ({
        uploadedImages: prevState.uploadedImages.filter(
          (image, index) => index !== imageIndex
        )
      }),
      () => {
        console.log(this.state);
      }
    );
  };

  removeAllImages = () => {
    this.setState({
      uploadedImages: []
    });
  };

  willLeave = () => {
    return {
      height: spring(0),
      opacity: spring(0)
    };
  };

  render() {
    const { className, label, id, multiple, name, onBlur } = this.props,
      { uploadedImages } = this.state;

    return (
      <div className={className}>
        <Typography>{label}</Typography>
        <StyledPreviewerContainer>
          <TransitionMotion
            willEnter={this.willEnter}
            willLeave={this.willLeave}
            styles={uploadedImages.map(image => ({
              key: uuidv5(image.info.name, uuidv5.URL),
              data: image,
              style: {
                height: spring(128),
                opacity: spring(1)
              }
            }))}
          >
            {interpolatedStyles => (
              <>
                {interpolatedStyles.map(({ key, data, style }) => (
                  <ImagePreviewer
                    src={data.url}
                    image={data}
                    onRemove={this.removeImage}
                    key={key}
                    style={style}
                  />
                ))}
              </>
            )}
          </TransitionMotion>
        </StyledPreviewerContainer>
        <FileUploadButton
          id={id}
          multiple={multiple}
          name={name}
          onChange={this.uploadImages}
          onBlur={onBlur}
        />
        {uploadedImages.length >= 2 && (
          <StyledRemoveAllButton onClick={this.removeAllImages}>
            Delete all
          </StyledRemoveAllButton>
        )}
      </div>
    );
  }
}
