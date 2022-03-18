import classNames from 'classnames';
import PropTypes from 'prop-types';

const defaultVariantMapping = {
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
  semiBold,
  marginBottom,
  noWrap,
  href,
  paragraph,
  uppercase,
  dataTestId,
}) => {
  const typographyClassNames = classNames(
    'onex-typography',
    `onex-typography--align-${align}`,
    `onex-typography--${variant}`,
    {
      [className]: className,
      'onex-typography--margin-bottom': marginBottom,
      'onex-typography--no-wrap': noWrap,
      'onex-typography--link': href,
      'onex-typography--semi-bold': semiBold,
      'onex-typography--uppercase': uppercase,
    },
  );

  const TypographyComponent = href
    ? 'a'
    : (paragraph ? 'p' : defaultVariantMapping[variant]) || 'span';

  return (
    <TypographyComponent data-test-id={dataTestId} className={typographyClassNames} href>
      {children}
    </TypographyComponent>
  );
};

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'body', 'label', 'caption']),
  semiBold: PropTypes.bool,
  marginBottom: PropTypes.bool,
  noWrap: PropTypes.bool,
  href: PropTypes.string,
  paragraph: PropTypes.bool,
  uppercase: PropTypes.bool,
  dataTestId: PropTypes.string,
};

Typography.defaultProps = {
  className: undefined,
  children: undefined,
  align: 'inherit',
  variant: 'h1',
  semiBold: false,
  marginBottom: false,
  noWrap: false,
  href: '',
  paragraph: false,
  uppercase: false,
  dataTestId: '',
};

export default Typography;
