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
    console.log(this.state.jokes);
  }
  render() {
    return (
      <>
        <h1>Dad Jokes</h1>
      </>
    );
  }
}

export default JokeList;
