import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

// pdfjs
import * as PDFJS from 'pdfjs-dist/webpack';
import { PDFViewer as pdfViewer } from 'pdfjs-dist/web/pdf_viewer';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Subjects from './components/Subjects';
import Features from './components/Features';
import PDFViewer from './components/PDFViewer';

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

  // getting books PDF
  getPDF = request => {
    const url = request;

    let pdfDoc = null,
      pageNum = 1,
      pageIsRendering = false,
      pageNumIsPending = null;

    const scale = 1.5,
      canvas = document.querySelelector('#pdf-render'),
      ctx = canvas.getContext('2d');

    // Render the page
    const renderPage = num => {};

    // Get document
    pdfViewer.getDocument(url).promise.then(pdfDoc_ => {
      pdfDoc = pdfDoc_;
      console.log(pdfDoc);
    });
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
                  <PDFViewer />
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
            <Route
              path="/asistent"
              exact
              render={props => <Asistent getAnswer={this.askWolframApi} />}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
