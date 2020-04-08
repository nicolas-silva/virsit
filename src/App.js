import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Header from "./component/Header";
import ViewMenu from "./component/ViewMenu";
import Search from "./component/Search";
import EventView from "./container/EventView";
import events from "./spots";

import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = 
    {
      spots: [],
      searchfield: "",
      view: "list"
    };
  }

  componentDidMount() {
    this.setState({ spots: events });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  filterPlacesByCategory = event => {
    console.log("filtered");
  }

  onViewChange(e){
    if (e !== 'filter') {
      this.setState({ view: e });
    }
    else{
      this.filterPlacesByCategory();
    }
  }

  render() {
    const filteredPlaces = 
      this.state.spots.filter(spot => 
        spot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())  ||
        spot.description.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
      );

    if (this.state.spots.length === 0) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <div className="App">
          <Header />
          {/* <EventView spots={filteredPlaces} view="grid" /> */}
          <EventView spots={filteredPlaces} view={this.state.view} />
          <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="footer"
                >
            <Search onChange={this.onSearchChange.bind(this)} />
            <ViewMenu view={this.state.view} onChange={this.onViewChange.bind(this)}/>
          </Grid>
        </div>
      );
    }
  }
}

export default App;
