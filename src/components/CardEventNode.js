import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./CardEventNode.css";
import GoButton from "./GoButton";
import { openEvent } from '../actions/actions';

class CardEventNode extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.event = props.event;
    this.about = props.description.substring(0, 120) + "...";
    if (props.artist.length >= 40){
      this.artist = props.artist.substring(0, 37) + '...';
    }
    else{
      this.artist = props.artist;
    }
    if (props.artist === ''){
      this.titleEvent = props.name
    }
    else{
      this.titleEvent = props.name.concat(" - ", this.artist);
    }
    this.thumbnail = props.thumbnail;
    this.name = props.name;
    this.virsturl = props.virsturl;
  }
  onClick(){
    this.props.openEvent(this.event);
  }
  render(){
    return (
      <Card className="root" elevation={3}>
        <CardActionArea className="content" onClick={this.onClick}>
          <CardMedia
            className="media"
            image={require('../img/' + this.thumbnail)}
            title={this.name}
          />
          <CardContent >
            <Typography
              className="CardTitle"
              gutterBottom
              variant="subtitle1"
              component="h2"
            >
              {this.titleEvent}
            </Typography>
            <Typography
              className="CardDescription"
              variant="caption"
              color="textSecondary"
              component="p"
              style={{ fontSize: "0.8rem" }}
            >
              {this.about}
            </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions className="Action">
            <GoButton url={this.virsturl} />
          </CardActions>
        </Card>
    );
  }    
}
const mapDispatchToProps = (dispatch) => ({
  openEvent: (event) => dispatch(openEvent(event)),
});

export default connect(null, mapDispatchToProps)(CardEventNode);