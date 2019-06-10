import React, { Component } from "react";
import axios from "axios";
import uuid from "uuidv4";

import Joke from "./Joke";
import "./JokeList.css";
import Icon from "./laughing-icon";

class JokeList extends Component {
  state = { jokes: [] };

  static defaultProps = {
    numJokesToGet: 10
  };

  async componentDidMount() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      jokes.push({ id: uuid(), text: res.data.joke, votes: 0 });
    }
    this.setState({ jokes });
  }

  handleVote = (id, delta) => {
    this.setState(prevState => ({
      jokes: prevState.jokes.map(j =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      )
    }));
  };

  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h3 className="JokeList-title">Dad Jokes</h3>
          <Icon />
          <button className="JokeList-getmore">New Jokes</button>
        </div>
        <ul className="JokeList-jokes">
          {this.state.jokes.map(j => (
            <Joke
              key={j.id}
              votes={j.votes}
              text={j.text}
              upvote={() => {
                this.handleVote(j.id, 1);
              }}
              downvote={() => {
                this.handleVote(j.id, -1);
              }}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default JokeList;
