import PropTypes from 'prop-types';
import { Card as ReactCard } from 'react-bootstrap';
import classNames from 'classnames';
import Icon from '../../Icon/scss';

import Button from '../../Buttons/scss';
import Typography from '../../Typography/scss';
import Dropdown from '../../Dropdown/scss';
import Badge from '../../Badge/scss';

const CardAction = ({ titleActionVariant, dropdownItems, actionHeaderName, onHeaderAction }) => {
  switch (titleActionVariant) {
    case 'more': {
      return (
        <Dropdown
          variant="tertiary"
          id="tertiary-icon-dropdown-sm"
          items={dropdownItems}
          size="sm"
          buttonStyle="icon"
          align="end"
          title={<Icon>more_vert</Icon>}
        />
      );
    }
    case 'button': {
      return (
        <Button variant="tertiary" onClick={onHeaderAction} size="sm">
          {actionHeaderName}
        </Button>
      );
    }
    default: {
      return null;
    }
  }
};

const Card = ({
  children,
  onHeaderAction,
  actionLinkName,
  actionHeaderName,
  showActionBar,
  showTitleBar,
  className,
  dropdownItems,
  variant,
  titleActionVariant,
  link,
  badgeContent,
  title,
  subtitle,
  dataTestId,
  ...props
}) => {
  const classes = classNames('onex-card', `onex-card--${variant}`, {
    [className]: className,
  });

  return (
    <ReactCard {...props} className={classes} data-test-id={dataTestId}>
      <ReactCard.Header>
        {showTitleBar && (
          <div className="onex-card__title-block">
            <div className="onex-card__title-row">
              <div className="onex-card__title-col">
                {title && <Typography variant="h4">{title}</Typography>}
                {badgeContent && <Badge type="default">{badgeContent}</Badge>}
              </div>
              <CardAction
                titleActionVariant={titleActionVariant}
                dropdownItems={dropdownItems}
                actionHeaderName={actionHeaderName}
                onHeaderAction={onHeaderAction}
              />
            </div>
            {subtitle && (
              <Typography className="onex-card__subtitle" variant="label">
                {subtitle}
              </Typography>
            )}
          </div>
        )}
      </ReactCard.Header>
      <ReactCard.Body>{children}</ReactCard.Body>
      <ReactCard.Footer>
        {showActionBar && (
          <div className="onex-card__action-block">
            <Typography variant="label" href={link}>
              {actionLinkName}
            </Typography>
          </div>
        )}
      </ReactCard.Footer>
    </ReactCard>
  );
};

const optionType = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
});

const dropdownItems = PropTypes.shape({
  title: PropTypes.string.isRequired,
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hasDividerAfter: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  href: PropTypes.string,
});

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onHeaderAction: PropTypes.func,
  actionLinkName: PropTypes.string,
  actionHeaderName: PropTypes.string,
  showActionBar: PropTypes.bool,
  showTitleBar: PropTypes.bool,
  dropdownItems: PropTypes.arrayOf(dropdownItems),
  variant: PropTypes.oneOf(['default', 'info']),
  titleActionVariant: PropTypes.oneOf(['more', 'button', 'select', 'none']),
  link: PropTypes.string,
  badgeContent: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  dataTestId: PropTypes.string,
};

Card.defaultProps = {
  className: undefined,
  children: '',
  onHeaderAction: undefined,
  actionLinkName: '',
  actionHeaderName: '',
  showActionBar: false,
  showTitleBar: false,
  dropdownItems: [],
  variant: 'default',
  titleActionVariant: 'more',
  link: '#',
  badgeContent: '',
  title: '',
  subtitle: '',
  dataTestId: undefined,
};

CardAction.propTypes = {
  titleActionVariant: PropTypes.oneOf(['more', 'button', 'select', 'none']),
  dropdownItems: PropTypes.arrayOf(dropdownItems),
  actionHeaderName: PropTypes.string,
  onHeaderAction: PropTypes.func,
};

CardAction.defaultProps = {
  titleActionVariant: 'more',
  dropdownItems: [],
  actionHeaderName: '',
  onHeaderAction: undefined,
};

export default Object.assign(Card, {
  Img: ReactCard.Img,
  Title: ReactCard.Title,
  Subtitle: ReactCard.Subtitle,
  Body: ReactCard.Body,
  Link: ReactCard.Link,
  Text: ReactCard.Text,
  Header: ReactCard.Header,
  Footer: ReactCard.Footer,
  Overlay: ReactCard.Overlay,
});
