import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Badge from '../../../Badge';
import { ChevronDownIcon } from '../../../../icons';

const ExpansionPanelToggle = React.forwardRef((props, ref) => {
    const { children, avatar, badge, disabled, onClick } = props;

    return (
        <Button
            className="c-expansionPanel-toggle"
            disabled={disabled}
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            <div className="c-expansionPanel-toggle__children">
                {avatar}
                <div className="c-expansionPanel-toggle__title">{children}</div>
                {badge && (
                    <Badge size="sm" type="default">
                        {badge}
                    </Badge>
                )}
            </div>
            <ChevronDownIcon className="c-expansionPanel-toggle__icon" />
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
