import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header"> 
          <h1 className="header-title">Pokemons Guide</h1>
        </header>
		<div className="content">
			{this.props.children}
		</div>
		<footer className="footer">
			<span>&copy; 2018 tinomar</span>
		</footer>
      </div>
    );
  }
}

export default App;
