import React, { Component } from "react";
import axios from "axios";

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
      jokes.push({ text: res.data.joke, votes: 0 });
    }
    this.setState({ jokes });
  }
  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h3 className="JokeList-title">Dad Jokes</h3>
          <Icon />
          <button className="JokeList-getmore">New Jokes</button>
        </div>
        <ul className="JokeList-jokes">
          {this.state.jokes.map((j, index) => (
            <Joke key={index} votes={j.votes} text={j.text} />
          ))}
        </ul>
      </div>
    );
  }
}

export default JokeList;
