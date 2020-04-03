import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from "@material-ui/core/GridList";
import Grid from "@material-ui/core/Grid";
import Event from "../component/CardEventNode";
import List from '@material-ui/core/List';
import ListEventItem from '../component/ListEventItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));


const EventView = ({spots, view}) => {
  const classes = useStyles();

  if (view === "grid")
  {
    return (
      <div>
      <GridList className="gridList" direction="row" justify="center" cols={1}>
          <Grid className="EventView" container direction="row" justify="center">
          {
            spots.map((place) => {
              return(
              <Event 
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
        </div>
    );
  }
  else if(view === "list")
  {
    return(
      <div className={classes.paper}>
        <GridList direction="row" justify="center" cols={1}>
        <Grid className="EventView" container direction="row" justify="space-around">
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
      </div>
    );
  }
}

export default EventView;
