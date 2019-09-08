import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

// components
import Content from './Content';
import Komentar from './Komentar';

// icons
import video from '../icons/video.png';
import zapiski from '../icons/zapiski.png';
import kurikulum from '../icons/kurikulum.png';
import vaje from '../icons/vaje.png';

class KreatorProfilKomentarji extends Component {
  render() {
    return (
      <div
        style={{ display: 'grid', justifyContent: 'center' }}
        className="text-center"
      >
        <div
          style={{
            marginTop: '70px',
            marginBottom: '100px',
            fontSize: '1.5em'
          }}
          className="kreator-material-type"
        >
          <a className="kreator-options" href="/kreator/andrazk">
            Material
          </a>
          <a
            style={{ color: 'red' }}
            className="kreator-options"
            href="/kreator/komentarji"
          >
            Komentarji
          </a>
          <a className="kreator-options" href="/kreator/omeni">
            O meni
          </a>
        </div>

        <div style={{ marginBottom: '20%' }} id="kreator-material-mreza">
          <Komentar komentar="Matematika je super!" komentator="Boris Novak" />
          <Komentar
            komentar="Men si ful pomagu pri maturi. Hvala!"
            komentator="Marta Škrjanc"
          />
          <Komentar komentar="Ni slabo." komentator="Brin Colnar" />
          <Komentar
            komentar="Pa kaj pa vem no. Lahko bi blo bols."
            komentator="Matevž Matjašec"
          />
          <Komentar komentar="Relativno slabo." komentator="Jurij Smole" />
          <Komentar
            komentar="Super, hvala ti. Najboljsi zapiski informatike na Voltairu."
            komentator="Gary Bogdanovič"
          />
        </div>
      </div>
    );
  }
}

export default KreatorProfilKomentarji;
