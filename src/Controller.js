import React, { Component, PropTypes } from 'react';
// import { Map } from 'immutable';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import EventDisplay from './EventDisplay';
import ValueController from './ValueController';

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

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.handleExpandChange = this.handleExpandChange.bind(this);
  }

  handleExpandChange(newExpandedState) {
    this.setState({ expanded: newExpandedState });
  }

  render() {
    const {
      style,
      searchTerm,
      propName,
      propValue,
      descr,
      type,
      required,
      // leafletName,
      // leafletDocUrl,
      possibleValues,
      // defaultValue,
      onValueChange,
    } = this.props;

    const patchedStyle = Object.assign({}, style, {
      backgroundColor:
        propValue && propValue.isEvent && propValue.highlighted ?
          'red' : undefined,
      transition: 'background-color 0.5s ease',
    });

    return (
      <Card
        style={Object.assign(patchedStyle)}
      >
        <CardHeader
          title={decorateWithSearchTerm(propName, searchTerm)}
          subtitle={descr}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          {
            type === 'function' ?
              <EventDisplay
                propName={propName}
                propValue={propValue}
              /> :
              <ValueController
                propName={propName}
                propValue={propValue}
                type={type}
                required={required}
                possibleValues={possibleValues}
                onValueChange={onValueChange}
              />
          }
        </CardText>
      </Card>
    );
  }
}

Controller.propTypes = {
  style: PropTypes.object,
  searchTerm: PropTypes.string,
  propName: PropTypes.string.isRequired,
  propValue: PropTypes.any,
  descr: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  leafletName: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  leafletDocUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  possibleValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  defaultValue: PropTypes.any,
  onValueChange: PropTypes.func.isRequired,
};

export default Controller;
