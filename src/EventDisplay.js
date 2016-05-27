import React, { PropTypes } from 'react';

const EventDisplay = ({ propName }) => (
  <div>
    TODO: Event Display for <strong>{propName}</strong> event.
  </div>
);

EventDisplay.propTypes = {
  propName: PropTypes.string.isRequired,
};

export default EventDisplay;
