import React, { Component } from "react";
import { connect } from "react-redux";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import GridEventItem from "../components/CardEventNode";
import ListEventItem from "../components/ListEventItem";
import EventDetail from '../components/EventDetail';
import { VIEW } from "../constants/constants";
import "./EventView.css";

class EventView extends Component {
  render() {
    if (this.props.viewMode === VIEW.GRID) {
      return (
        <GridList
          className="viewGrid"
          direction="column"
          justify="center"
          cols={1}
        >
          <EventDetail />
          <Grid className="gridEvent" container direction="column">
            {this.props.filteredPlaces.map((place) => {
              return (
                <GridEventItem
                  event={place}
                  key={place.id}
                  name={place.name}
                  place={place.place}
                  artist={place.artist}
                  thumbnail={place.thumbnail}
                  description={place.description}
                  virsturl={place.virsturl}
                />
              );
            })}
          </Grid>
        </GridList>
      );
    } else {
      return (
        <GridList
          className="viewList"
          direction="row"
          justify="center"
          cols={1}
        >
          <EventDetail />
          <Grid
            className="listEvent"
            container
            direction="row"
            justify="center"
            alignContent="space-between"
          >
            <List dense={true} className="ListEventItem">
              {this.props.filteredPlaces.map((place, i) => {
                return (
                  <ListEventItem
                    event={place}
                    key={place.id}
                    titleEvent={place.name}
                    thumbnail={place.thumbnail}
                    description={place.description}
                    virsturl={place.virsturl}
                  />
                );
              })}
            </List>
          </Grid>
        </GridList>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  filteredPlaces: state.filteredPlaces,
  viewMode: state.viewMode,
});

export default connect(mapStateToProps)(EventView);
