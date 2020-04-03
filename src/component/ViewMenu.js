import React, { Component } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GridIcon from "@material-ui/icons/ViewComfy";
import ListIcon from "@material-ui/icons/List";
// import "../Header.css";
import "./ViewMenu.css";


class ViewMenu extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.value = this.props.view;
    }
    
    handleChange = (e, newValue) => {
        this.value = newValue;
        this.props.onChange(newValue);
    }
    
    render() {
        return (
        <>
                <BottomNavigation
                value={this.value}
                onChange={this.handleChange}
                className="grideve"
                >
                    <BottomNavigationAction value="grid" label="Grid" icon={<GridIcon />}  />
                    <BottomNavigationAction value="list" label="List" icon={<ListIcon />} />
                    {/* <BottomNavigationAction value="map" label="Map" icon={<LocationOnIcon className="disabled" />} /> */}
                </BottomNavigation>
        </>
        );
    }
}
export default ViewMenu;
