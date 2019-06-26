import React, { Component } from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Subjects from './components/Subjects';
import Features from './components/Features';

// Slike
import matematika from './images/math.png';
import slovenščina from './images/slovenščina.png';
import kemija from './images/kemija.jpg';
import fizika from './images/physics.jpg';

// Ikone
import VoltaireAsistent from './icons/Voltaire.svg';
import Organizacija from './icons/Organizacija.svg';
import Nastavitve from './icons/Nastavitve.svg';

class App extends Component {
  state = {
    predmeti: [
      { ime: 'Matematika', slika: { matematika } },
      {
        ime: 'Slovenščina',
        slika: { slovenščina }
      },
      { ime: 'Kemija', slika: { kemija } },
      { ime: 'Fizika', slika: { fizika } }
    ],
    features: [
      { ime: 'Glasovni asistent Voltaire', ikona: { VoltaireAsistent } },
      { ime: 'Organizacija', ikona: { Organizacija } },
      { ime: 'Nastavitve', ikona: { Nastavitve } }
    ]
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Subjects predmeti={this.state.predmeti} />
        <Features features={this.state.features} />
        <Footer />
      </div>
    );
  }
}

export default App;
