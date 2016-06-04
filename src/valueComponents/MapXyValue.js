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
  return `x: ${val.get('x')}, y: ${val.get('y')}`;
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
  newCenterXstr: '',
  newCenterYstr: '',
};

class MapXyValue extends Component {
  constructor(props) {
    super(props);
    this.state = emptyState;
    this.handleXchange = this.handleXchange.bind(this);
    this.handleYchange = this.handleYchange.bind(this);
    this.handleSetClick = this.handleSetClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleXchange(event) {
    this.setState({ newCenterXstr: event.target.value });
  }

  handleYchange(event) {
    this.setState({ newCenterYstr: event.target.value });
  }

  handleSetClick() {
    this.props.onValueChange(
      this.props.propName,
      new Map({
        x: Number(this.state.newCenterXstr),
        y: Number(this.state.newCenterYstr),
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

    let xErrorText;
    let yErrorText;
    if (textToVal(this.state.newCenterXstr) === undefined &&
        this.state.newCenterXstr.length > 0) {
      xErrorText = 'Not a number';
    }
    if (textToVal(this.state.newCenterYstr) === undefined &&
        this.state.newCenterYstr.length > 0) {
      yErrorText = 'Not a number';
    }

    return (
      <div>
        <Paper zDepth={0}>
          Current value: <strong>{valToText(propValue)}</strong>
        </Paper>
        <TextField
          floatingLabelText="New X value"
          value={this.state.newCenterXstr}
          onChange={this.handleXchange}
          errorText={xErrorText}
        />
        <Divider />
        <TextField
          floatingLabelText="New Y value"
          value={this.state.newCenterYstr}
          onChange={this.handleYchange}
          errorText={yErrorText}
        />
        <Divider />
        <RaisedButton
          label="Set"
          primary
          onClick={this.handleSetClick}
          disabled={
            (Boolean(xErrorText) || !this.state.newCenterXstr.length) ||
            (Boolean(yErrorText) || !this.state.newCenterYstr.length)
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

MapXyValue.propTypes = {
  propName: PropTypes.string.isRequired,
  propValue: ImmutablePropTypes.contains({
    x: PropTypes.number,
    y: PropTypes.number,
  }),
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  possibleValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onValueChange: PropTypes.func.isRequired,
};

export default MapXyValue;
