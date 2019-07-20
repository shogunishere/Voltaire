import React,{Component} from 'react';
import Subject from './Subject.jsx';
import {Spring} from 'react-spring/renderprops'


class Subjects extends Component {

  state = {
    isOpen: false,
    seznam: this.props.predmeti.map(predmet => {
      return (
        <a href="">
          <Subject
            href={predmet.href}
            ime={predmet.ime}
            slika={predmet.slika}
          />
        </a>
      );
    })
  };



  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  naloziPredmete = () => {
    this.setState({
      seznam: this.props.predmeti.map(predmet => {
        return (
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props => 
            <div style={props}>
            <Subject
              href={predmet.href}
              ime={predmet.ime}
              slika={predmet.slika}
            />
          </div>}
          </Spring>

        );
      })
    });
  };

  // when returned animations will be added with Spring
  naloziLetnike = () => {
    this.setState({
      seznam: this.props.letniki.map(letnik => {
        return (
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}>
            {props => <div style={props}>
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
              {letnik}
            </div>
            </div>}
          </Spring>
        );
      })
    });
  };



  render = () => {
    const menuClass = `dropdown-menu${this.state.isOpen ? ' show' : ''}`;

      // trying to use react-spring 

    return (
      <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      >
      {props => 
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
                  <div className={menuClass} ariaLabelledby="dropdownMenuButton">
                    <a onClick={this.naloziPredmete} className="dropdown-item" href="#">
                      Predmeti
                    </a>
                    <a onClick={this.naloziLetnike} className="dropdown-item" href="#">
                      Letniki
                    </a>
                  </div>
                </div>
                <h3 className="m-4">Predmeti:</h3>
                {this.state.seznam}
              </div>
            </div>
          </div>}
      </Spring>
    );
  }
}


export default Subjects;
