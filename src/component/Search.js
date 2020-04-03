import React, { Component } from "react";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import './Search.css';


class Search extends Component { 
// export default function Search () {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.value = this.props.value;
    }
    
    handleChange = (e, newValue) => {
        this.props.onChange(e);
    }

    render() {
        return (
            <>
            <div className="search">
                <SearchIcon className="searchIcon" />
                <InputBase
                placeholder="Search…"
                classes={{
                    root: "inputRoot",
                    input: "inputInput",
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={this.handleChange}
                />
            </div>
            </>
        );
    }
}

export default Search;