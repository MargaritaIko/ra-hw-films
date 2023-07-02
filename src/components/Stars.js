import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star.js'

export default function Stars(props) {
  const { count } = props;
  if (!(Number(count) >= 1 && Number(count) <= 5)) {
    return null;
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {Array(count).fill().map((itemStar, idx) => <li key={idx}><Star /></li>)}
    </ul>
  );
}

Stars.defaultProps = {
  count: 0,
};

Stars.propTypes = {
  count: PropTypes.number,
};
