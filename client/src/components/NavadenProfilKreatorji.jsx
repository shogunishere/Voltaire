import React, { Component } from 'react';

// components
import DodanKreator from './DodanKreator';

// images
import andraz from '../images/adult-boy-casual-220453.png';
import mia from '../images/attractive-beautiful-beauty-1024311.png';
import anja from '../images/beautiful-brunette-cute-774909.png';

// ikona
import rating from '../icons/rating.png';
import dodano from '../icons/dodano.png';
import kreatorSimbol from '../icons/kreatorSimbol.png';
import inštrukcije from '../icons/inštrukcije.png';
import editProfil from '../icons/editProfil1.png';
import groups from '../icons/groups.png';

class NavadenProfilKreatorji extends Component {
  render() {
    let kreatorji = this.props.kreatorji;
    let value;

    if (kreatorji.length === 0) {
      console.log('Nobenih kreatorjev');
      value = (
        <div className="text-center container">
          Ni dodanih kreatorjev
        </div>
      );
    } else {
      value = kreatorji.map(kreator => {
        console.log(kreator);

        return (
          <DodanKreator
            odstraniKreatorja={this.props.odstraniKreatorja}
            slika={kreator.profilna}
            ime={kreator.ime}
            index={this.props.kreatorji.indexOf(kreator)}
            link={kreator.link}
          />
        );
      });
    }

    return (
      <div style={{ margin: '100px 0' }} className="">
        {/* <div
          style={{
            marginTop: '70px',
            marginBottom: '100px',
            fontSize: '1.5em'
          }}
          className="kreator-material-type"
        >
          <a className="kreator-options" href="">
            Kreatorji
          </a>
          <a
            style={{ color: 'red' }}
            className="kreator-options"
            href="/home/skupine"
          >
            Skupine
          </a>
          <a className="kreator-options" href="/home/profil">
            Profil
          </a>
        </div> */}
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
            <a className="profil-options" href="/home/profil">
              <span className="kreator-stats">Profil</span>
            </a>
          </div>
        </div> */}
        <div style={{ margin: '100px auto' }} className="profil-options-parent">
          <a style={{ color: 'red' }} className="profil-options " href="">
            Kreatorji
          </a>
          <a className="profil-options" href="/home/skupine">
            Skupine
          </a>
          <a className="profil-options" href="/home/profil">
            Profil
          </a>
        </div>
        {value}
      </div>
    );
  }
}

export default NavadenProfilKreatorji;
