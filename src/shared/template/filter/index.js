import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as GithubActions } from 'store/ducks/github';

import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';

import './filter.scss';

class Filter extends Component {

    static propTypes = {
        filter: PropTypes.string.isRequired,
        filters: PropTypes.arrayOf(PropTypes.shape).isRequired,
    }

    state = {
        filter: '',
        filters: [],
    }

    componentDidMount = () => {
        const { filters } = this.props;
        this.setState({ filters });
    }

    componentWillReceiveProps = props => {
        if (props) {
            this.setState({ filter: props.activeFilter, filters: props.filters });
        }
    }

    handleChange = event => {
        const filter = event.target.value;
        this.setState({ filter });
        this.props.setFilter(filter);
    };

    render() {
        const { filters } = this.state;
        return (
            <div className="container-filter">
                <FormControl className="form-control-filter">
                    <InputLabel htmlFor="filter">Filter by...</InputLabel>
                    <Select
                        value={this.state.filter}
                        onChange={this.handleChange}
                        input={<Input name="filter" />}
                    >
                        <MenuItem value={'All'}>
                        </MenuItem>
                        {
                            filters.map((filter) => (
                                <MenuItem key={filter} value={filter}>{filter}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </div>
        )
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators(GithubActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Filter);