import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';
import Badge from '../../../../Badge/scss';
import Icon from '../../../../Icon/scss';

const ExpansionPanelToggle = React.forwardRef((props, ref) => {
  const { children, avatar, badge, disabled, onClick } = props;

  return (
    <Button
      className="onex-expansionPanel__toggle"
      disabled={disabled}
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <div className="onex-expansionPanel__toggle__children">
        {avatar}
        <div className="onex-expansionPanel__toggle__title">{children}</div>
        {badge && (
          <Badge size="sm" type="default">
            {badge}
          </Badge>
        )}
      </div>
      <Icon className="onex-expansionPanel__toggle__icon">keyboard_arrow_down</Icon>
    </Button>
  );
});

ExpansionPanelToggle.propTypes = {
  children: PropTypes.node,
  badge: PropTypes.string,
  avatar: PropTypes.node,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

ExpansionPanelToggle.defaultProps = {
  children: undefined,
  badge: undefined,
  avatar: undefined,
  disabled: undefined,
  onClick: undefined,
};

export default ExpansionPanelToggle;
