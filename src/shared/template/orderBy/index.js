import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as GithubActions } from 'store/ducks/github';

import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

import './orderBy.scss';

class OrderBy extends Component {

  static proptypes = {
    setOrderBy: PropTypes.func.isRequired,
    activeOrderBy: PropTypes.string.isRequired,
  }

  componentWillReceiveProps = props => {
    if (props) {
      this.setState({ filter: props.activeOrderBy });
    }
  }

  state = {
    filter: ''
  }

  handleChange = event => {
    const filter = event.target.value;
    this.setState({ filter });
    this.props.setOrderBy(filter);
  };

  render() {
    return (
      <div className="container-orderBy">
        <FormControl className="form-control-orderBy">
          <InputLabel htmlFor="orderBy">Order by...</InputLabel>
          <Select
            value={this.state.filter}
            onChange={this.handleChange}
            input={<Input name="orderBy" />}
          >
            <MenuItem value={'All'}>
            </MenuItem>
            <MenuItem value={'stargazers_count'}>Stars</MenuItem>
            <MenuItem value={'open_issues_count'}>Open Issues</MenuItem>
            <MenuItem value={'name'}>Repository Name</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
  }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators(GithubActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(OrderBy);