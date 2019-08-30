import React, { Component } from 'react';
import exploreBg from '../icons/exploreBg.jpg';

// ikona
import VoltaireAsistent from '../icons/Voltaire_krog.png';

class Explore extends Component {
  render() {
    return (
      <div class="explore-background position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light text-white">
        <div class=" col-md-5 p-lg-5 mx-auto my-2">
          <h1 class="font-weight-normal">Išči:</h1>
          {/* Iskanje input */}
          <input
            type="text"
            style={{ marginTop: '30px' }}
            class="mx-auto search-input"
            placeholder="Iščite vsebino"
          />
          <a
            class=" btn btn-dark"
            href="/rezultati"
            style={{
              margin: '20px 0',
              width: '120px',
              height: '40px',
              fontSize: '1em',
              borderRadius: '20px'
            }}
          >
            išči
          </a>

          {/* Search ikona/link */}
          <p class="lead font-weight-normal">
            Poiščite kreatorje, zapiske, učbenike, inštrukcije, videe
          </p>
        </div>
        <div class="product-device shadow-sm d-none d-md-block" />
        <div class="product-device product-device-2 shadow-sm d-none d-md-block" />
      </div>
    );
  }
}

export default Explore;
