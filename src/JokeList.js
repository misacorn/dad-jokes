import React, { Component } from "react";
import axios from "axios";

class JokeList extends Component {
  // state = {};

  static defaultProps = {
    numJokesToGet: 10
  };

  async componenDidMount() {
    let res = await axios.get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application / json" }
    });
    console.log(res.data.joke);
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
