import React, { Component } from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import ExitToApp from "@material-ui/icons/ExitToApp";
import "./ListEventItem.css";

// export default function ListView(props) {
class GoButton extends Component {
  constructor(props) {
    super(props);
    this.state = { url: props.url };
  }
  handleClick() {
    window.open(this.state.url, "_blank");
  }
  render() {
    return (
      <IconButton edge={false} aria-label="Go" onClick={this.handleClick.bind(this)}>
        <ExitToApp />
      </IconButton>
    );
  }
}

export default connect()(GoButton);
