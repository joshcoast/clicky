import React, { Component } from 'react';
import './App.css';
//-----
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MemCard from "./components/MemCard";
import cards from "./cards.json";
console.log(cards);



cards.sort(function () {
  return 0.5 - Math.random() 
});

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <main className="container">
          {cards.map(card => {
            return <MemCard {...card} />
          })}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
