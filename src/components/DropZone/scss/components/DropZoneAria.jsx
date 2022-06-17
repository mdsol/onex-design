import classNames from 'classnames';
import React from 'react';
import Icon from '../../../Icon/scss';
import Button from '../../../Buttons/scss';
import FileComponent from './FileItem';

const DropZoneAria = ({
  className,
  isInvalid,
  title,
  info,
  titleBtn,
  errorText,
  getRootProps,
  getInputProps,
  open,
  acceptedFiles,
  fileRejections,
}) => {
  const classes = classNames('onex-dropzone', {
    [className]: className,
  });

  const classesDropArea = classNames('onex-dropzone__area', {
    'onex-dropzone__area--error': isInvalid,
  });

  return (
    <div className={classes}>
      <div {...getRootProps({ className: classesDropArea })}>
        <input {...getInputProps()} />
        <div className="onex-dropzone__icon">
          <Icon className="onex-dropzone__icon-elem">
            {isInvalid ? 'error_outline' : 'cloud_upload'}
          </Icon>
        </div>
        <span className="onex-dropzone__title">{isInvalid ? errorText : title}</span>
        {!isInvalid && titleBtn && (
          <Button className="onex-dropzone__btn" size="sm" onClick={open}>
            {titleBtn}
          </Button>
        )}
        {!isInvalid && info && <span className="onex-dropzone__info">{info}</span>}
      </div>
      <div className="onex-dropzone__files-area">
        {acceptedFiles.map((file) => (
          <FileComponent fileTitle={file.name} fileSize={file.size} />
        ))}
      </div>
    </div>
  );
};

export default DropZoneAria;
