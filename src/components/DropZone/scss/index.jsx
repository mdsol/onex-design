import Dropzone from 'react-dropzone';
import React from 'react';
import PropTypes from 'prop-types';
import DropZoneAria from './components/DropZoneAria';

const MyDropzone = React.forwardRef(
  ({ className, isInvalid, title, info, titleBtn, errorText }, ref) => (
    <Dropzone ref={ref} noClick noKeyboard>
      {(dropzoneProps) => (
        <DropZoneAria
          className={className}
          isInvalid={isInvalid}
          title={title}
          info={info}
          titleBtn={titleBtn}
          errorText={errorText}
          {...dropzoneProps}
        />
      )}
    </Dropzone>
  ),
);

MyDropzone.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  titleBtn: PropTypes.string,
  errorText: PropTypes.string,
  isInvalid: PropTypes.bool,
};

MyDropzone.defaultProps = {
  className: undefined,
  title: 'Select files or drop them here',
  info: 'CSV, JSON, XLS up to 1 mb',
  titleBtn: 'Upload files',
  errorText: 'File type is not valid',
  isInvalid: false,
};

export default MyDropzone;
