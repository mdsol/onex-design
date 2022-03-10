import classNames from 'classnames';
import PropTypes from 'prop-types';

const defaultVariantMapping = {
  title: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body: 'p',
};

const Typography = ({
  className,
  children,
  align,
  variant,
  size,
  marginBottom,
  noWrap,
  link,
  paragraph,
  dataTestId,
}) => {
  const typographyClassNames = classNames(
    'onex-typography',
    `onex-typography--align-${align}`,
    `onex-typography--${variant}`,
    `onex-typography--${size}`,
    {
      [className]: className,
      'onex-typography--margin-bottom': marginBottom,
      'onex-typography--no-wrap': noWrap,
      'onex-typography--link': link,
    },
  );

  const TypographyComponent = (paragraph ? 'p' : defaultVariantMapping[variant]) || 'span';

  return (
    <TypographyComponent data-test-id={dataTestId} className={typographyClassNames}>
      {children}
    </TypographyComponent>
  );
};

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
  variant: PropTypes.oneOf(['title', 'h1', 'h2', 'h3', 'h4', 'h5', 'body', 'button', 'caption']),
  size: PropTypes.oneOf(['sm', 'lg']),
  marginBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  link: PropTypes.bool,
  paragraph: PropTypes.bool,
  dataTestId: PropTypes.string,
};

Typography.defaultProps = {
  className: undefined,
  children: undefined,
  align: 'inherit',
  variant: 'h1',
  size: 'lg',
  marginBottom: false,
  noWrap: false,
  link: false,
  paragraph: false,
  dataTestId: '',
};

export default Typography;
