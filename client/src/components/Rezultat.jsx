import React, { Component } from 'react';

// components
import DodanKreator from '../components/DodanKreator';
import ContentResult from '../components/ContentResult';

class Rezultat extends Component {
  render() {
    let rezultat;

    if (this.props.type === 'kreator') {
      rezultat = (
        <DodanKreator
          slika={this.props.slika}
          ime={this.props.ime}
          naslov={this.props.naslov}
          rating={this.props.rating}
        />
      );
    } else if (this.props.type === 'content') {
      rezultat = (
        <ContentResult
          slika={this.props.slika}
          ime={this.props.ime}
          naslov={this.props.naslov}
          rating={this.props.rating}
        />
      );
    }

    return rezultat;
  }
}

export default Rezultat;

// LOGIC FOR DISPLAYING RESULT

// if prop is content
//   return markupForContent

// else if prop is profile
//   return markupForProfile

// else prop is group
//   return markupForGroup
