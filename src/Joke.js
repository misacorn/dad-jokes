import React, { Component } from "react";

class Joke extends Component {
  state = {};
  render() {
    return (
      <div className="Joke">
        <div className="Joke-button">
          <i className="far fa-thumbs-up" />
          <span>{this.props.votes}</span>
          <i className="far fa-thumbs-down" />
        </div>
        <div className="Joke-text">{this.props.text}</div>
      </div>
    );
  }
}

export default Joke;
