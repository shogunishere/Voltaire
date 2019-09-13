import React, { Component } from 'react';

class Knjiga extends Component {
  render() {
    return (
      <div style={{ margin: '5%' }}>
        <div class="card" style={{ width: '230px', height: '700px' }}>
          <div class="card-img-top">
            <a href="/mat/letniki/7/Matematika_7">
              <div class="card mb-4 shadow-sm">
                <svg width="100%" height="225">
                  <rect width="100%" height="100%" fill="#000000" />
                  <text
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                    fill="#eceeef"
                    dy=".3em"
                  >
                    {this.props.ime}
                  </text>
                </svg>
              </div>
            </a>
          </div>
          <div class="card-body">
            <h5 class="card-title">{this.props.ime}</h5>
            <p class="card-text">{this.props.opis}</p>
          </div>
        </div>
        <div>
          <a
            style={{ display: 'block' }}
            href="/odprto"
            class="btn btn-primary"
          >
            Odpri
          </a>
          <a
            onClick={() => this.props.dodajKnjigo(this.props.knjiga)}
            style={{ display: 'block' }}
            // href="/mat/letniki/7/Matematika_7"
            class="btn btn-dark text-white"
          >
            Dodaj
          </a>
        </div>
      </div>

      // <div className="card" style={{ width: '18rem' }}>
      //   <div class="card-body">
      //     <h5 class="card-title">{this.props.ime}</h5>
      //     <p class="card-text">
      //       Some quick example text to build on the card title and make up the
      //       bulk of the card's content.
      //     </p>
      //     <a href="#" class="btn btn-primary">
      //       Podrobnosti
      //     </a>
      //   </div>
      // </div>

      /* <div class="col-md-4">
        <a href={this.props.href}>
          <div class="card mb-4 shadow-sm">
            <svg width="100%" height="225">
              <rect width="100%" height="100%" fill="#000000" />
              <text
                textAnchor="middle"
                x="50%"
                y="50%"
                fill="#eceeef"
                dy=".3em"
              >
                {this.props.ime}
              </text>
            </svg>
          </div>
        </a>
      </div> */
    );
  }
}

export default Knjiga;
