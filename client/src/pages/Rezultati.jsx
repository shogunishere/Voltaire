import React, { Component } from 'react';
import axios from 'axios';

// components
import Rezultat from '../components/Rezultat';
import KreatorResult from '../components/KreatorResult';
import ContentResult from '../components/ContentResult';

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
    rezultati: [
      {
        ime: 'Andraž Karamazov',
        slika: andraz,
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
        slika: mia,
        tip: 'kreator',
        link: '/kreator/mias'
      }
    ]
  };

  render() {
    return (
      <div className="text-center" style={{ margin: '100px 0' }}>
        <h3>Rezultati</h3>
        {/* <div className="kreator-material-type">
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
        </div> */}
        <div style={{ margin: '100px auto' }} className="profil-options-parent">
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
        </div>
        {/* testiranje rezultatov */}
        <div style={{ marginTop: '7%' }}>
          {this.state.rezultati.map(rezultatObj => {
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
          })}

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
