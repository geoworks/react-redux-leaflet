import React, { PropTypes } from 'react';

const EventDisplay = ({ propName, propValue }) => (
  <div>
    TODO: Event Display for <strong>{propName}</strong> event.
    wasFired: {String(Boolean(propValue.highlighted))}
  </div>
);

EventDisplay.propTypes = {
  propName: PropTypes.string.isRequired,
  propValue: PropTypes.shape({
    highlighted: PropTypes.bool,
  }).isRequired,
};

export default EventDisplay;
