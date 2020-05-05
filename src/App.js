import React, { Component } from "react";
import { createStore } from "redux";
import reducer from "./reducers/reducer.js";
import { Provider } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Header";
import ViewMenu from "./components/ViewMenu";
import Search from "./components/Search";
import EventView from "./container/EventView";
import "./App.css";

let store = createStore(reducer);

class App extends Component {
  constructor() {
    super();
    this.state = {
      spots: [],
      searchfield: "",
      view: "list",
    };
  }

  componentDidMount() {
    this.setState({ spots: store.getState().places });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  filterPlacesByCategory = (event) => {
    console.log("filtered");
  };

  onViewChange(e) {
    if (e !== "filter") {
      this.setState({ view: e });
    } else {
      this.filterPlacesByCategory();
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          {/* <EventView spots={filteredPlaces} view="grid" /> */}
          <EventView/>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="footer"
          >
            <Search onChange={this.onSearchChange.bind(this)} />
            <ViewMenu
              view={this.state.view}
              onChange={this.onViewChange.bind(this)}
            />
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default App;
