import React, { Component } from 'react';

class KreatorProfilOmeni extends Component {
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
          <a className="kreator-options" href="/kreator/komentarji">
            Komentarji
          </a>
          <a
            style={{ color: 'red' }}
            className="kreator-options"
            href="/kreator/omeni"
          >
            O meni
          </a>
        </div>
        <div
          style={{ fontSize: '1.2em', marginBottom: '20%' }}
          id="kreator-about"
        >
          Ime mi je Andraž. Sem v zadnjem letniku študija matematike. V prostem
          času rad izdelujem zapiske in delim svoje znanje.
          <br /> <br /> Upam da vam moja vsebina pomaga priti do boljših
          rezultatov hitreje in nekoliko zabavneje.
          <br /> <br /> <br />
          Ponujam tudi tutorstvo. Kontaktirajte me in se zmeniva za termin.
        </div>
      </div>
    );
  }
}

export default KreatorProfilOmeni;
