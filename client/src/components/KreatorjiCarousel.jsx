import React, { Component } from 'react';
import avocado from '../images/avocado-close-up-delicious-2095924.jpg';
import andraz from '../images/adult-boy-casual-220453.png';
import mia from '../images/attractive-beautiful-beauty-1024311.png';
import anja from '../images/beautiful-brunette-cute-774909.png';
import next from '../images/right.png';
import prev from '../images/left.png';

class KreatorjiCarousel extends Component {
  render() {
    return (
      <div className="text-center najdite-kreatorje">
        <h2 style={{ marginTop: '16px' }}>Najdite kreatorje</h2>
        <div
          style={{ marginTop: '50px', marginBottom: '50px' }}
          id="myCarousel"
          class=" carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="text-center carousel-item">
              <div class="row">
                <div class="col-4">
                  <img width="140" height="140" src={anja} alt="" />

                  <p className="kreator-descr">
                    Anja dela super videe iz matematike!
                  </p>
                  <p>
                    <a class="btn btn-dark text-white" href="#" role="button">
                      Obišči profil
                    </a>
                  </p>
                </div>
                <div class="col-4">
                  <img width="140" height="140" src={andraz} alt="" />
                  <p className="kreator-descr">
                    Zaradi Andraževih zapiskov za informatiko sem na maturi
                    pisal 5.
                  </p>
                  <p>
                    <a class="btn btn-dark text-white" href="#" role="button">
                      Obišči profil
                    </a>
                  </p>
                </div>
                <div class="col-4">
                  <img width="140" height="140" src={mia} alt="" />

                  <p className="kreator-descr">
                    Mia ima super vaje za NPZ slovenščine!
                  </p>
                  <p>
                    <a class="btn btn-dark text-white" href="#" role="button">
                      Obišči profil
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center carousel-item active">
              <div class="row">
                <div class="col-4">
                  <img width="140" height="140" src={anja} alt="" />

                  <p className="kreator-descr">
                    Anja dela super videe iz matematike!
                  </p>
                  <p>
                    <a
                      class="btn btn-dark text-white"
                      href="/kreator/andrazk"
                      role="button"
                    >
                      Obišči profil
                    </a>
                  </p>
                </div>
                <div class="col-4">
                  <img width="140" height="140" src={andraz} alt="" />
                  <p className="kreator-descr">
                    Zaradi Andraževih zapiskov za informatiko sem na maturi
                    pisal 5.
                  </p>
                  <p>
                    <a
                      class="btn btn-dark text-white"
                      href="/kreator/andrazk"
                      role="button"
                    >
                      Obišči profil
                    </a>
                  </p>
                </div>
                <div class="col-4">
                  <img width="140" height="140" src={mia} alt="" />

                  <p className="kreator-descr">
                    Mia ima super vaje za NPZ slovenščine!
                  </p>
                  <p>
                    <a
                      class="btn btn-dark text-white"
                      href="/kreator/andrazk"
                      role="button"
                    >
                      Obišči profil
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div class="text-center carousel-item">
              <div class="row">
                <div class="col-4">
                  <img width="140" height="140" src={anja} alt="" />

                  <p className="kreator-descr">
                    Anja dela super videe iz matematike!
                  </p>
                  <p>
                    <a class="btn btn-dark text-white" href="#" role="button">
                      Obišči profil
                    </a>
                  </p>
                </div>
                <div class="col-4">
                  <img width="140" height="140" src={andraz} alt="" />
                  <p className="kreator-descr">
                    Zaradi Andraževih zapiskov za informatiko sem na maturi
                    pisal 5.
                  </p>
                  <p>
                    <a class="btn btn-dark text-white" href="#" role="button">
                      Obišči profil
                    </a>
                  </p>
                </div>
                <div class="col-4">
                  <img width="140" height="140" src={mia} alt="" />

                  <p className="kreator-descr">
                    Mia ima super vaje za NPZ slovenščine!
                  </p>
                  <p>
                    <a class="btn btn-dark text-white" href="#" role="button">
                      Obišči profil
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <img src={prev} alt="" />
          </a>
          <a
            class="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <img src={next} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default KreatorjiCarousel;
