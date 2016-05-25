import React, { Component } from 'react';
import Controller from './Controller';
import liteProps from './liteProps';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ContentClear from 'material-ui/svg-icons/content/clear';
import Paper from 'material-ui/Paper';

class PropList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
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
        {
          filteredProps.map(pName => (
            <Controller
              style={{ marginBottom: 10 }}
              key={pName}
              propName={pName}
              searchTerm={this.state.searchTerm}
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

export default PropList;
