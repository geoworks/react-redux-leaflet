import React, { Component, PropTypes } from 'react';
import Controller from './Controller';
import liteProps from './liteProps';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import { setValue, unsetValue } from './actions/litePropActions';
import { reloadMap } from './actions/lmapCyclerActions';

const mapStateToProps = state => ({ liteProps: state.liteProps });

class PropList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleReloadClick = this.handleReloadClick.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  handleClearClick() {
    this.setState({
      searchTerm: '',
    });
  }

  handleValueChange(propName, newValue) {
    if (newValue === undefined) {
      this.props.dispatch(unsetValue(propName));
    } else {
      this.props.dispatch(setValue(propName, newValue));
    }
  }

  handleReloadClick() {
    this.props.dispatch(reloadMap());
  }

  render() {
    const filteredProps = Object.keys(liteProps).filter(pName =>
      pName.toLowerCase().indexOf(
        this.state.searchTerm.toLowerCase()
      ) > -1
    );

    return (
      <div>
        <TextField
          hintText="Search here"
          value={this.state.searchTerm}
          onChange={this.handleSearchChange}
        />
        <FlatButton
          icon={<ContentClear />}
          onClick={this.handleClearClick}
        />
        <FlatButton onClick={this.handleReloadClick}>
          Reload map
        </FlatButton>
        {
          filteredProps.map(pName => (
            <Controller
              style={{ marginBottom: 10 }}
              key={pName}
              propName={pName}
              searchTerm={this.state.searchTerm}
              onValueChange={this.handleValueChange}
              { ...liteProps[pName] }
            />
          ))
        }
        {
          filteredProps.length === 0 ?
            <Paper zDepth={0}>
              Nothing found for <strong>"{this.state.searchTerm}"</strong>
            </Paper>
            : null
        }
      </div>
    );
  }
}

PropList.propTypes = {
  liteProps: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default (connect(mapStateToProps))(PropList);
