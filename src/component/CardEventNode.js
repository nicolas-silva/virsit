import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GoToIcon from "@material-ui/icons/ExitToApp";
import "./CardEventNode.css";

const useStyles = makeStyles({
  root: {
    width: 250,
    height: 320,
    backgroundColor: "#f5f5f5",
    alignContent: "flex-start",
    margin: 4
  },
  content:{
    maxHeight:270,
    textAlign: 'justify'
  },
  media: {
    height: 10,
    paddingTop: "50%", // 16:9,
    marginTop: "30"
  }
});

// function handleClick(url){
//   window.open(url, "_blank");
// }

export default function CardEventNode(props) {
  const classes = useStyles();
  const about = props.description.substring(0, 80) + "...";
  const titleEvent = props.name.concat(" - ", props.artist);
  // const virsturl = props.virsturl;
  
  if (props.view === "grid")
  {
    return (
      <Card className={classes.root} elevation={3}>
      {/* <CardActionArea className={classes.content}> */}
        <CardActionArea className={classes.content}>
          <CardMedia
            className={classes.media}
            image={require('../img/' + props.thumbnail)}
            // image={require(String('../img/' + 'nasa-logo.png'))}
            title={props.name}
          />
          <CardContent >
            <Typography
              className="CardTitle"
              gutterBottom
              variant="subtitle1"
              component="h2"
            >
              {titleEvent}
            </Typography>
            <Typography
              className="CardDescription"
              variant="caption"
              color="textSecondary"
              component="p"
              style={{ fontSize: "0.8rem" }}
            >
              {about}
            </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "flex-end"}}>
            <IconButton edge={false} aria-label="Go">
              <GoToIcon />
            </IconButton>
          </CardActions>
        </Card>
    );
  }    
}
