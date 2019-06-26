import React, { Component } from 'react';

class Feature extends Component {
  render() {
    const ikona = this.props.ikona;
    console.log(ikona);
    const ime = this.props.ime;
    return (
      <div class="jumbotron text-center">
        <img src={ikona.VoltaireAsistent} alt="" />
        <p style={{ fontSize: '1.6em' }} className="lead">
          {ime}
        </p>
      </div>
    );
  }
}

export default Feature;
