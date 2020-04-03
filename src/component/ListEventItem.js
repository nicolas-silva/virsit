import React, { Component } from "react";
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToApp from '@material-ui/icons/ExitToApp';
import './ListEventItem.css';




// export default function ListView(props) {
  class ListView extends Component { 

    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.titleEvent = props.titleEvent;
      this.thumbnail = props.thumbnail;
      this.description = props.description;
      this.virsturl = props.virsturl;
    }

    handleClick(){
      console.log("Clicked");
      window.open(this.virsturl, "_blank");
    }

    render() {
      return (
        <ListItem>
              <ListItemAvatar>
                <Avatar 
                    alt={this.titleEvent}
                    src={this.thumbnail} >
                    {/* src={require('./gallery-grey.jpg')} > */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={this.titleEvent}
                secondary={this.description}
              />
              <ListItemSecondaryAction>
                <IconButton edge={false} aria-label="Go" onClick={this.handleClick}>
                  <ExitToApp />
                </IconButton>
              </ListItemSecondaryAction>
        </ListItem>
      );
    }
  }

  export default ListView;