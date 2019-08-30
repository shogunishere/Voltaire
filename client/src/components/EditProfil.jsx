import React, { Component } from 'react';

// components
import Skupina from './Skupina';

// ikona
import rating from '../icons/rating.png';
import dodano from '../icons/dodano.png';
import kreatorSimbol from '../icons/kreatorSimbol.png';
import inštrukcije from '../icons/inštrukcije.png';
import editProfil from '../icons/editProfil1.png';
import groups from '../icons/groups.png';

class EditProfil extends Component {
  render() {
    return (
      <div style={{ marginTop: '100px' }} className="">
        <div style={{ margin: '100px auto' }} className="profil-options-parent">
          <div className="stat">
            <img width="32" height="32" src={kreatorSimbol} alt="" />
            <a className="profil-options " href="">
              <span className="kreator-stats ">Kreatorji</span>
            </a>
          </div>

          <div className="stat">
            <img src={groups} alt="" />
            <a className="profil-options" href="/home/skupine">
              <span className="kreator-stats ">Skupine</span>
            </a>
          </div>
          <div className="stat">
            <img src={editProfil} alt="" />
            <a className="profil-options" href="">
              <span className="kreator-stats izbran">Profil</span>
            </a>
          </div>
        </div>
        <Skupina />
        <Skupina />
        <Skupina />
      </div>
    );
  }
}

export default EditProfil;
