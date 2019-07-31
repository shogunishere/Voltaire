import React, { Component } from 'react';
import slika from '../images/knjige/matematika_7.jpeg';
import { Spring } from 'react-spring/renderprops';

class OKnjigi extends Component {
  render() {
    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <div className="card" style={{ width: '300px', margin: '0 auto' }}>
            <img
              style={{
                width: '300px' /* you can use % */,
                height: 'auto'
              }}
              src={slika}
              alt="Matematika 7"
            />
            <div className="card-body">
              <h5>
                <b>Matematika 7</b>
              </h5>
            </div>
            <p className="card-text p-3">
              Učbenik Matematika 7, za matematiko v sedmem razredu osnovne šole,
              temelji na metodično-didaktičnem konceptu, ki v učencih
              sistematično razvija matematično vedenje prek razumevanja; šele to
              daje znanju pravo vrednost in v učencih vzbuja zanimanje.
            </p>
            <a
              href="/odprto"
              style={{ cursor: 'pointer', width: '40%', margin: '10px auto' }}
              class=" btn btn-dark text-white"
            >
              Odpri
            </a>
          </div>
        )}
      </Spring>
    );
  }
}

export default OKnjigi;
