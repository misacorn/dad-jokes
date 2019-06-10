import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  state = {};
  render() {
    const { votes, upvote, downvote } = this.props;
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <i className="far fa-thumbs-up" onClick={upvote} />
          <span className="Joke-votes">{votes}</span>
          <i className="far fa-thumbs-down" onClick={downvote} />
        </div>
        <div className="Joke-text">{this.props.text}</div>
      </div>
    );
  }
}

export default Joke;
