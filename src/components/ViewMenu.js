import React, { Component } from "react";
import { connect } from "react-redux";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GridIcon from "@material-ui/icons/ViewComfy";
import ListIcon from "@material-ui/icons/List";
import { selectViewMode } from '../actions/actions';
import Filter from "./Filter";
import { VIEW } from '../constants/constants';
import "./ViewMenu.css";

class ViewMenu extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e, value) => {
    this.props.selectViewMode(value);
  };
  render() {
    return (
      <>
        <BottomNavigation
          value={this.props.viewMode}
          onChange={this.handleChange}
          className="grideve"
        >
          <BottomNavigationAction
            value={VIEW.LIST}
            label="List"
            icon={<ListIcon />}
          />
          <BottomNavigationAction
            value={VIEW.GRID}
            label="Grid"
            icon={<GridIcon />}
          />
        </BottomNavigation>
        <Filter />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  viewMode: state.viewMode,
});
const mapDispatchToProps = (dispatch) => ({
  selectViewMode: (view) => dispatch(selectViewMode(view)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewMenu);
