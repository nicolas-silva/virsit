import React, { Component } from "react";
import { connect } from "react-redux";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { setSearchField, setFilteredPlaces, filterOff } from "../actions/actions";
import "./Search.css";

class Search extends Component {
  // export default function Search () {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.value = this.props.value;
  }

  componentDidUpdate() {
    console.log("Search: " + this.props.searchField);
  }

  handleChange = (e) => {
    this.props.setFilterOff();
    const filteredPlaces = this.props.places.filter(
      (place) =>
        place.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        place.description.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log("Places: " + this.props.places.length);
    this.props.setFilteredPlaces(filteredPlaces);
    this.props.setSearchField(e.target.value);
    console.log("filter applyed: " + this.props.filteredPlaces.length)
  };

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
            inputProps={{ "aria-label": "search" }}
            onChange={this.handleChange}
            value={this.props.searchField}
          />
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  searchField: state.searchField,
  places: state.places,
  filteredPlaces: state.filteredPlaces,
});
const mapDispatchToProps = (dispatch) => ({
  setSearchField: (text) => dispatch(setSearchField(text)),
  setFilteredPlaces: (places) => dispatch(setFilteredPlaces(places)),
  setFilterOff: () => dispatch(filterOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
