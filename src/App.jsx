import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Subjects from './components/Subjects';
import Features from './components/Features';

// Strani
import Knjige from './pages/Knjige';
import Doma from './pages/Doma';
import Asistent from './pages/Asistent';

// Slike
import matematika from './images/math.jpg';
import slovenščina from './images/slovenščina.jpg';
import kemija from './images/kemija.jpg';
import fizika from './images/physics.jpg';

// Ikone
import VoltaireAsistent from './icons/Voltaire_krog.png';
import Organizacija from './icons/Organizacija.png';
import Nastavitve from './icons/Nastavitve.png';

class App extends Component {
  state = {
    predmeti: [
      { ime: 'Matematika', slika: matematika },
      {
        ime: 'Slovenščina',
        slika: slovenščina
      },
      { ime: 'Kemija', slika: kemija },
      { ime: 'Fizika', slika: fizika }
    ],
    features: [
      {
        ime: 'Glasovni asistent Voltaire',
        ikona: VoltaireAsistent,
        opis:
          'Če imate na napravi mikrofon, izkoristite hitrost glasovnega modela in pospešite učenje'
      },
      {
        ime: 'Organizacija',
        ikona: Organizacija,
        opis: 'Organizirajte mesece, dneve'
      },
      {
        ime: 'Nastavitve',
        ikona: Nastavitve,
        opis: 'Modificirajte svoj profil in aplikacijo v nastavitvah'
      }
    ]
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            {/* Home page */}
            <Route
              path="/"
              exact
              render={props => (
                <div>
                  <Subjects predmeti={this.state.predmeti} />
                  <Features features={this.state.features} />
                </div>
              )}
            />
            {/* Knjige */}
            <Route path="/books" exact render={props => <Knjige />} />

            {/* Doma */}
            <Route path="/home" exact render={props => <Doma />} />

            {/* Asistent */}
            <Route path="/asistent" exact render={props => <Asistent />} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
