import { memo } from 'react';
import { Form } from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/named
import { passwordVariantType, passwordHelpTextType } from '../propTypes';

const HelpText = memo(
  ({ helpText, errorMessage, isInvalid, disabled, passwordHelpText, passwordVariant, value }) => {
    if (isInvalid && !disabled) {
      return (
        <Form.Text className="onex-text-field__help onex-text-field__help--error">
          {errorMessage}
        </Form.Text>
      );
    }

    if (passwordVariant && !disabled && value) {
      return (
        <Form.Text
          className={classNames('onex-text-field__help onex-text-field__help--password', {
            'onex-text-field__help--password--strong': passwordVariant === 'strong',
            'onex-text-field__help--password--medium': passwordVariant === 'medium',
            'onex-text-field__help--password--weak': passwordVariant === 'weak',
          })}
        >
          {passwordHelpText[passwordVariant]}
        </Form.Text>
      );
    }

    if (helpText) {
      return <Form.Text className="onex-text-field__help">{helpText}</Form.Text>;
    }

    return null;
  },
);

HelpText.propTypes = {
  errorMessage: PropTypes.string,
  passwordVariant: passwordVariantType,
  passwordHelpText: passwordHelpTextType,
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  helpText: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HelpText.defaultProps = {
  errorMessage: undefined,
  passwordVariant: undefined,
  disabled: false,
  isInvalid: false,
  passwordHelpText: {},
  helpText: undefined,
  value: '',
};

export default HelpText;
