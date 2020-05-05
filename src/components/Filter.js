import React, { Component } from "react";
import { connect } from "react-redux";
import FilterList from "@material-ui/icons/FilterList";
import { FILTERS } from "../constants/constants";
import filters from "../constants/filters";
import { filterOn, filterOff, selectFilter, setFilteredPlaces, setSearchField } from "../actions/actions";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import "./Filter.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      menuOpen: false,
      anchorEl: null,
      filterLable: 'Filter'
    };
    this.value = this.props.view;
  }
  componentDidMount() {
    console.log(this.props);
  }
  componentDidUpdate() {
      console.log('Filter: ' + this.props.filterActive);
  }
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget, menuOpen: true });
    this.props.setFilterOn();
  };
  handleChange = (e, newValue) => {
    this.value = newValue;
    this.props.onChange(newValue);
  };
  handleClose() {
    this.setState({ menuOpen: false });
    this.props.setFilterOff();
  }
  handleSelect(value, name) {
    this.props.selectFilter(value);
    const filteredPlaces = this.props.places.filter(
      (place) =>
        place.categories.includes(value)
    );
    this.props.setFilteredPlaces(filteredPlaces);
    this.setState({ menuOpen: false });
    if (value === FILTERS.ALL)
    {
      this.setState({filterLable: 'Filter'})
      this.props.setFilterOff();
    }
    else{
      this.props.setSearchField('');
      this.setState({filterLable: name})
    }

  }
  render() {
    return (
      <>
        <div>
          <IconButton
            aria-label="filter"
            aria-controls="simple-menu"
            aria-haspopup="true"
            color={this.props.filterActive ? "primary" : "default"}
            onClick={this.handleClick}
          >
            <label className="filterMenu">
              <FilterList />
              {this.props.filterActive ? (
                <span className="filterLabel"> {this.state.filterLable}</span>
              ) : (
                ""
              )}
            </label>
          </IconButton>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={this.state.menuOpen}
          onClose={this.handleClose}
        >
          {filters.map((filter) => {
            return (
              <MenuItem onClick={() => this.handleSelect(filter.value, filter.name)}>
                {filter.name}
              </MenuItem>
            );
          })}
        </Menu>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  filterActive: state.filterActive,
  places: state.places,
  filteredPlaces: state.filteredPlaces,
  searchField: state.searchField,
});
const mapDispatchToProps = (dispatch) => ({
  setFilterOn: () => dispatch(filterOn()),
  setFilterOff: () => dispatch(filterOff()),
  selectFilter: (filter) => dispatch(selectFilter(filter)),
  setSearchField: (text) => dispatch(setSearchField(text)),
  setFilteredPlaces: (places) => dispatch(setFilteredPlaces(places)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
