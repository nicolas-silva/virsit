import React from "react";
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import List from '@material-ui/core/List';
import GridEventItem from "../component/CardEventNode";
import ListEventItem from '../component/ListEventItem';
import './EventView.css';



const EventView = ({spots, view}) => {

  if (view === "grid")
  {
    return (
      <GridList className="viewGrid" direction="column" justify="center" cols={1} >
          <Grid className="gridEvent" container direction="column">
          {
            spots.map((place) => {
              return(
              <GridEventItem 
                key={place.id}
                name={place.name}
                place={place.place}
                artist={place.artist}
                thumbnail={place.thumbnail}
                description={place.description}
                virsturl={place.virsturl}
                view="grid"
              />
              );
            })
          }
          </Grid>
        </GridList>
    );
  }
  else if(view === "list")
  {
    return(
        <GridList className="viewList" direction="row" justify="center" cols={1} >
          <Grid className="listEvent" container direction="row" justify="center" alignContent="space-between">
          <List dense={true} className="ListEventItem">
          {
            spots.map((place, i) => {
              return(
                  <ListEventItem 
                  key={place.id}
                  titleEvent={place.name}
                  thumbnail={place.thumbnail}
                  description={place.description}
                  virsturl={place.virsturl}
                  view="list"
                  />
              );
            })
          }
          </List>
          </Grid>
        </GridList>
    );
  }
}

export default EventView;
