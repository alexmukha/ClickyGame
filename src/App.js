// import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0,
    results: ""
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    // alert(`Game Over :( \nscore: ${this.state.score}`);
    if (this.state.score === 12) {
      this.setState({ results: "" })
    } else {
      this.setState({ results: "WRONG!!!" })
    }
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if (cards[i].count === 0) {
          this.setState({ results: "" });
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            if (this.state.score === 12) {
              // alert("Winner");
              this.setState({ results: "CONGRADULATIONS!" });
              // this.gameOver();
            }
            console.log(this.state.score, o.id);
          });
          this.state.cards.sort(() => Math.random(o.id) - 0.5)
          return true;
        } else {

          this.setState({ results: "" });
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.cards and render a cardCard component for each card object
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore} results={this.state.results}>Click-o-motive</Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
