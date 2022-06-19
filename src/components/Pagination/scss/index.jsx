import { useState } from 'react';
import PropTypes from 'prop-types';
import { Pagination as ReactPagination } from 'react-bootstrap';
import classNames from 'classnames';
import Icon from '../../Icon/scss';

const Pagination = ({ size, className, onSetPage, dataTestId, items, ...accProps }) => {
  const [active, setActive] = useState(1);

  const paginationClassNames = classNames('onex-pagination', {
    [className]: className,
    'onex-pagination--lg': size === 'lg',
    'onex-pagination--sm': size === 'sm',
  });

  const handleClick = (page) => {
    onSetPage?.(page);
    setActive(page);
  };
  const handleNext = () => {
    setActive((prev) => prev + 1);
    onSetPage?.(active + 1);
  };
  const handlePrev = () => {
    setActive((prev) => prev - 1);
    onSetPage?.(active - 1);
  };

  return (
    <div>
      <ReactPagination {...accProps} data-test-id={dataTestId} className={paginationClassNames}>
        <button
          type="button"
          className={`${active === 1 ? `disabled` : ''}`}
          disabled={active === 1}
          onClick={handlePrev}
        >
          <Icon>arrow_back_ios</Icon>
        </button>
        {items.map((item) => (
          <ReactPagination.Item
            onClick={() => handleClick(item)}
            key={item}
            active={item === active}
          >
            {item}
          </ReactPagination.Item>
        ))}
        <button
          type="button"
          className={`${items.indexOf(active) === items.length - 1 ? `disabled` : ''}`}
          disabled={items.indexOf(active) === items.length - 1}
          onClick={handleNext}
        >
          <Icon>arrow_back_ios</Icon>
        </button>
      </ReactPagination>
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'sm']),
  onSetPage: PropTypes.func,
  dataTestId: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

Pagination.defaultProps = {
  className: undefined,
  size: 'sm',
  onSetPage: undefined,
  dataTestId: undefined,
  items: [],
};

export default Pagination;
