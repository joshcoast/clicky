import React, { Component } from 'react';
import './App.css';
//-----
import Header from "./components/Header";
import Footer from "./components/Footer";
import MemCard from "./components/MemCard";
import cards from "./cards.json";

//keep track of picked/chosen cards
let picked =[];


class App extends Component {

  // Setting this.state.cards to the cards json array
  state = {
    cards,
    count: 0
  };

  pickCard = id => {
    // Filter this.state.cards for cards with an id not equal to the id being removed
    const cards = this.state.cards.sort(function () {return 0.5 - Math.random()});
    // Set this.state.cards equal to the new cards array
    if (picked.includes(id)) {
      picked.length = 0;
      this.setState({ count: 0 });
      console.log('FAIL');
    }else{
      picked.push(id);
      this.setState({ count: this.state.count + 1 });
      console.log('okay');
    }
    console.log(picked);
    
    this.setState({ cards });
  };

  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <ul>
            <li className="brand"><a href="/">Clicky Game</a></li>
            <li>Click an image to begin!</li>
            <li>Score: {this.state.count} | Top Score: 0</li>
            <li></li>
          </ul>
        </nav>
        <Header />
        <main className="container">
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

// {cards.map(card => {
//   return <MemCard {...card} />
// })}
