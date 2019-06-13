import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  getEmoji() {
    const { votes } = this.props;
    return votes >= 15
      ? "em em-rolling_on_the_floor_laughing"
      : votes >= 12
      ? "em em-laughing"
      : votes >= 9
      ? "em em-smiley"
      : votes >= 6
      ? "em em-slightly_smiling_face"
      : votes >= 3
      ? "em em-neutral_face"
      : votes >= 0
      ? "em em-confused"
      : "em em-angry";
  }

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
        <div className="Joke-laughing">
          <i className={this.getEmoji()} />
        </div>
      </div>
    );
  }
}

export default Joke;
