import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import { MoreVertRounded, BarChart } from '@mui/icons-material';

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
}) => {
  const classes = classNames('onex-card', { [className]: className });

  return (
    <Card className={classes}>
      {showTitleBar && (
        <Card.Header closeButton>
          <Typography variant="h4">Card heading</Typography>
          <Dropdown
            variant="tertiary"
            id="tertiary-icon-dropdown-sm"
            items={dropdownItems}
            size="sm"
            buttonStyle="icon"
            title={<MoreVertRounded />}
          />
        </Card.Header>
      )}
      <Card.Body>{children}</Card.Body>
      {showActionBar && (
        <Card.Footer>
          <Button variant="tertiary" onClick={onActionButton} size="sm">
            <BarChart />
            {actionName}
          </Button>
        </Card.Footer>
      )}
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
};

CustomCard.defaultProps = {
  className: undefined,
  children: '',
  onActionButton: undefined,
  actionName: '',
  showActionBar: false,
  showTitleBar: false,
  dropdownItems: [],
};

export default CustomCard;
