import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import WebviewerBackend from './backends/webviewer';

// react-spring
import { Trail, Spring } from 'react-spring/renderprops';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

// Webviewer
import PDFViewer from './components/PDFViewer/PDFViewer';
import PDFJSBackend from './backends/pdfjs';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Subjects from './components/Subjects';
import Features from './components/Features';
import WebviewerPDF from './components/WebviewerPDF';
import Letniki from './components/Letniki';
import OKnjigi from './components/OKnjigi';
import Explore from './components/Explore';
import KreatorjiCarousel from './components/KreatorjiCarousel';
import KreatorMaterial from './components/KreatorMaterial';
import NavadenProfilKreatorji from './components/NavadenProfilKreatorji';
import Iskanje from './pages/Iskanje';
import Rezultati from './pages/Rezultati';
import NavadenProfilSkupine from './components/NavadenProfilSkupine';
import EditProfil from './components/EditProfil';

// pdf viewers
import PDFReactViewer from './components/PDFReactViewer';
import Hitconcept from './components/Hitconcept';

// Strani
import Knjige from './pages/Knjige';
import Doma from './pages/Doma';
import Asistent from './pages/Asistent';
import KreatorProfil from './pages/KreatorProfil';
import NavadenProfil from './pages/NavadenProfil';
import Vsebina from './pages/Vsebina';

// Slike
import matematika from './images/math.jpg';
import slovenščina from './images/slovenščina.jpg';
import kemija from './images/kemija.jpg';
import fizika from './images/physics.jpg';
import blacklogo from './images/black_logo.png';
import road from './images/action-asphalt-blur-315938.png';
import create from './images/art-artwork-beautiful-1539581.png';
import play from './images/play.png';
import več from './images/več.svg';
import skupina2 from './images/1B.png';

// Kreatorji
import andraz from './images/adult-boy-casual-220453.png';
import mia from './images/attractive-beautiful-beauty-1024311.png';
import anja from './images/beautiful-brunette-cute-774909.png';

// Content slike
import odvod from './images/education-graphing-paper-homework-1.png';

import informatika from './images/chip-circuit-circuit-board-163125.png';

import funkcije from './images/education-graphing-paper-homework-1.png';

// Ikone
import VoltaireAsistent from './icons/Voltaire_krog.png';
import Organizacija from './icons/Organizacija.png';
import Nastavitve from './icons/Nastavitve.png';

import './App.css';

import skupina from './images/alley-black-and-white-black-and-white-2216725.png';

class App extends Component {
  constructor() {
    super();
    this.viewer = React.createRef();
    this.docViewer = null;
    this.annotManager = null;
    this.instance = null;
  }

  componentDidMount() {
    // let skupinaObj = {
    //   ime: '1A',
    //   profilna: skupina
    // };
    // let skupineArray = JSON.parse(localStorage.getItem('skupine'));
    // skupineArray.push(skupinaObj);
    // localStorage.setItem('skupine', JSON.stringify(skupineArray));
    // window
    //   .WebViewer(
    //     {
    //       path: 'lib',
    //       initialDoc: 'files/webviewer-demo-annotated.pdf'
    //     },
    //     this.viewer.current
    //   )
    //   .then(instance => {
    //     // at this point, the viewer is 'ready'
    //     // call methods from instance, docViewer and annotManager as needed
    //     this.instance = instance;
    //     this.docViewer = instance.docViewer;
    //     this.annotManager = instance.annotManager;
    //     // you can also access major namespaces from the instance as follows:
    //     // var Tools = instance.Tools;
    //     // var Annotations = instance.Annotations;
    //     // now you can access APIs through `this.instance`
    //     this.instance.openElement('notesPanel');
    //     // or listen to events from the viewer element
    //     this.viewer.current.addEventListener('pageChanged', e => {
    //       const [pageNumber] = e.detail;
    //       console.log(`Current page is ${pageNumber}`);
    //     });
    //     // or from the docViewer instance
    //     this.docViewer.on('annotationsLoaded', () => {
    //       console.log('annotations loaded');
    //     });
    //     this.docViewer.on('documentLoaded', this.wvDocumentLoadedHandler);
    //   });
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
    skupine: JSON.parse(localStorage.getItem('skupine')),

    rezultatiIskanja: [
      {
        ime: 'Andraž Karamazov',
        profilna: andraz,
        tip: 'kreator',
        link: '/kreator/andrazk'
      },
      {
        ime: 'Odvod & Integral',
        slika: odvod,
        ocena: '4.3',
        kreator: 'Andraž Karamazov',
        tip: 'content'
      },
      {
        ime: 'Mia Silar',
        profilna: mia,
        tip: 'kreator',
        link: '/kreator/mias'
      },
      {
        ime: '1A',
        profilna: skupina,
        tip: 'skupina'
      },
      {
        ime: '1B',
        profilna: skupina2,
        tip: 'skupina'
      }
    ],

    dodaniKreatorji: JSON.parse(localStorage.getItem('kreatorji')),

    material: JSON.parse(localStorage.getItem('material')),
    groups: [],
    mojeKnjige: [],
    predmeti: [
      {
        ime: 'Matematika',
        slika: matematika,
        href: '/matematika/letniki',
        letniki: [
          {
            ime: '7. razred',
            href: '/mat/letniki/7',
            content: [
              {
                ime: 'Odvod & Integral',
                slika: odvod,
                ocena: '4.3',
                kreator: 'Andraž Karamazov'
              },
              {
                ime: 'Informatika za maturo II. del',
                slika: informatika,
                ocena: '4.5',
                kreator: 'Andraž Karamazov'
              },
              {
                ime: 'Pregled funkcij',
                slika: funkcije,
                ocena: '4.1',
                kreator: 'Andraž Karamazov'
              },
              {
                ime: 'Statistika',
                slika: odvod,
                ocena: '4.3',
                kreator: 'Andraž Karamazov'
              },
              {
                ime: 'Predstavitev informacij',
                slika: informatika,
                ocena: '4.5',
                kreator: 'Andraž Karamazov'
              },
              {
                ime: 'Verjetnost',
                slika: funkcije,
                ocena: '4.1',
                kreator: 'Andraž Karamazov'
              },
              {
                ime: 'Statistika',
                slika: odvod,
                ocena: '4.3',
                kreator: 'Andraž Karamazov'
              },
              {
                ime: 'Predstavitev informacij',
                slika: informatika,
                ocena: '4.5',
                kreator: 'Andraž Karamazov'
              },
              {
                ime: 'Verjetnost',
                slika: funkcije,
                ocena: '4.1',
                kreator: 'Andraž Karamazov'
              },
              {
                ime: 'Statistika',
                slika: odvod,
                ocena: '4.3',
                kreator: 'Andraž Karamazov'
              },
              {
                ime: 'Predstavitev informacij',
                slika: informatika,
                ocena: '4.5',
                kreator: 'Andraž Karamazov'
              },
              {
                ime: 'Verjetnost',
                slika: funkcije,
                ocena: '4.1',
                kreator: 'Andraž Karamazov'
              }
              // {
              //   ime: 'Matematika 7',
              //   href: '/mat/letniki/7/Matematika_7',
              //   opis:
              //     'Učbenik Matematika 7, za matematiko v sedmem razredu osnovne šole, temelji na metodično-didaktičnem konceptu, ki v učencih sistematično razvija matematično vedenje prek razumevanja; šele to daje znanju pravo vrednost in v učencih vzbuja zanimanje.'
              // },
              // {
              //   ime: 'Znam matematiko 7',
              //   href: '/mat/letniki/7/Znam_matematiko_7',
              //   opis:
              //     'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit delectus ipsa quaerat velit odio nam cupiditate? Tenetur aspernatur repellat id mollitia accusantium sit delectus eum, labore eveniet quos, quas eaque.'
              // },
              // {
              //   ime: 'Oblike in funkcije',
              //   href: '/mat/letniki/7/Oblike_in_funkcije',
              //   opis:
              //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt culpa repudiandae, adipisci nulla excepturi suscipit! Reprehenderit eligendi enim quasi velit nulla tempora. Harum illo voluptatibus, consectetur illum enim necessitatibus saepe.'
              // },
              // {
              //   ime: 'Znam za več, Matematika 7',
              //   href: '/mat/letniki/7/Znam_za_več,_Matematika_7',
              //   opis:
              //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse repudiandae ratione, minus, eum odit dignissimos unde pariatur laboriosam at tempora nulla quae voluptate eveniet dolores molestiae cum! Officia, nostrum.'
              // }
            ]
          },
          { ime: '8. razred', href: '/mat/letniki/8' },
          { ime: '9. razred', href: '/mat/letniki/9' },
          { ime: '1. letnik', href: '/mat/letniki/1' },
          { ime: '2. letnik', href: '/mat/letniki/2' },
          { ime: '3. letnik', href: '/mat/letniki/3' },
          { ime: '4. letnik', href: '/mat/letniki/4' }
        ]
      },
      {
        ime: 'Slovenščina',
        slika: slovenščina,
        href: '/slovenščina/letniki',
        letniki: [
          { ime: '7. razred', href: '/slo/letniki/7' },
          { ime: '8. razred', href: '/slo/letniki/8' },
          { ime: '9. razred', href: '/slo/letniki/9' },
          { ime: '1. letnik', href: '/slo/letniki/1' },
          { ime: '2. letnik', href: '/slo/letniki/2' },
          { ime: '3. letnik', href: '/slo/letniki/3' },
          { ime: '4. letnik', href: '/slo/letniki/4' }
        ]
      },
      {
        ime: 'Kemija',
        slika: kemija,
        href: '/kemija/letniki',
        letniki: [
          { ime: '7. razred', href: '/kem/letniki/7' },
          { ime: '8. razred', href: '/kem/letniki/8' },
          { ime: '9. razred', href: '/kem/letniki/9' },
          { ime: '1. letnik', href: '/kem/letniki/1' },
          { ime: '2. letnik', href: '/kem/letniki/2' },
          { ime: '3. letnik', href: '/kem/letniki/3' },
          { ime: '4. letnik', href: '/kem/letniki/4' }
        ]
      },
      {
        ime: 'Fizika',
        slika: fizika,
        href: '/fizika/letniki',
        letniki: [
          { ime: '7. razred', href: '/fiz/letniki/7' },
          { ime: '8. razred', href: '/fiz/letniki/8' },
          { ime: '9. razred', href: '/fiz/letniki/9' },
          { ime: '1. letnik', href: '/fiz/letniki/1' },
          { ime: '2. letnik', href: '/fiz/letniki/2' },
          { ime: '3. letnik', href: '/fiz/letniki/3' },
          { ime: '4. letnik', href: '/fiz/letniki/4' }
        ]
      }
    ],
    letniki: [
      '7. razred',
      '8. razred',
      '9. razred',
      '1. letnik',
      '2. letnik',
      '3. letnik',
      '4. letnik'
    ],
    features: [
      {
        ime: 'Glasovni asistent Voltaire',
        ikona: blacklogo,
        btnImage: play,
        background: road,
        link: '/asistent',
        opis:
          'Med učenjem bliskovito preveri karkoli ne razumeš z glasovnim asistentom Voltaire'
      },
      {
        ime: 'Postanite kreator',
        background: create,
        ikona: '',
        btnImage: več,
        link: '',
        opis:
          'Izdeluješ dobre zapiske? Rad izdeluješ videe? Znaš sestaviti uporabne vaje in kvize? Hočeš zaslužiti?'
      }
    ],
    answer: '',
    kreatorji: [
      {
        ime: 'Andraž Karamazov',
        profilna: andraz,
        content: [
          {
            ime: 'Odvod & Integral',
            slika: odvod,
            ocena: '4.3',
            kreator: 'Andraž Karamazov'
          },
          {
            ime: 'Informatika za maturo II. del',
            slika: informatika,
            ocena: '4.5',
            kreator: 'Andraž Karamazov'
          },
          {
            ime: 'Pregled funkcij',
            slika: funkcije,
            ocena: '4.1',
            kreator: 'Andraž Karamazov'
          },
          {
            ime: 'Statistika',
            slika: odvod,
            ocena: '4.3',
            kreator: 'Andraž Karamazov'
          },
          {
            ime: 'Predstavitev informacij',
            slika: informatika,
            ocena: '4.5',
            kreator: 'Andraž Karamazov'
          },
          {
            ime: 'Verjetnost',
            slika: funkcije,
            ocena: '4.1',
            kreator: 'Andraž Karamazov'
          },
          {
            ime: 'Statistika',
            slika: odvod,
            ocena: '4.3',
            kreator: 'Andraž Karamazov'
          },
          {
            ime: 'Predstavitev informacij',
            slika: informatika,
            ocena: '4.5',
            kreator: 'Andraž Karamazov'
          },
          {
            ime: 'Verjetnost',
            slika: funkcije,
            ocena: '4.1',
            kreator: 'Andraž Karamazov'
          },
          {
            ime: 'Statistika',
            slika: odvod,
            ocena: '4.3',
            kreator: 'Andraž Karamazov'
          },
          {
            ime: 'Predstavitev informacij',
            slika: informatika,
            ocena: '4.5',
            kreator: 'Andraž Karamazov'
          },
          {
            ime: 'Verjetnost',
            slika: funkcije,
            ocena: '4.1',
            kreator: 'Andraž Karamazov'
          }
        ]
      },
      {
        ime: 'Mia Silar',
        profilna: mia,
        content: [
          {
            ime: 'Understanding RAM',
            slika: informatika,
            ocena: '4.5',
            kreator: 'Mia Silar'
          },
          {
            ime: 'Matematika II',
            slika: funkcije,
            ocena: '4.2',
            kreator: 'Mia Silar'
          }
        ]
      },

      {
        ime: 'Anja Novak',
        profilna: anja,
        content: [
          {
            ime: 'Podatkovne baze',
            slika: informatika,
            ocena: '4.5',
            kreator: 'Anja Novak'
          },
          {
            ime: 'Geometrija',
            slika: funkcije,
            ocena: '4.2',
            kreator: 'Anja Novak'
          }
        ]
      }
    ]
  };

  dodajMaterial = contentObj => {
    alert('dodajMaterial called');

    // Retrieve localStorage content array
    var materialArray = JSON.parse(localStorage.getItem('material'));

    var imenaMaterialArray = materialArray.map(content => {
      return content.ime;
    });

    // Check if array contains item
    if (imenaMaterialArray.includes(contentObj.ime)) {
      alert('Že dodano.');
    } else {
      materialArray.push(contentObj);
      alert('Dodano');
    }

    // Update localStorage with new array of content objects
    localStorage.setItem('material', JSON.stringify(materialArray));
  };

  dodajKreatorja = kreatorObj => {
    console.log('Dodaj kreatorja called');

    // Retrieve localStorage kreator array
    var kreatorArray = JSON.parse(localStorage.getItem('kreatorji'));

    kreatorArray.push(kreatorObj);

    // Update localStorage with new array of content objects
    localStorage.setItem('kreatorji', JSON.stringify(kreatorArray));
  };

  dodajSkupino = skupinaObj => {
    console.log('Dodaj skupino called');

    // Retrieve localStorage kreator array
    var skupineArray = JSON.parse(localStorage.getItem('skupine'));

    let skupineImenaArray = skupineArray.map(skupina => {
      return skupina.ime;
    });

    // Check if array contains item
    if (skupineImenaArray.includes(skupinaObj.ime)) {
      alert('Že dodano.');
    } else {
      skupineArray.push(skupinaObj);
      alert('Dodano');
    }

    // Update localStorage with new array of content objects
    localStorage.setItem('skupine', JSON.stringify(skupineArray));
  };

  odstraniMaterial = index => {
    // Retrieve localStorage content array
    var materialArrray = JSON.parse(localStorage.getItem('material'));

    materialArrray.splice(index, 1);

    // Update localStorage with new array of content objects
    localStorage.setItem('material', JSON.stringify(materialArrray));
  };

  odstraniKreatorja = () => {
    // Retrieve localStorage content array
    var kreatorArray = JSON.parse(localStorage.getItem('kreatorji'));

    kreatorArray.splice(0, 1);

    // Update localStorage with new array of content objects
    localStorage.setItem('kreatorji', JSON.stringify(kreatorArray));
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
        this.setState(prevState => ({ answer: String(response.data) }));
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
                  <Explore />
                  <Subjects
                    letniki={this.state.letniki}
                    predmeti={this.state.predmeti}
                  />
                  <KreatorjiCarousel />
                  <Features features={this.state.features} />
                  <div className="text-center card-footer">Voltaire 2019</div>
                </div>
              )}
            />

            {/* Knjige */}
            <Route
              path="/books"
              exact
              render={props => (
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <Knjige
                        odstraniMaterial={this.odstraniMaterial}
                        page="Material"
                        content={this.state.material}
                      />
                    </div>
                  )}
                </Spring>
              )}
            />

            {/* Rezultati */}
            <Route
              path="/rezultati"
              exact
              render={props => (
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <Rezultati
                        rezultatiIskanja={this.state.rezultatiIskanja}
                        dodajMaterial={this.dodajMaterial}
                        dodajKreatorja={this.dodajKreatorja}
                        dodajSkupino={this.dodajSkupino}
                      />
                    </div>
                  )}
                </Spring>
              )}
            />

            {/* Kreator profil */}

            <Route
              path="/kreator/andrazk"
              exact
              render={props => (
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <KreatorProfil
                        slika={this.state.kreatorji[0].profilna}
                        kreatorObj={this.state.kreatorji[0]}
                        kreator={this.state.kreatorji[0].ime}
                        dodajKreatorja={this.dodajKreatorja}
                      />
                      <KreatorMaterial
                        content={this.state.kreatorji[0].content}
                      />
                    </div>
                  )}
                </Spring>
              )}
            />

            <Route
              path="/kreator/anjam"
              exact
              render={props => (
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <KreatorProfil
                        slika={this.state.kreatorji[2].profilna}
                        kreatorObj={this.state.kreatorji[2]}
                        kreator={this.state.kreatorji[2].ime}
                        dodajKreatorja={this.dodajKreatorja}
                      />
                      <KreatorMaterial
                        content={this.state.kreatorji[2].content}
                      />
                    </div>
                  )}
                </Spring>
              )}
            />

            <Route
              path="/kreator/mias"
              exact
              render={props => (
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <KreatorProfil
                        slika={this.state.kreatorji[1].profilna}
                        kreator={this.state.kreatorji[1].ime}
                        dodajKreatorja={this.dodajKreatorja}
                      />
                      <KreatorMaterial
                        content={this.state.kreatorji[1].content}
                      />
                    </div>
                  )}
                </Spring>
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

            {/* Knjige razreda & letnika */}
            <Route
              path="/mat/letniki/7"
              exact
              render={props => (
                <Vsebina
                  dodajMaterial={this.dodajMaterial}
                  page="Matematika 7. razred"
                  content={this.state.predmeti[0].letniki[0].content}
                />
              )}
            />

            {/* O knjigi */}
            <Route
              path="/mat/letniki/7/Matematika_7"
              exact
              render={props => (
                <div>
                  <OKnjigi />
                </div>
              )}
            />

            {/* Odprta knjiga */}
            <Route path="/odprto" exact render={props => <Hitconcept />} />

            {/* Web viewer */}
            {/* <WebviewerPDF backend={WebviewerBackend} src="" /> */}
            <Route
              path="/webviewer"
              exact
              render={props => (
                <PDFViewer backend={WebviewerBackend} src="/kemija.pdf" />
              )}
            />

            {/* Doma */}
            <Route
              path="/home"
              exact
              render={props => (
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <NavadenProfil />
                      <NavadenProfilKreatorji
                        odstraniKreatorja={this.odstraniKreatorja}
                        kreatorji={this.state.dodaniKreatorji}
                      />
                    </div>
                  )}
                </Spring>
              )}
            />

            {/* Doma - Skupine */}
            <Route
              path="/home/skupine"
              exact
              render={props => (
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <NavadenProfil />
                      <NavadenProfilSkupine skupine={this.state.skupine} />
                    </div>
                  )}
                </Spring>
              )}
            />

            {/* Doma - edit profil */}
            <Route
              path="/home/profil"
              exact
              render={props => (
                <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
                  {props => (
                    <div style={props}>
                      <NavadenProfil />
                      <EditProfil />
                    </div>
                  )}
                </Spring>
              )}
            />

            {/* <Route path="/pdf" exact render={props => <PDF />} /> */}

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
