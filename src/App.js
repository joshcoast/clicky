import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MemCard from "./components/MemCard";
import cards from "./cards.json";

//Initial shuffle of cards on page load
cards.sort(function () {return 0.5 - Math.random()});

//keep track of picked/chosen cards
let picked =[];

class App extends Component {

  // Setting initial states 
  state = {
    cards,
    count: 0,
    topCount: 0,
    message: "Pick a pic!",
    shakeClass: "noShake",
    messageClass: "none"
  };

  pickCard = id => {
    // Shuffle the cards array
    const cards = this.state.cards.sort(function () {return 0.5 - Math.random()});
    // Check to see if they pick this card already
    if (picked.includes(id)) {
      // Reset picked array
      picked.length = 0;
      // Reset score, Message User, trigger shake animation 
      this.setState({ count: 0, message: "You guessed poorly!", shakeClass: "shake" });
    }else{
      picked.push(id);
      // Update the score, message, and shake animation class
      this.setState({ count: this.state.count + 1, message: "Good job!", shakeClass: "noShake" });
      // Update the Top Score if they just beat it.
      if (this.state.count === this.state.topCount) {
        this.setState({ topCount: this.state.topCount + 1 });
      }
    }
    // Place the cards
    this.setState({ cards });
  };

  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <ul>
            <li className="brand"><a href="/">Clicky Game</a></li>
            <li className={this.state.messageClass}>{this.state.message}</li>
            <li>Score: {this.state.count} | Top Score: {this.state.topCount}</li>
          </ul>
        </nav>
        <Header />
        <main className={`container ${this.state.shakeClass}`} >
          {this.state.cards.map(card => (
            <MemCard
              pickCard={this.pickCard}
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;