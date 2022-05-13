import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import { MoreVertRounded, Star } from '@mui/icons-material';

import Button from '../../Buttons/scss';
import Typography from '../../Typography/scss';
import Dropdown from '../../Dropdown/scss';

const CustomCard = ({
  children,
  onActionButton,
  actionName,
  showActionBar,
  showTitleBar,
  className,
  dropdownItems,
  variant,
}) => {
  const classes = classNames('onex-card', `onex-card--${variant}`, {
    [className]: className,
  });

  return (
    <Card className={classes}>
      {showTitleBar && (
        <Card.Header closeButton>
          <Typography variant="h4">Card heading</Typography>
          {variant === 'default' && (
            <Dropdown
              variant="tertiary"
              id="tertiary-icon-dropdown-sm"
              items={dropdownItems}
              size="sm"
              buttonStyle="icon"
              title={<MoreVertRounded />}
            />
          )}
        </Card.Header>
      )}
      <Card.Body>{children}</Card.Body>
      <Card.Footer>
        {showActionBar && (
          <Button variant="tertiary" onClick={onActionButton} size="sm">
            <Star />
            {actionName}
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
};

CustomCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onActionButton: PropTypes.func,
  actionName: PropTypes.string,
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
};

CustomCard.defaultProps = {
  className: undefined,
  children: '',
  onActionButton: undefined,
  actionName: '',
  showActionBar: false,
  showTitleBar: false,
  dropdownItems: [],
  variant: 'default',
};

export default CustomCard;
