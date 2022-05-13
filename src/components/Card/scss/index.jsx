import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import { MoreVertRounded } from '@mui/icons-material';

import Button from '../../Buttons/scss';
import Typography from '../../Typography/scss';
import Dropdown from '../../Dropdown/scss';
import Badge from '../../Badge/scss';

const CustomCard = ({
  children,
  onHeaderAction,
  actionLinkName,
  actionHeaderName,
  showActionBar,
  showTitleBar,
  className,
  dropdownItems,
  variant,
  titleAction,
  link,
  badgeContent,
}) => {
  const classes = classNames('onex-card', `onex-card--${variant}`, {
    [className]: className,
  });

  return (
    <Card className={classes}>
      <Card.Header closeButton>
        {showTitleBar && (
          <>
            <div className="title-block">
              <div>
                <Typography variant="h4">Card heading</Typography>
                {variant === 'default' && <Typography variant="caption">Subtitle</Typography>}
              </div>
              {variant === 'default' && <Badge type="default">{badgeContent}</Badge>}
            </div>
            {variant === 'default' && (
              <>
                {titleAction === 'more' && (
                  <Dropdown
                    variant="tertiary"
                    id="tertiary-icon-dropdown-sm"
                    items={dropdownItems}
                    size="sm"
                    buttonStyle="icon"
                    title={<MoreVertRounded />}
                  />
                )}
                {titleAction === 'button' && (
                  <Button variant="tertiary" onClick={onHeaderAction} size="sm">
                    {actionHeaderName}
                  </Button>
                )}
              </>
            )}
          </>
        )}
      </Card.Header>
      <Card.Body>{children}</Card.Body>
      <Card.Footer>
        {showActionBar && (
          <Typography variant="label" href={link}>
            {actionLinkName}
          </Typography>
        )}
      </Card.Footer>
    </Card>
  );
};

CustomCard.propTypes = {
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
  titleAction: PropTypes.string,
  link: PropTypes.string,
  badgeContent: PropTypes.string,
};

CustomCard.defaultProps = {
  className: undefined,
  children: '',
  onHeaderAction: undefined,
  actionLinkName: '',
  actionHeaderName: '',
  showActionBar: false,
  showTitleBar: false,
  dropdownItems: [],
  variant: 'default',
  titleAction: 'more',
  link: '#',
  badgeContent: '',
};

export default CustomCard;
