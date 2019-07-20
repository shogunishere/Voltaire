import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import PDFJSBackend from './backends/pdf.js';
import WebviewerBackend from './backends/webviewer';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Subjects from './components/Subjects';
import Features from './components/Features';
import WebviewerPDF from './components/WebviewerPDF';
import Letniki from './components/Letniki';

// pdf viewers
import PDFReactViewer from './components/PDFReactViewer';
import PDFReactViewer1 from './components/PDFReactViewer1';
import Hitconcept from './components/Hitconcept';
import PDF from './components/PDF';

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

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.viewer = React.createRef();
    this.docViewer = null;
    this.annotManager = null;
    this.instance = null;
  }

  componentDidMount() {
    window
      .WebViewer(
        {
          path: 'lib',
          initialDoc: 'files/webviewer-demo-annotated.pdf'
        },
        this.viewer.current
      )
      .then(instance => {
        // at this point, the viewer is 'ready'
        // call methods from instance, docViewer and annotManager as needed
        this.instance = instance;
        this.docViewer = instance.docViewer;
        this.annotManager = instance.annotManager;

        // you can also access major namespaces from the instance as follows:
        // var Tools = instance.Tools;
        // var Annotations = instance.Annotations;

        // now you can access APIs through `this.instance`
        this.instance.openElement('notesPanel');

        // or listen to events from the viewer element
        this.viewer.current.addEventListener('pageChanged', e => {
          const [pageNumber] = e.detail;
          console.log(`Current page is ${pageNumber}`);
        });

        // or from the docViewer instance
        this.docViewer.on('annotationsLoaded', () => {
          console.log('annotations loaded');
        });

        this.docViewer.on('documentLoaded', this.wvDocumentLoadedHandler);
      });
  }

  wvDocumentLoadedHandler = () => {
    // call methods relating to the loaded document
    const { Annotations } = this.instance;
    const rectangle = new Annotations.RectangleAnnotation();
    rectangle.PageNumber = 1;
    rectangle.X = 100;
    rectangle.Y = 100;
    rectangle.Width = 250;
    rectangle.Height = 250;
    rectangle.StrokeThickness = 5;
    rectangle.Author = this.annotManager.getCurrentUser();
    this.annotManager.addAnnotation(rectangle);
    this.annotManager.drawAnnotations(rectangle.PageNumber);
    // see https://www.pdftron.com/api/web/WebViewer.html for the full list of low-level APIs
  };

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

            {/* Odprta knjiga */}
            <Route
              path="/odprto"
              exact
              render={props => <WebviewerPDF backend={WebviewerBackend} />}
            />

            {/* Odprta knjiga */}
            <Route
              path="/odprto1"
              exact
              render={props => <div className="webviewer" ref={this.viewer} />}
            />

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

            <Route path="/fakepdf" exact render={props => <Hitconcept />} />

            <Route path="/pdf" exact render={props => <PDF />} />

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
