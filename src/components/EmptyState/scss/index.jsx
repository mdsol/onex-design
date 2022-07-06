import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../Buttons/scss';
import Patient from './Images/Patient';
import Patients from './Images/Patients';
import Study from './Images/Study';
import QTL from './Images/QTL';

const VariantTypeEnum = {
  SECTION: 'section',
  CARD: 'card',
};

const ImgVariants = {
  patient: <Patient />,
  patients: <Patients />,
  qtl: <QTL />,
  study: <Study />,
};

const EmptyState = ({
  className,
  variant,
  img,
  defaultImgVariant,
  title,
  subtitle,
  hasActionBtn,
  btnTitle,
  btnLeadingIcon,
  onClick,
  dataTestId,
}) => {
  const classes = classNames('onex-empty-state', {
    [className]: className,
    'onex-empty-state--section': variant === VariantTypeEnum.SECTION,
    'onex-empty-state--card': variant === VariantTypeEnum.CARD,
  });

  return (
    <div className={classes} data-test-id={dataTestId}>
      <div className="onex-empty-state__img">{img || ImgVariants[defaultImgVariant]}</div>
      {title && <span className="onex-empty-state__title">{title}</span>}
      {subtitle && <span className="onex-empty-state__subtitle">{subtitle}</span>}
      {hasActionBtn && (
        <div className="onex-empty-state__actions">
          <Button variant="secondary" leadingIcon={btnLeadingIcon} size="sm" onClick={onClick}>
            {btnTitle}
          </Button>
        </div>
      )}
    </div>
  );
};

EmptyState.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf([...Object.values(VariantTypeEnum)]),
  img: PropTypes.node,
  defaultImgVariant: PropTypes.oneOf([...Object.keys(ImgVariants)]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  hasActionBtn: PropTypes.bool,
  btnTitle: PropTypes.string,
  btnLeadingIcon: PropTypes.node,
  onClick: PropTypes.func,
  dataTestId: PropTypes.string,
};

EmptyState.defaultProps = {
  className: undefined,
  variant: 'card',
  img: undefined,
  defaultImgVariant: 'patient',
  title: undefined,
  subtitle: undefined,
  hasActionBtn: false,
  btnTitle: undefined,
  onClick: undefined,
  btnLeadingIcon: undefined,
  dataTestId: undefined,
};

export default EmptyState;
