import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GridIcon from "@material-ui/icons/ViewComfy";
import ListIcon from "@material-ui/icons/List";
import FilterList from "@material-ui/icons/FilterList";
// import "../Header.css";
import "./ViewMenu.css";
import { IconButton } from "@material-ui/core";

class ViewMenu extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.value = this.props.view;
    // this.anchorEl = null;
    // this.setAchorEl = null;
    // this.open = Boolean(this.anchorEl);
    // this.options = [
    //     'Any',
    //     'Zoo',
    //     'Aquarium',
    // ];
    // this.item_height = 48;
  }

  // handleClick = (event) => {
  //   this.setAnchorEl(event.currentTarget);
  //   console.log(this.open);
  // };

  // handleClose = () => {
  //   this.setAnchorEl(null);
  // };

  handleChange = (e, newValue) => {
    this.value = newValue;
    this.props.onChange(newValue);
  };

  render() {
    return (
      <>
        <BottomNavigation
          value={this.value}
          onChange={this.handleChange}
          className="grideve"
        >
          <BottomNavigationAction
            value="list"
            label="List"
            icon={<ListIcon />}
          />
          <BottomNavigationAction
            value="grid"
            label="Grid"
            icon={<GridIcon />}
          />
          {/* <BottomNavigationAction value="map" label="Map" icon={<LocationOnIcon className="disabled" />} /> */}
        </BottomNavigation>
        <IconButton
          aria-label="filter"
          aria-controls="long-menu"
          aria-haspopup="true"
          // onClick={this.handleClick.bind()}
        >
          <FilterList />
        </IconButton>
        {/* <Menu
          id="long-menu"
          anchorEl={this.anchorEl}
          keepMounted
          open={this.open}
          onClose={this.handleClose.bind()}
          PaperProps={{
            style: {
              maxHeight: this.item_height * 4.5,
              width: "20ch"
            }
          }}
        >
          {this.options.map(option => (
            <MenuItem
              key={option}
              selected={option === "Any"}
              onClick={this.handleClose.bind()}
            >
              {option}
            </MenuItem>
          ))}
        </Menu> */}
      </>
    );
  }
}
export default ViewMenu;
