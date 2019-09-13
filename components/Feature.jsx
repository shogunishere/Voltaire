import React, { Component } from 'react';

class Feature extends Component {
  render() {
    // Propsi
    const ikona = this.props.ikona;
    const opis = this.props.opis;
    const ime = this.props.ime;
    const link = this.props.link;

    const background = this.props.background;

    return (
      <div class="jumbotron text-center">
        <a href={link}>
          <img src={ikona} alt="" />
        </a>

        <p style={{ fontSize: '1.6em' }} className="mt-2 lead">
          {ime}
        </p>
        <p style={{ fontSize: '1.2em' }} className="font-weight-light">
          {opis}
        </p>
      </div>
    );
  }
}

export default Feature;
