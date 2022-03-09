import React, { useState, useEffect, Suspense } from 'react';
// eslint-disable-next-line no-unused-vars
import { PlusCircleFill } from 'react-bootstrap-icons';
import ErrorBoundary from '../ErrorBoundary';
import { Select, Check } from '../components';
import { config } from './components-config';

import './styles.scss';

const selectOptions = config.data.components.map((item) => ({
  value: item.name,
  label: item.name,
}));

const updateQueryStringParameter = (uri, key, value) => {
  const re = new RegExp(`([?&])${key}=.*?(&|$)`, 'i');
  const separator = uri.indexOf('?') !== -1 ? '&' : '?';
  if (uri.match(re)) {
    return uri.replace(re, `$1${key}=${value}$2`);
  }

  return `${uri + separator + key}=${value}`;
};

const ViewComponents = () => {
  const params = new URLSearchParams(window.location.search);
  const component = params.get('component');
  const isStyled = params.get('styled');
  const currentSelectOptions = selectOptions.filter((item) => item.value === component);

  const [styled, setStyled] = useState(isStyled === 'true');
  const [data, setData] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(currentSelectOptions);
  const [componentName, setComponentName] = useState('');
  const [DynamicComponent, setDynamicComponent] = useState(null);
  const [wrap, setWrap] = useState(null);

  useEffect(() => {
    if (selectedOptions.length) {
      const newUrl = updateQueryStringParameter(
        window.location.href,
        'component',
        selectedOptions[0].value,
      );
      window.history.pushState('', document.title, newUrl);
      setComponentName(selectedOptions[0].value);
    }
  }, [selectedOptions]);

  useEffect(() => {
    if (componentName) {
      const currentComponent = config.data.components.find((item) => item.name === componentName);
      const { additionalComponents } = currentComponent;
      const { wrapper } = currentComponent;
      if (currentComponent) setData(currentComponent.variants);
      setWrap(wrapper);
      /* eslint-disable-next-line */
      for (const additionalComponent of additionalComponents) {
        React.lazy(() => import(`../components/${additionalComponent}/index.jsx`));
      }
      if (styled) {
        const Component = React.lazy(() =>
          import(`../styled/${currentComponent.styledComponentName}/index.jsx`),
        );
        return setDynamicComponent(Component);
      }
      const Component = React.lazy(() =>
        import(`../components/${currentComponent.componentName}/index.jsx`),
      );
      return setDynamicComponent(Component);
    }
    return setDynamicComponent(null);
  }, [componentName, styled]);

  const handleSetStyledComponent = () => {
    const newUrl = updateQueryStringParameter(window.location.href, 'styled', !styled);
    window.history.pushState('', '', newUrl);
    setStyled(!styled);
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <div className="select-component-wrapper">
          <Select
            className="select-component"
            size="sm"
            selectedValues={selectedOptions}
            onSelect={(options) => setSelectedOptions(options)}
            options={selectOptions}
          />
          <Check
            id="check-isStyled"
            checked={styled}
            size="lg"
            type="checkbox"
            onChange={handleSetStyledComponent}
          >
            Styled
          </Check>
        </div>
        {DynamicComponent && (
          <div className="wrapper">
            <div className="header">{componentName}</div>
            <div className="component-block">
              {data.map((props, ind) =>
                wrap ? (
                  <div className={wrap}>
                    {/* eslint-disable-next-line react/no-array-index-key */}
                    <DynamicComponent key={ind} {...props} />
                  </div>
                ) : (
                  // eslint-disable-next-line react/no-array-index-key
                  <DynamicComponent key={ind} {...props} />
                ),
              )}
            </div>
          </div>
        )}
      </ErrorBoundary>
    </Suspense>
  );
};

export default ViewComponents;
