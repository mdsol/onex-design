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
    }, 400);

    if (styled) {
      const ComponentTooltip = React.lazy(() =>
        import(`../../components/Tooltip/styled/index.jsx`),
      );
      const ComponentButton = React.lazy(() => import(`../../components/Buttons/styled/index.jsx`));
      setDynamicTooltip(ComponentTooltip);
      return setDynamicButton(ComponentButton);
    }

    const ComponentTooltip = React.lazy(() => import(`../../components/Tooltip/scss/index.jsx`));
    const ComponentButton = React.lazy(() => import(`../../components/Buttons/scss/index.jsx`));
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
            <div style={{ marginLeft: '200px' }}>
              <DynamicTooltip
                id="success-tooltip"
                variant="success"
                tooltipChildren="Yo Reddit! What’s a small thing that anyone can do at nearly anytime to improve
                their mood and make them happier?"
                placement="bottom"
                trigger="click"
                show={showTooltip}
              >
                <DynamicButton>Tooltip</DynamicButton>
              </DynamicTooltip>
            </div>
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
