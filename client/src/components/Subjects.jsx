import React, { Component } from 'react';
import Subject from './Subject.jsx';
import { Trail, Spring } from 'react-spring/renderprops';

class Subjects extends Component {
  state = {
    isOpen: false,
    seznam: (
      <Trail
        items={this.props.predmeti}
        keys={predmet => predmet.ime}
        from={{
          marginLeft: -20,
          opacity: 0,
          transform: 'translate3d(0,-150px,0)'
        }}
        to={{
          marginLeft: 20,
          opacity: 1,
          transform: 'translate3d(0,0px,0)'
        }}
      >
        {predmet => props => (
          <div style={props}>
            <Subject
              href={predmet.href}
              ime={predmet.ime}
              slika={predmet.slika}
            />
          </div>
        )}
      </Trail>
    )
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  naloziPredmete = () => {
    this.setState({
      seznam: (
        <Trail
          items={this.props.predmeti}
          keys={predmet => predmet.ime}
          from={{
            marginLeft: -20,
            opacity: 0,
            transform: 'translate3d(0,-150px,0)'
          }}
          to={{
            marginLeft: 20,
            opacity: 1,
            transform: 'translate3d(0,0px,0)'
          }}
        >
          {predmet => props => (
            <div style={props}>
              <Subject
                href={predmet.href}
                ime={predmet.ime}
                slika={predmet.slika}
              />
            </div>
          )}
        </Trail>
      )
    });
  };

  // when returned animations will be added with Spring
  naloziLetnike = () => {
    this.setState({
      seznam: (
        <Trail
          items={this.props.letniki}
          keys={letnik => letnik.ime}
          from={{
            marginLeft: -20,
            opacity: 0,
            transform: 'translate3d(0,-150px,0)'
          }}
          to={{
            marginLeft: 20,
            opacity: 1,
            transform: 'translate3d(0,0px,0)'
          }}
        >
          {letnik => props => (
            <div style={props}>
              <div
                style={{
                  lineHeight: '150px',
                  fontSize: '1.5em',
                  width: '100%',
                  height: '150px',
                  marginBottom: '1%'
                }}
                className="text-center bg-dark text-white"
              >
                <a
                  className="subject-link"
                  style={{
                    textDecoration: 'none'
                  }}
                  href=""
                >
                  {letnik}
                </a>
              </div>
            </div>
          )}
        </Trail>
      )

      // this.props.letniki.map(letnik => {
      //   return (
      //     <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      //       {props => (
      //         <div style={props}>
      //           <div
      //             style={{
      //               lineHeight: '150px',
      //               fontSize: '1.5em',
      //               width: '100%',
      //               height: '150px',
      //               marginBottom: '1%'
      //             }}
      //             className="text-center bg-dark text-white"
      //           >
      //             <a style={{ color: 'white' }} href="">
      //               {letnik}
      //             </a>
      //           </div>
      //         </div>
      //       )}
      //     </Spring>
      //   );
      // })
    });
  };

  render = () => {
    const subjects = this.props.predmeti;
    const menuClass = `dropdown-menu${this.state.isOpen ? ' show' : ''}`;

    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <div style={props}>
            <div>
              <div className="container-fluid text-center">
                <div
                  style={{ float: 'left' }}
                  onClick={this.toggleOpen}
                  className="dropdown"
                >
                  <a
                    style={{ fontSize: '1.5em', cursor: 'pointer' }}
                    className=" dropdown-toggle"
                    dataToggle="dropdown"
                    ariaHaspopup="true"
                    ariaExpanded="false"
                  >
                    <i className="fa fa-filter" />
                  </a>
                  <div
                    className={menuClass}
                    ariaLabelledby="dropdownMenuButton"
                  >
                    <a
                      onClick={this.naloziPredmete}
                      className="dropdown-item"
                      href="#"
                    >
                      Predmeti
                    </a>
                    <a
                      onClick={this.naloziLetnike}
                      className="dropdown-item"
                      href="#"
                    >
                      Letniki
                    </a>
                  </div>
                </div>
                <h3 className="m-4">Predmeti:</h3>
                {this.state.seznam}
              </div>
            </div>
          </div>
        )}
      </Spring>
    );
  };
}

export default Subjects;
