import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { closeEvent } from "../actions/actions";
import "./EventDetail.css";

class EventDetail extends Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.goVisit = this.goVisit.bind(this);
  }
  handleClose = () => {
    this.props.closeEvent();
  };
  goVisit = () => {
    window.open(this.props.event.virsturl, "_blank");
  };
  render() {
    console.log(this.props.event);
    return (
      <div>
        <Dialog
          open={this.props.showEvent}
          onClose={this.handleClose}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle className="Title" id="scroll-dialog-title">
            {this.props.event.name}
          </DialogTitle>
          <DialogContent dividers={true}>
            <DialogContentText
              id="scroll-dialog-description"
              //   ref={descriptionElementRef}
              tabIndex={-1}
            >
              {this.props.event.artist ? (
                <p>
                  <span className="Topic">Artist: </span>{" "}
                  <span className="Text">{this.props.event.artist}</span>
                </p>
              ) : null}
              {this.props.event.place ? (
                <p>
                  <span className="Topic">Place: </span>{" "}
                  <span className="Text">{this.props.event.place}</span>
                </p>
              ) : null}
              {this.props.event.country ? (
                <p>
                  <span className="Topic">Country: </span>{" "}
                  <span className="Text">{this.props.event.country}</span>
                </p>
              ) : null}
              {this.props.event.country ? (
                <p>
                  <span className="Topic">Details: </span>{" "}
                  <span className="Text">{this.props.event.description}</span>
                </p>
              ) : null}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.goVisit} color="primary">
              Visit now
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.event,
  showEvent: state.showEvent,
});
const mapDispatchToProps = (dispatch) => ({
  closeEvent: () => dispatch(closeEvent()),
});
export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
