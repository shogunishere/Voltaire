import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Subjects from './components/Subjects';

class App extends Component {
  state = {
    predmeti: ['Matematika', 'Slovenščina', 'Kemija', 'Fizika']
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Subjects predmeti={this.state.predmeti} />
        <Footer />
      </div>
    );
  }
}

export default App;
