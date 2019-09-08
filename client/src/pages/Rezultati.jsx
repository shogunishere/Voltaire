import React, { Component } from 'react';
import axios from 'axios';

// components
import Rezultat from '../components/Rezultat';
import KreatorResult from '../components/KreatorResult';
import ContentResult from '../components/ContentResult';
import Skupina from '../components/Skupina';

// icons
import video from '../icons/video.png';
import zapiski from '../icons/zapiski.png';
import kurikulum from '../icons/kurikulum.png';
import vaje from '../icons/vaje.png';
import kreatorSimbol from '../icons/kreatorSimbol.png';

// ikona
import rating from '../icons/rating.png';
import dodano from '../icons/dodano.png';
import inštrukcije from '../icons/inštrukcije.png';
import editProfil from '../icons/editProfil1.png';
import groups from '../icons/groups.png';

// kreatorji
import andraz from '../images/adult-boy-casual-220453.png';
import mia from '../images/attractive-beautiful-beauty-1024311.png';
import anja from '../images/beautiful-brunette-cute-774909.png';

// content
import odvod from '../images/education-graphing-paper-homework-1.png';
import DodanKreator from '../components/DodanKreator';

class Rezultati extends Component {
  state = {
    rezultati: this.props.rezultatiIskanja
  };

  render() {
    // Material array in array imen materiala, da lahko preverimo če je že dodano
    var materialArray = JSON.parse(localStorage.getItem('material'));
    var materialArrayImena = materialArray.map(materialObj => {
      return materialObj.ime;
    });

    // Kreatorji array in array imen kreatorjev, da lahko preverimo če je že dodan
    var kreatorjiArray = JSON.parse(localStorage.getItem('kreatorji'));
    var kreatorjiArrayImena = kreatorjiArray.map(kreatorObj => {
      return kreatorObj.ime;
    });

    // Skupine array in array imen skupin, da lahko preverimo če je skupina že dodana
    var skupineArray = JSON.parse(localStorage.getItem('skupine'));
    var skupineArrayImena = skupineArray.map(skupinaObj => {
      return skupinaObj.ime;
    });

    return (
      <div className="text-center" style={{ margin: '100px 0' }}>
        <h3>Rezultati</h3>
        <div style={{ width: '85%', margin: '0 auto' }}>
          <div className="kreator-material-type">
            <a href="">
              <img src={video} alt="" />
            </a>
            <a href="">
              <img src={zapiski} alt="" />
            </a>
            <a href="">
              <img src={kurikulum} alt="" />
            </a>
            <a href="">
              <img width="36" height="37" src={kreatorSimbol} alt="" />
            </a>
            <a href="">
              <img src={vaje} alt="" />
            </a>
          </div>
        </div>
        {/* <div style={{ margin: '100px auto' }} className="profil-options-parent">
          <div className="stat">
            <img width="32" height="32" src={kreatorSimbol} alt="" />
            <a className="profil-options " href="">
              <span className="kreator-stats izbran">Kreatorji</span>
            </a>
          </div>

          <div className="stat">
            <img src={groups} alt="" />
            <a className="profil-options" href="/home/skupine">
              <span className="kreator-stats">Skupine</span>
            </a>
          </div>
          <div className="stat">
            <img src={editProfil} alt="" />
            <a className="profil-options" href="">
              <span className="kreator-stats">Profil</span>
            </a>
          </div>
        </div> */}
        {/* testiranje rezultatov */}
        <div style={{ marginTop: '7%' }}>
          {this.state.rezultati.map(rezultatObj => {
            console.log(rezultatObj.ime);

            if (rezultatObj.tip === 'kreator') {
              // Preverimo če je kreator že dodan
              if (kreatorjiArrayImena.includes(rezultatObj.ime)) {
                return (
                  <KreatorResult
                    gumb1="dodano"
                    gumb1Background="#b7b7b7"
                    gumb1Border="#b7b7b7"
                    dodajKreatorja={this.props.dodajKreatorja}
                    kreatorObj={rezultatObj}
                    link={rezultatObj.link}
                  />
                );
              } else {
                return (
                  <KreatorResult
                    gumb1="dodaj"
                    gumb1Background="#23272b"
                    gumb1Border="#23272b"
                    dodajKreatorja={this.props.dodajKreatorja}
                    kreatorObj={rezultatObj}
                    link={rezultatObj.link}
                  />
                );
              }
            } else if (rezultatObj.tip === 'content') {
              // Preverimo če je material že dodan
              if (materialArrayImena.includes(rezultatObj.ime)) {
                return (
                  <ContentResult
                    gumb1="dodano"
                    gumb1Background="#b7b7b7"
                    gumb1Border="#b7b7b7"
                    dodajMaterial={this.props.dodajMaterial}
                    contentObj={rezultatObj}
                  />
                );
              } else {
                return (
                  <ContentResult
                    gumb1="dodaj"
                    gumb1Background="#23272b"
                    gumb1Border="#23272b"
                    dodajMaterial={this.props.dodajMaterial}
                    contentObj={rezultatObj}
                  />
                );
              }
            } else {
              // Preverimo če je kreator že dodan
              if (skupineArrayImena.includes(rezultatObj.ime)) {
                return (
                  <Skupina
                    ime={rezultatObj.ime}
                    profilna={rezultatObj.profilna}
                    gumb1="dodano"
                    gumb1Background="#b7b7b7"
                    gumb1Border="#b7b7b7"
                    gumb2Display="none"
                    dodajSkupino={this.props.dodajSkupino}
                    skupinaObj={rezultatObj}
                  />
                );
              } else {
                return (
                  <Skupina
                    ime={rezultatObj.ime}
                    profilna={rezultatObj.profilna}
                    gumb1="pridruži se"
                    gumb1Background="#23272b"
                    gumb1Border="#23272b"
                    gumb2Display="none"
                    dodajSkupino={this.props.dodajSkupino}
                    skupinaObj={rezultatObj}
                  />
                );
              }
            }
          })}

          {/* {this.state.rezultati.map(rezultatObj => {
            if (rezultatObj.tip === 'kreator') {
              return (
                <KreatorResult
                  dodajKreatorja={this.props.dodajKreatorja}
                  kreatorObj={rezultatObj}
                  link={rezultatObj.link}
                />
              );
            } else {
              return (
                <ContentResult
                  dodajMaterial={this.props.dodajMaterial}
                  contentObj={rezultatObj}
                />
              );
            }
          })} */}

          {/* <Rezultat
            type="kreator"
            slika={andraz}
            ime="Andraž Karamazov"
            kreator
            naslov=""
            rating=""
            dodajKreatorja={this.props.dodajKreatorja}
          />
          <Rezultat
            type="content"
            slika={odvodinintegrali}
            ime="Andraž Karamazov"
            naslov="Odvod in Integrali"
            rating="4.3/5"
          />
          <Rezultat
            type="kreator"
            slika={anja}
            ime="Anja Novak"
            naslov=""
            rating=""
          /> */}
        </div>
      </div>
    );
  }
}

export default Rezultati;
