import React, { Component } from 'react';

// icons
import video from '../icons/video.png';
import zapiski from '../icons/zapiski.png';
import kurikulum from '../icons/kurikulum.png';
import vaje from '../icons/vaje.png';
import kreator from '../icons/kreatorSimbol.png';

class Iskanje extends Component {
  render() {
    return (
      <div class="text-center">
        <div class="container text-center">
          <h3 className="m-4">Rezultati</h3>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Iščite vsebino"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <a className="btn btn-dark text-white" href="">
              Išči
            </a>
          </div>
          <div
            className="container"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '7%',
              marginBottom: '7%'
            }}
          >
            <a href="">
              <img src={video} alt="" />
            </a>
            <a href="">
              <img src={zapiski} alt="" />
            </a>
            <a href="">
              <img src={kurikulum} alt="" />
            </a>
            <a href="">
              <img src={kreator} alt="" />
            </a>
            <a href="">
              <img src={vaje} alt="" />
            </a>
          </div>
          <div class="row" />
        </div>
      </div>
    );
  }
}

export default Iskanje;
