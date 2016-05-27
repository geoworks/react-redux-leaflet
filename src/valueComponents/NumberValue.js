import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

function valToText(val) {
  if (val === undefined) { return 'unset'; }
  return String(val);
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

class NumberValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newZoomText: '',
    };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSetClick = this.handleSetClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleTextChange(event) {
    this.setState({ newZoomText: event.target.value });
  }

  handleSetClick() {
    this.props.onValueChange(
      this.props.propName,
      textToVal(this.state.newZoomText)
    );
    this.setState({ newZoomText: '' });
  }

  handleResetClick() {
    this.props.onValueChange(
      this.props.propName,
      undefined
    );
  }

  render() {
    const {
      propName, propValue, type, required, possibleValues, onValueChange,
    } = this.props;

    let errorText;
    if (textToVal(this.state.newZoomText) === undefined &&
        this.state.newZoomText.length > 0) {
      errorText = 'Not a number';
    }

    return (
      <div>
        <Paper zDepth={0}>
          Current value: <strong>{valToText(propValue)}</strong>
        </Paper>
        <TextField
          hintText="New value"
          value={this.state.newZoomText}
          onChange={this.handleTextChange}
          errorText={errorText}
        />
        <Divider />
        <RaisedButton
          label="Set"
          primary
          onClick={this.handleSetClick}
          disabled={Boolean(errorText) || !this.state.newZoomText.length}
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

NumberValue.propTypes = {
  propName: PropTypes.string.isRequired,
  propValue: PropTypes.number,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  possibleValues: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onValueChange: PropTypes.func.isRequired,
};

export default NumberValue;
