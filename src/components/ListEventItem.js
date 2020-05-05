import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import './ListEventItem.css';
import GoButton from "./GoButton";
import { openEvent } from '../actions/actions';




// export default function ListView(props) {
  class ListView extends Component { 

    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.onClick = this.onClick.bind(this);
      this.titleEvent = props.titleEvent;
      this.thumbnail = props.thumbnail;
      this.description = props.description;
      this.virsturl = props.virsturl;
      this.event = props.event;
    }
    onClick(){
      this.props.openEvent(this.event);
    }
    handleClick(){
      window.open(this.virsturl, "_blank");
    }

    render() {
      return (
        <ListItem button onClick={this.onClick}>
              <ListItemAvatar className="Avatar">
                <Avatar 
                    alt={this.titleEvent}
                    src={require('../img/' + this.thumbnail)} >
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={this.titleEvent}
                secondary={this.description}
                style={{marginRight: '6px', textAlign: 'justify'}}
              />
              <ListItemSecondaryAction className="goButton">
                <GoButton url = {this.virsturl} />
              </ListItemSecondaryAction>
        </ListItem>
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    openEvent: (event) => dispatch(openEvent(event)),
  });
  export default connect(null, mapDispatchToProps)(ListView);