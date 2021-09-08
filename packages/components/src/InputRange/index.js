import React from 'react';
import PropTypes from 'prop-types';

const InputRange = (props) => {
  const {
    className,
    style,
    vertical,
    thumbType,
    value,
    min,
    max,
    step,
    disabled,
    onChange,
    beginLabel,
    endLabel,
    startLabels,
    tickCount,
    largeTickCount,
    endLabels,
  } = props;

  return (
    <div
      className={`d-flex input-range-wrapper ${className || ''} ${
        vertical ? 'vertical' : ''
      } thumb-${thumbType} ${largeTickCount ? 'large-ticks' : ''}`}
      style={style}
    >
      <div className={`begin-label${beginLabel ? ' has-content' : ''}`}>
        <span>{beginLabel}</span>
      </div>
      <div className="range-wrapper d-flex">
        <div
          className={`start-labels labels${
            startLabels.length ? ' has-content' : ''
          }`}
        >
          {startLabels.map((label) => (
            <div key={`label:${label}`} className="label">
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="input-wrapper d-flex flex-column position-relative">
          <input
            type="range"
            className="form-range"
            step={step}
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            disabled={disabled} />
          {/* <Form.Control
            type="range"
            step={step}
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            disabled={disabled}
          /> */}
          {tickCount ? (
            <div className="ticks minor-ticks d-flex flex-grow-1 position-absolute justify-content-between">
              {Array(parseInt(tickCount, 10))
                .fill(1)
                .map((tick, index) => (
                  <div
                    key={`tick:${index.toString()}`}
                    className="d-flex tick"
                  />
                ))}
            </div>
          ) : null}
          {largeTickCount ? (
            <div className="ticks major-ticks d-flex flex-grow-1 position-absolute justify-content-between">
              {Array(parseInt(largeTickCount, 10))
                .fill(1)
                .map((tick, index) => (
                  <div
                    key={`tick:${index.toString()}`}
                    className="d-flex tick"
                  />
                ))}
            </div>
          ) : null}
        </div>
        <div
          className={`end-labels labels${
            endLabels.length ? ' has-content' : ''
          }`}
        >
          {endLabels.map((label) => (
            <div key={`label:${label}`} className="label">
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`end-label${endLabel ? ' has-content' : ''}`}>
        <span>{endLabel}</span>
      </div>
    </div>
  );
};

InputRange.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  vertical: PropTypes.bool,
  thumbType: PropTypes.oneOf([
    'circle',
    'cross',
    'line',
    'arrow-start',
    'arrow-end',
  ]),
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  beginLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  startLabels: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.node, PropTypes.string])
  ),
  tickCount: PropTypes.number,
  largeTickCount: PropTypes.number,
  endLabels: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.node, PropTypes.string])
  ),
  endLabel: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

InputRange.defaultProps = {
  className: undefined,
  style: {},
  thumbType: 'circle',
  vertical: false,
  value: undefined,
  min: undefined,
  max: undefined,
  step: undefined,
  disabled: false,
  onChange: () => {},
  beginLabel: undefined,
  startLabels: [],
  tickCount: 0,
  largeTickCount: 0,
  endLabels: [],
  endLabel: undefined,
};

InputRange.displayName = 'InputRange';

export default InputRange;
