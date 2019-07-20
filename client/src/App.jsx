import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import PDFJSBackend from './backends/pdf.js';
import WebviewerBackend from './backends/webviewer';

// animations
import { useSpring, animated } from 'react-spring';

// pdf
import pdf from './pdfs/js.pdf';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Subjects from './components/Subjects';
import Features from './components/Features';
import WebviewerPDF from './components/WebviewerPDF';
import Letniki from './components/Letniki';

// pdf viewers
import PDFReactViewer from './components/PDFReactViewer';
import ExamplePDFViewer from './components/PDFReactViewer';
import Hitconcept from './components/Hitconcept';

// Strani
import Knjige from './pages/Knjige';
import Doma from './pages/Doma';
import Asistent from './pages/Asistent';

// Slikef
import matematika from './images/math1.jpg';
import slovenščina from './images/slovenščina1.jpg';
import kemija from './images/kemija.jpg';
import fizika from './images/physics.jpg';

// Ikone
import VoltaireAsistent from './icons/Voltaire_krog.png';
import Organizacija from './icons/Organizacija.png';
import Nastavitve from './icons/Nastavitve.png';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.viewer = React.createRef();
    this.docViewer = null;
    this.annotManager = null;
    this.instance = null;
  }

  state = {
    predmeti: [
      {
        ime: 'Matematika',
        slika: matematika,
        href: '/matematika/letniki',
        letniki: [
          '7. razred',
          '8. razred',
          '9. razred',
          '1. letnik',
          '2.letnik',
          '3. letnik'
        ]
      },
      {
        ime: 'Slovenščina',
        slika: slovenščina,
        href: '/slovenščina/letniki',
        letniki: [
          '7. razred',
          '8. razred',
          '9. razred',
          '1. letnik',
          '2.letnik',
          '3. letnik'
        ]
      },
      {
        ime: 'Kemija',
        slika: kemija,
        href: '/kemija/letniki',
        letniki: [
          '8. razred',
          '9. razred',
          '1. letnik',
          '2.letnik',
          '3. letnik'
        ]
      },
      {
        ime: 'Fizika',
        slika: fizika,
        href: '/fizika/letniki',
        letniki: [
          '8. razred',
          '9. razred',
          '1. letnik',
          '2.letnik',
          '3. letnik'
        ]
      }
    ],
    letniki: [
      '7. razred',
      '8. razred',
      '9. razred',
      '1. letnik',
      '2.letnik',
      '3. letnik'
    ],
    features: [
      {
        ime: 'Glasovni asistent Voltaire',
        ikona: VoltaireAsistent,
        link: '/asistent',
        opis:
          'Če imate na napravi mikrofon, izkoristite hitrost glasovnega modela in pospešite učenje'
      },
      {
        ime: 'Organizacija',
        ikona: Organizacija,
        link: '/organizacija',
        opis: 'Organizirajte mesece, dneve'
      },
      {
        ime: 'Nastavitve',
        ikona: Nastavitve,
        link: '/nastavitve',
        opis: 'Modificirajte svoj profil in aplikacijo v nastavitvah'
      }
    ],
    answer: ''
  };

  // getting answer
  askWolframApi = question => {
    const baseUrl = 'http://localhost:5000/api/wolfram';

    // Request parameters
    let params = new URLSearchParams();
    params.append('question', String(question));

    let request = {
      params: params
    };

    axios
      .get(
        // 'http://localhost:5000/api/wolfram?question=who%20is%20isaac%20newton'
        baseUrl,
        request
      )
      .then(response => {
        // save answer to App state
        this.setState({ answer: String(response.data) });
        document.querySelector('#voltaire').value = this.state.answer;
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Router>
        <Header />
        <div style={{ height: '100vh' }} className="App">
          <Switch>
            {/* Home page */}
            <Route
              path="/"
              exact
              render={props => (
                <div>
                  <Subjects
                    letniki={this.state.letniki}
                    predmeti={this.state.predmeti}
                  />
                  <Features features={this.state.features} />
                </div>
              )}
            />
            {/* Knjige */}
            <Route
              path="/books"
              exact
              render={props => (
                <div>
                  <Knjige />
                </div>
              )}
            />

            <Route
              path="/matematika/letniki"
              exact
              render={props => (
                <div>
                  <Letniki letniki={this.state.predmeti[0].letniki} />
                </div>
              )}
            />

            <Route
              path="/slovenščina/letniki"
              exact
              render={props => (
                <div>
                  <Letniki letniki={this.state.predmeti[1].letniki} />
                </div>
              )}
            />

            <Route
              path="/kemija/letniki"
              exact
              render={props => (
                <div>
                  <Letniki letniki={this.state.predmeti[2].letniki} />
                </div>
              )}
            />

            <Route
              path="/fizika/letniki"
              exact
              render={props => (
                <div>
                  <Letniki letniki={this.state.predmeti[3].letniki} />
                </div>
              )}
            />

            {/* Odprta knjiga- Webviewer */}
            <Route
              path="/webviewer"
              exact
              render={props => (
                <WebviewerPDF src={pdf} backend={WebviewerBackend} />
              )}
            />

            {/* mgr
            -pdf-viewer-react */}
            <Route path="/odprto" exact render={props => <Hitconcept />} />

            {/* Doma */}
            <Route
              path="/home"
              exact
              render={props => (
                <div>
                  <Doma />
                </div>
              )}
            />

            {/* Asistent */}
            <Route
              path="/asistent"
              exact
              render={props => (
                <div>
                  <Asistent getAnswer={this.askWolframApi} />
                </div>
              )}
            />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
