import ReactDropzone from 'react-dropzone';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/named
import { FileComponentTypes } from './components/FileItem';
import DropzoneAria from './components/DropzoneAria';

const Dropzone = React.forwardRef(
  (
    {
      className,
      isInvalid,
      title,
      info,
      errorText,
      files,
      autoFocus,
      disabled,
      getFilesFromEvent,
      maxFiles,
      maxSize,
      minSize,
      multiple,
      noClick,
      noDrag,
      noDragEventsBubbling,
      noKeyboard,
      onDragEnter,
      onDragLeave,
      onDragOver,
      onDropAccepted,
      onDropRejected,
      onError,
      onDrop,
      onFileDialogCancel,
      onFileDialogOpen,
      preventDropOnDocument,
      useFsAccessApi,
      validator,
    },
    ref,
  ) => (
    <ReactDropzone
      ref={ref}
      noClick={noClick}
      noKeyboard={noKeyboard}
      autoFocus={autoFocus}
      disabled={disabled}
      onDrop={onDrop}
      getFilesFromEvent={getFilesFromEvent}
      maxFiles={maxFiles}
      maxSize={maxSize}
      minSize={minSize}
      multiple={multiple}
      noDrag={noDrag}
      noDragEventsBubbling={noDragEventsBubbling}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
      onDropAccepted={onDropAccepted}
      onDropRejected={onDropRejected}
      onError={onError}
      onFileDialogCancel={onFileDialogCancel}
      onFileDialogOpen={onFileDialogOpen}
      preventDropOnDocument={preventDropOnDocument}
      useFsAccessApi={useFsAccessApi}
      validator={validator}
    >
      {(dropzoneProps) => {
        useEffect(() => {
          if (ref?.current) {
            // eslint-disable-next-line no-param-reassign
            ref.current = {
              ...ref.current,
              ...dropzoneProps,
            };

            console.log('LOOK IT HERE>>>>', ref.current);
          }
        }, [dropzoneProps]);

        return (
          <DropzoneAria
            className={className}
            isInvalid={isInvalid}
            title={title}
            info={info}
            errorText={errorText}
            files={files}
            {...dropzoneProps}
          />
        );
      }}
    </ReactDropzone>
  ),
);

Dropzone.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  errorText: PropTypes.string,
  isInvalid: PropTypes.bool,
  files: PropTypes.arrayOf(FileComponentTypes),
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  getFilesFromEvent: PropTypes.func,
  maxFiles: PropTypes.number,
  maxSize: PropTypes.number,
  minSize: PropTypes.number,
  multiple: PropTypes.bool,
  noClick: PropTypes.bool,
  noDrag: PropTypes.bool,
  noDragEventsBubbling: PropTypes.bool,
  noKeyboard: PropTypes.bool,
  onDragEnter: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDragOver: PropTypes.func,
  onDropAccepted: PropTypes.func,
  onDropRejected: PropTypes.func,
  onError: PropTypes.func,
  onDrop: PropTypes.func,
  onFileDialogCancel: PropTypes.func,
  onFileDialogOpen: PropTypes.func,
  preventDropOnDocument: PropTypes.bool,
  useFsAccessApi: PropTypes.bool,
  validator: PropTypes.func,
};

Dropzone.defaultProps = {
  className: undefined,
  title: 'Click or drag file to this area to upload',
  info: 'CSV, JSON, XLS up to 1 MB only',
  errorText: 'Click or drag file to this area to upload',
  isInvalid: false,
  files: [],
  autoFocus: false,
  disabled: false,
  getFilesFromEvent: undefined,
  maxFiles: 0,
  maxSize: Infinity,
  minSize: 0,
  multiple: true,
  noClick: false,
  noDrag: false,
  noDragEventsBubbling: false,
  noKeyboard: false,
  onDragEnter: undefined,
  onDragLeave: undefined,
  onDragOver: undefined,
  onDropAccepted: undefined,
  onDropRejected: undefined,
  onError: undefined,
  onDrop: undefined,
  onFileDialogCancel: undefined,
  onFileDialogOpen: undefined,
  preventDropOnDocument: true,
  useFsAccessApi: true,
  validator: null,
};

export default Dropzone;
