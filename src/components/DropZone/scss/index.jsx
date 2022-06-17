import { useDropzone } from 'react-dropzone';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../Icon/scss';
import Button from '../../Buttons/scss';
import FileComponent from './components/FileItem';

const Dropzone = ({ className, isInvalid, title, info, titleBtn, errorText }) => {
  const classes = classNames('onex-dropzone', {
    [className]: className,
  });

  const classesDropArea = classNames('onex-dropzone__area', {
    'onex-dropzone__area--error': isInvalid,
  });

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    disabled: true,
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
          <Button className="onex-dropzone__btn" size="sm">
            {titleBtn}
          </Button>
        )}
        {!isInvalid && info && <span className="onex-dropzone__info">{info}</span>}
      </div>
      <div className="onex-dropzone__files-area">
        <FileComponent fileTitle="File name" fileSize="350KB" isSuccess />
        {acceptedFiles.map((file) => (
          <FileComponent fileTitle={file.name} fileSize={file.size} />
        ))}
      </div>
    </div>
  );
};

export default Dropzone;

Dropzone.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  titleBtn: PropTypes.string,
  errorText: PropTypes.string,
  isInvalid: PropTypes.bool,
};

Dropzone.defaultProps = {
  className: undefined,
  title: 'Select files or drop them here',
  info: 'CSV, JSON, XLS up to 1 mb',
  titleBtn: 'Upload files',
  errorText: 'File type is not valid',
  isInvalid: false,
};
