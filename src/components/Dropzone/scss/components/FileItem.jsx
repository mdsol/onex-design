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
      {name && <span className="onex-dropzone__file-title">{name}</span>}
      <div className="onex-dropzone__file-process-block">
        {size && <span className="onex-dropzone__file-size">{size}</span>}
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
      {!isLoading && isInvalid && buttonTitle && (
        <Button variant="secondary" size="sm" onClick={onHandleClick} {...buttonProps}>
          {buttonTitle}
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

FileComponent.propTypes = FileComponentTypes;

FileComponent.defaultProps = {
  name: undefined,
  size: undefined,
  progressNumber: 0,
  isSuccess: false,
  isInvalid: false,
  errorMessage: undefined,
  isLoading: false,
  buttonTitle: undefined,
  buttonProps: {},
  progressProps: {},
  onCancel: () => {},
  onDelete: () => {},
  onHandleClick: () => {},
};

export default FileComponent;
