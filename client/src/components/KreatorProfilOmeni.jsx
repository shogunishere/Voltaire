import React, { Component } from 'react';

class KreatorProfilOmeni extends Component {
  render() {
    return (
      <div
        style={{ display: 'grid', justifyContent: 'center' }}
        className="text-center"
      >
        <div
          style={{ margin: '100px 0' }}
          className="kreator-pages text-center"
        >
          <a className="kreator-options" href={this.props.material}>
            Material
          </a>
          <a className="kreator-options" href={this.props.komentarji}>
            Komentarji
          </a>
          <a
            style={{ color: 'red' }}
            className="kreator-options"
            href={this.props.omeni}
          >
            O meni
          </a>
        </div>

        <div
          style={{ fontSize: '1.2em', marginBottom: '20%' }}
          id="kreator-omeni-mreza"
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
