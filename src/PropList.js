import React, { Component } from 'react';
import Controller from './Controller';
import liteProps from './liteProps';
import TextField from 'material-ui/TextField';

class PropList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <TextField
          hintText="Search here"
          value={this.state.searchTerm}
          onChange={this.handleSearchChange}
        />
        {
          Object.keys(liteProps)
            .filter(pName =>
              pName.toLowerCase().indexOf(
                this.state.searchTerm.toLowerCase()
              ) > -1)
            .map(pName => (
              <Controller
                style={{ marginBottom: 10 }}
                key={pName}
                propName={pName}
                searchTerm={this.state.searchTerm}
                { ...liteProps[pName] }
              />
            ))
        }
      </div>
    );
  }
}

export default PropList;
