import React, { useState, useEffect, Suspense } from 'react';
import PropTypes from 'prop-types';
import ErrorBoundary from '../../ErrorBoundary';

const Tooltip = ({ styled }) => {
  const [DynamicTooltip, setDynamicTooltip] = useState(null);
  const [DynamicButton, setDynamicButton] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTooltip(true);
    }, 1);

    if (styled) {
      const ComponentTooltip = React.lazy(() => import(`../../styled/Tooltip/index.jsx`));
      const ComponentButton = React.lazy(() => import(`../../styled/Buttons/index.jsx`));
      setDynamicTooltip(ComponentTooltip);
      return setDynamicButton(ComponentButton);
    }

    const ComponentTooltip = React.lazy(() => import(`../../components/Tooltip/index.jsx`));
    const ComponentButton = React.lazy(() => import(`../../components/Buttons/index.jsx`));
    setDynamicTooltip(ComponentTooltip);
    return setDynamicButton(ComponentButton);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        {DynamicTooltip && DynamicButton && (
          <>
            <DynamicTooltip
              id="default-tooltip"
              variant="default"
              tooltipChildren="Default tooltip"
              placement="bottom"
              trigger="click"
              show={showTooltip}
            >
              <DynamicButton>Tooltip default</DynamicButton>
            </DynamicTooltip>

            <DynamicTooltip
              id="success-tooltip"
              variant="success"
              tooltipChildren="Success tooltip"
              placement="bottom"
              trigger="click"
              show={showTooltip}
            >
              <DynamicButton>Tooltip success</DynamicButton>
            </DynamicTooltip>
            <DynamicTooltip
              id="warning-tooltip"
              variant="warning"
              tooltipChildren="Warning tooltip"
              placement="bottom"
              trigger="click"
              show={showTooltip}
            >
              <DynamicButton>Tooltip warning</DynamicButton>
            </DynamicTooltip>
            <DynamicTooltip
              id="error-tooltip"
              variant="error"
              tooltipChildren="Error tooltip"
              placement="bottom"
              trigger="click"
              show={showTooltip}
            >
              <DynamicButton>Tooltip error</DynamicButton>
            </DynamicTooltip>
            <DynamicTooltip
              id="info-tooltip"
              variant="info"
              tooltipChildren="Info tooltip"
              placement="bottom"
              trigger="click"
              show={showTooltip}
            >
              <DynamicButton>Tooltip info</DynamicButton>
            </DynamicTooltip>
          </>
        )}
      </ErrorBoundary>
    </Suspense>
  );
};

Tooltip.propTypes = {
  styled: PropTypes.bool,
};

Tooltip.defaultProps = {
  styled: false,
};

export default Tooltip;
