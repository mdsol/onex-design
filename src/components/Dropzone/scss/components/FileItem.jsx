import PropTypes from 'prop-types';
import Icon from '../../../Icon/scss';
import ProgressBar from '../../../ProgressBar/scss';
import Button from '../../../Buttons/scss';

const FileComponent = ({
  name,
  size,
  progressNumber,
  isSuccess,
  isInvalid,
  errorMessage,
  successMessage,
  isLoading,
  buttonProps,
  progressProps,
  onCancel,
  onDelete,
  onReload,
}) => (
  <div className="onex-dropzone__file">
    <div className="onex-dropzone__file-icon">
      <Icon>attach_file</Icon>
    </div>
    <div className="onex-dropzone__file-body">
      {name && <span className="onex-dropzone__file-title">{name}</span>}
      <div className="onex-dropzone__file-process-block">
        {size && <span className="onex-dropzone__file-size">{size}</span>}
        {!isLoading && (isInvalid || isSuccess) && (
          <span className="onex-dropzone__file--status">
            {isInvalid && <Icon className="onex-dropzone__file-error-icon">warning</Icon>}
            {isSuccess && <Icon className="onex-dropzone__file-success-icon">check_circle</Icon>}
            {errorMessage && (
              <span className="onex-dropzone__file-error-message">{errorMessage}</span>
            )}
            {successMessage && (
              <span className="onex-dropzone__file-success-message">{successMessage}</span>
            )}
          </span>
        )}
        {!!progressNumber && isLoading && (
          <div className="onex-dropzone__file--progress">
            <div className="onex-dropzone__file--progress-info">{`${progressNumber}%`}</div>
            <div className="onex-dropzone__file--progress-bar">
              <ProgressBar
                className="onex-dropzone__file--progress"
                variant="info"
                now={progressNumber}
                {...progressProps}
              />
            </div>
          </div>
        )}
      </div>
    </div>
    <div className="onex-dropzone__file-action">
      {!isLoading && isInvalid && (
        <Button type="icon" variant="tertiary" size="sm" onClick={onReload} {...buttonProps}>
          <Icon>refresh</Icon>
        </Button>
      )}
      {!isSuccess && (
        <Button type="icon" variant="tertiary" size="sm" onClick={onCancel} {...buttonProps}>
          <Icon>close</Icon>
        </Button>
      )}
      {!isLoading && isSuccess && (
        <Button type="icon" variant="tertiary" size="sm" onClick={onDelete} {...buttonProps}>
          <Icon>delete_outline</Icon>
        </Button>
      )}
    </div>
  </div>
);

export const FileComponentTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  progressNumber: PropTypes.number,
  isSuccess: PropTypes.bool,
  isInvalid: PropTypes.bool,
  errorMessage: PropTypes.string,
  successMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  buttonTitle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  buttonProps: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  progressProps: PropTypes.object,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
  onReload: PropTypes.func,
};

FileComponent.propTypes = FileComponentTypes;

FileComponent.defaultProps = {
  name: undefined,
  size: undefined,
  progressNumber: 0,
  isSuccess: false,
  isInvalid: false,
  errorMessage: 'Upload failed',
  successMessage: 'Upload successful',
  isLoading: false,
  buttonTitle: undefined,
  buttonProps: {},
  progressProps: {},
  onCancel: () => {},
  onDelete: () => {},
  onReload: () => {},
};

export default FileComponent;
