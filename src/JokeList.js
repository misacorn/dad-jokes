import React, { Component } from "react";
import axios from "axios";
import uuid from "uuidv4";

import Joke from "./Joke";
import "./JokeList.css";
import Icon from "./laughing-icon";

class JokeList extends Component {
  state = { jokes: [], loading: false };

  static defaultProps = {
    numJokesToGet: 10
  };

  componentDidMount() {
    this.getNewJokes();
  }

  getNewJokes = () => {
    this.setState({ loading: true });
    this.getJokes();
  };

  getJokes = async () => {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      jokes.push({ id: uuid(), text: res.data.joke, votes: 0 });
    }
    this.setState({ jokes, loading: false });
  };

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
          <h3 className="JokeList-title">Dad's Jokes</h3>
          <Icon />
          <button className="JokeList-getmore" onClick={this.getNewJokes}>
            New Jokes
          </button>
        </div>
        {this.state.loading ? (
          <div className="Joke-spinner">
            <i className="far fa-8x fa-laugh fa-spin" />
            <h1 className="JokeList-title">Loading...</h1>
          </div>
        ) : (
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
        )}
      </div>
    );
  }
}

export default JokeList;
