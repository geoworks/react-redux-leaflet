import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Map } from 'immutable';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

function valToText(val) {
  if (!val) {
    return 'unset';
  }
  return `
    xMin: ${val.get('xMin')}, yMin: ${val.get('yMin')},${' '}
    xMax: ${val.get('xMax')}, yMax: ${val.get('yMax')}
  `.replace(/\n/g, '');
}

function textToVal(text) {
  let val;
  try {
    val = parseInt(text, 10);
  } catch (e) {
    return undefined;
  }
  if (isNaN(val)) { return undefined; }
  return val;
}

const emptyState = {
  newCenterX1str: '',
  newCenterY1str: '',
  newCenterX2str: '',
  newCenterY2str: '',
};

class MapX1Y1X2Y2Value extends Component {
  constructor(props) {
    super(props);
    this.state = emptyState;
    this.handleX1change = this.handleX1change.bind(this);
    this.handleY1change = this.handleY1change.bind(this);
    this.handleX2change = this.handleX2change.bind(this);
    this.handleY2change = this.handleY2change.bind(this);
    this.handleSetClick = this.handleSetClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleX1change(event) {
    this.setState({ newCenterX1str: event.target.value });
  }

  handleY1change(event) {
    this.setState({ newCenterY1str: event.target.value });
  }

  handleX2change(event) {
    this.setState({ newCenterX2str: event.target.value });
  }

  handleY2change(event) {
    this.setState({ newCenterY2str: event.target.value });
  }

  handleSetClick() {
    this.props.onValueChange(
      this.props.propName,
      new Map({
        xMin: Number(this.state.newCenterX1str),
        yMin: Number(this.state.newCenterY1str),
        xMax: Number(this.state.newCenterX2str),
        yMax: Number(this.state.newCenterY2str),
      })
    );
    this.setState(emptyState);
  }

  handleResetClick() {
    this.setState(emptyState);
  }

  render() {
    const {
      propValue,
    } = this.props;

    let xMinErrorText;
    let yMinErrorText;
    let xMaxErrorText;
    let yMaxErrorText;
    if (textToVal(this.state.newCenterX1str) === undefined &&
        this.state.newCenterX1str.length > 0) {
      xMinErrorText = 'Not a number';
    }
    if (textToVal(this.state.newCenterY1str) === undefined &&
        this.state.newCenterY1str.length > 0) {
      yMinErrorText = 'Not a number';
    }
    if (textToVal(this.state.newCenterX2str) === undefined &&
        this.state.newCenterX2str.length > 0) {
      xMaxErrorText = 'Not a number';
    }
    if (textToVal(this.state.newCenterY2str) === undefined &&
        this.state.newCenterY2str.length > 0) {
      yMaxErrorText = 'Not a number';
    }

    return (
      <div>
        <Paper zDepth={0}>
          Current value: <strong>{valToText(propValue)}</strong>
        </Paper>
        <TextField
          floatingLabelText="New xMin value"
          value={this.state.newCenterX1str}
          onChange={this.handleX1change}
          errorText={xMinErrorText}
        />
        <Divider />
        <TextField
          floatingLabelText="New yMin value"
          value={this.state.newCenterY1str}
          onChange={this.handleY1change}
          errorText={yMinErrorText}
        />
        <Divider />
        <TextField
          floatingLabelText="New xMax value"
          value={this.state.newCenterX2str}
          onChange={this.handleX2change}
          errorText={xMaxErrorText}
        />
        <Divider />
        <TextField
          floatingLabelText="New yMax value"
          value={this.state.newCenterY2str}
          onChange={this.handleY2change}
          errorText={yMaxErrorText}
        />
        <Divider />
        <RaisedButton
          label="Set"
          primary
          onClick={this.handleSetClick}
          disabled={
            (Boolean(xMinErrorText) || !this.state.newCenterX1str.length) ||
            (Boolean(yMinErrorText) || !this.state.newCenterY1str.length) ||
            (Boolean(xMaxErrorText) || !this.state.newCenterX2str.length) ||
            (Boolean(yMaxErrorText) || !this.state.newCenterY2str.length)
          }
        />
        <RaisedButton
          label="Reset"
          secondary
          onClick={this.handleResetClick}
        />
      </div>
    );
  }
}

MapX1Y1X2Y2Value.propTypes = {
  propName: PropTypes.string.isRequired,
  propValue: ImmutablePropTypes.contains({
    xMin: PropTypes.number,
    yMin: PropTypes.number,
    xMax: PropTypes.number,
    yMax: PropTypes.number,
  }),
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  possibleValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onValueChange: PropTypes.func.isRequired,
};

export default MapX1Y1X2Y2Value;
