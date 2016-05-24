import React, { PropTypes } from 'react';
// import { Map } from 'immutable';
import { Card, CardHeader, CardText } from 'material-ui/Card';

function decorateWithSearchTerm(text, searchTerm) {
  if (typeof searchTerm !== 'string' || searchTerm === '') {
    return (<span>{text}</span>);
  }
  const searchTermStartPos =
    text.toLowerCase().indexOf(searchTerm.toLowerCase())
  ;
  if (searchTermStartPos === -1) {
    return (<span>{text}</span>);
  }
  const searchTermEndPos = searchTermStartPos + searchTerm.length;
  const textBefore = text.slice(0, searchTermStartPos);
  const textSearch = text.slice(searchTermStartPos, searchTermEndPos);
  const textAfter = text.slice(searchTermEndPos, text.length);
  return (
    <span>
      {textBefore}
      <span style={{ backgroundColor: 'yellow' }} >
        {textSearch}
      </span>
      {textAfter}
    </span>
  );
}

const Controller = ({
  style,
  searchTerm,
  propName,
  descr,
  type,
  // required,
  // leafletName,
  // leafletDocUrl,
  // possibleValues,
  // defaultValue,
}) => (
  <Card style={style}>
    <CardHeader
      title={decorateWithSearchTerm(propName, searchTerm)}
      subtitle={descr}
    />
    <CardText>
      Type: <strong>{type.name}</strong>
      Some prop card text here.
    </CardText>
  </Card>
);

Controller.propTypes = {
  style: PropTypes.object,
  searchTerm: PropTypes.string,
  propName: PropTypes.string.isRequired,
  descr: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  leafletName: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  leafletDocUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  possibleValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  defaultValue: PropTypes.any,
};

export default Controller;
