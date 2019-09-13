import React, { Component } from 'react';

class KreatorProfilOmeni extends Component {

  state = {
    omeni: this.props.omeniString
  } 

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

        {/* <div
          style={{ fontSize: '1.2em', marginBottom: '20%' }}
          id="kreator-omeni-mreza"
        >
          { this.state.omeni } 
        </div> */}
        <div
          style={{ marginBottom: '100px',}}
          id="kreator-omeni-mreza"
        >
          { this.state.omeni } 
        </div>
      </div>
    );
  }
}

export default KreatorProfilOmeni;
