import React, { Component } from 'react';
import './App.css';
//-----
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MemCard from "./components/MemCard";
import cards from "./cards.json";




class App extends Component {

  // Setting this.state.cards to the cards json array
  state = {
    cards
  };

  removeFriend = id => {
    // Filter this.state.cards for cards with an id not equal to the id being removed
    const cards = this.state.cards.filter(card => card.id !== id).sort(function () {return 0.5 - Math.random()});
    // Set this.state.cards equal to the new cards array
    this.setState({ cards });

  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <main className="container">
          {this.state.cards.map(card => (
            <MemCard
              removeFriend={this.removeFriend}
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

// {cards.map(card => {
//   return <MemCard {...card} />
// })}
