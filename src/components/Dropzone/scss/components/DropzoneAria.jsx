import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../../../Icon/scss';
import Button from '../../../Buttons/scss';
import FileComponent, { FileComponentTypes } from './FileItem';

const DropzoneAria = ({
  className,
  isInvalid,
  title,
  info,
  errorText,
  getRootProps,
  getInputProps,
  files,
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
        <Icon className="onex-dropzone__icon">{isInvalid ? 'error_outline' : 'cloud_upload'}</Icon>
        <span className="onex-dropzone__title">{isInvalid ? errorText : title}</span>
        {!isInvalid && info && <span className="onex-dropzone__info">{info}</span>}
      </div>
      <div className="onex-dropzone__files-area">
        {files.map((file) => (
          <FileComponent key={`${file.name}-${file.size}`} {...file} />
        ))}
      </div>
    </div>
  );
};

DropzoneAria.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  errorText: PropTypes.string,
  isInvalid: PropTypes.bool,
  files: PropTypes.arrayOf(FileComponentTypes),
  getRootProps: PropTypes.func,
  getInputProps: PropTypes.func,
};

DropzoneAria.defaultProps = {
  className: undefined,
  title: undefined,
  info: undefined,
  errorText: undefined,
  isInvalid: false,
  files: PropTypes.arrayOf(FileComponentTypes),
  getRootProps: undefined,
  getInputProps: undefined,
};

export default DropzoneAria;
