import React, { Component } from "react";
import styled from "styled-components";

const JokeContainer = styled.div`
  color: #282c34;
  button {
    border: none;
    padding: 1em;
    background: #282c34;
    color: white;
    margin: 10px;
    border-radius: 3px;
  }
`;

class Joke extends Component {
  state = {
    joke: "Thinking..."
  };

  fetchJoke = async () => {
    const res = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json"
      }
    });
    const { joke } = await res.json();
    this.setState({ joke });
  };

  componentDidMount() {
    this.fetchJoke();
  }

  render() {
    const { joke } = this.state;
    return (
      <JokeContainer>
        {joke && <p>{joke}</p>}
        <button onClick={this.fetchJoke}>Give me another one</button>
        <button onClick={() => this.props.triggerNextStep()}>Continue</button>
      </JokeContainer>
    );
  }
}

export default Joke;
