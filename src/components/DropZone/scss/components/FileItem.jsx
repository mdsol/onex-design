import PropTypes from 'prop-types';
import Icon from '../../../Icon/scss';
import ProgressBar from '../../../ProgressBar/scss';
import Button from '../../../Buttons/scss';

const FileComponent = ({
  fileTitle,
  fileSize,
  progressNumber,
  isSuccess,
  isInvalid,
  errorMessage,
  isLoading,
  buttonTitle,
  buttonProps,
  progressProps,
  onCancel,
  onDelete,
  onHandleClick,
}) => (
  <div className="onex-dropzone__file">
    <div className="onex-dropzone__file-icon">
      <Icon>attach_file</Icon>
    </div>
    <div className="onex-dropzone__file-body">
      {fileTitle && <span className="onex-dropzone__file-title">{fileTitle}</span>}
      <div className="onex-dropzone__file-process-block">
        {fileSize && <span className="onex-dropzone__file-size">{fileSize}</span>}
        {isSuccess && !isLoading && (
          <Icon className="onex-dropzone__file--success">check_circle</Icon>
        )}
        {isInvalid && !isLoading && (
          <span className="onex-dropzone__file--error">
            <Icon className="onex-dropzone__file-error-icon">warning</Icon>
            {errorMessage && (
              <span className="onex-dropzone__file-error-message">{errorMessage}</span>
            )}
          </span>
        )}
        {!!progressNumber && isLoading && (
          <ProgressBar
            className="onex-dropzone__file--progress"
            variant="info"
            now={progressNumber}
            {...progressProps}
          />
        )}
      </div>
    </div>
    <div className="onex-dropzone__file-action">
      {isLoading && (
        <Button type="icon" variant="tertiary" size="sm" onClick={onCancel} {...buttonProps}>
          <Icon>close</Icon>
        </Button>
      )}
      {!isLoading && isSuccess && (
        <Button type="icon" variant="tertiary" size="sm" onClick={onDelete} {...buttonProps}>
          <Icon>delete_outline</Icon>
        </Button>
      )}
      {!isLoading && isInvalid && (
        <Button variant="secondary" size="sm" onClick={onHandleClick} {...buttonProps}>
          {buttonTitle}
        </Button>
      )}
    </div>
  </div>
);

FileComponent.propTypes = {
  fileTitle: PropTypes.string,
  fileSize: PropTypes.string,
  progressNumber: PropTypes.number,
  isSuccess: PropTypes.bool,
  isInvalid: PropTypes.bool,
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  buttonTitle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  buttonProps: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  progressProps: PropTypes.object,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
  onHandleClick: PropTypes.func,
};

FileComponent.defaultProps = {
  fileTitle: '',
  fileSize: undefined,
  progressNumber: 0,
  isSuccess: false,
  isInvalid: false,
  errorMessage: undefined,
  isLoading: false,
  buttonTitle: 'Button',
  buttonProps: {},
  progressProps: {},
  onCancel: () => {},
  onDelete: () => {},
  onHandleClick: () => {},
};

export default FileComponent;
