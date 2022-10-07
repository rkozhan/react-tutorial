import React, { Component } from "react";
import './search-panel.css';

/* const SearchPanel = () => {
    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Search by notes"
        />
    )
}
export default SearchPanel; */


export default class SearchPanel extends Component {
    constructor (props) {
        super (props);
        this.state = {
            term: ''
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(e) {
        const term = e.target.value;
        this.setState({term: term});
        this.props.onUpdateSearch(term);
    }

    render () {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Search by notes"
                onChange={this.onUpdateSearch}
            />
        )
    }
}
