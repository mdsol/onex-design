import PropTypes from 'prop-types';
import { Card as ReactCard } from 'react-bootstrap';
import classNames from 'classnames';
import Icon from '../../Icon/scss';

import Button from '../../Buttons/scss';
import Typography from '../../Typography/scss';
import Dropdown from '../../Dropdown/scss';
import Badge from '../../Badge/scss';

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
}) => {
  const classes = classNames('onex-card', `onex-card--${variant}`, {
    [className]: className,
  });

  return (
    <ReactCard className={classes}>
      <ReactCard.Header>
        {showTitleBar && (
          <>
            <div className="title-block">
              <div>
                <Typography variant="h4">{title}</Typography>
                {variant === 'default' && <Typography variant="caption">{subtitle}</Typography>}
              </div>
              {variant === 'default' && <Badge type="default">{badgeContent}</Badge>}
            </div>
            {variant === 'default' && (
              <>
                {titleActionVariant === 'more' && (
                  <Dropdown
                    variant="tertiary"
                    id="tertiary-icon-dropdown-sm"
                    items={dropdownItems}
                    size="sm"
                    buttonStyle="icon"
                    title={<Icon>more_vert</Icon>}
                  />
                )}
                {titleActionVariant === 'button' && (
                  <Button variant="tertiary" onClick={onHeaderAction} size="md">
                    {actionHeaderName}
                  </Button>
                )}
              </>
            )}
          </>
        )}
      </ReactCard.Header>
      <ReactCard.Body>{children}</ReactCard.Body>
      <ReactCard.Footer>
        {showActionBar && (
          <Typography variant="label" href={link}>
            {actionLinkName}
          </Typography>
        )}
      </ReactCard.Footer>
    </ReactCard>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onHeaderAction: PropTypes.func,
  actionLinkName: PropTypes.string,
  actionHeaderName: PropTypes.string,
  showActionBar: PropTypes.bool,
  showTitleBar: PropTypes.bool,
  dropdownItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      hasDividerAfter: PropTypes.bool,
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      href: PropTypes.string,
    }),
  ),
  variant: PropTypes.string,
  titleActionVariant: PropTypes.string,
  link: PropTypes.string,
  badgeContent: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
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
};

export default Card;
