import React, { Component } from "react";
import axios from "axios";

class JokeList extends Component {
  state = { jokes: [] };

  static defaultProps = {
    numJokesToGet: 10
  };

  async componentDidMount() {
    let jokeList = [];
    while (jokeList.length < this.props.numJokesToGet) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      jokeList.push(res.data.joke);
    }
    this.setState({ jokes: jokeList });
  }
  render() {
    return (
      <div className="JokeList">
        <h1>Dad Jokes</h1>
        <ul className="JokeList-joke">
          {this.state.jokes.map((joke, index) => (
            <li key={index}>{joke}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default JokeList;
