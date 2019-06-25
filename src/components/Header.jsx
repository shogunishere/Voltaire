import React from 'react';
import logo from '../icons/Logo.svg';

function Header() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <a className="my-0 mr-md-auto font-weight-normal" href="#">
        <img style={{ width: '45px', height: '45px' }} src={logo} alt={''} />
      </a>
      {/* Navigation */}
      <nav className="my-2 my-md-0 mr-md-3">
        <a
          style={{ margin: '0% 2.6rem', 'font-size': '1.5em' }}
          className="fa-2x text-dark"
          href=""
        >
          <i className="fa fa-search" />
        </a>
        <a
          style={{ margin: '0% 2.6rem', 'font-size': '1.5em' }}
          className="text-dark"
          href=""
        >
          <i className="fa fa-book" />
        </a>
        <a
          style={{ margin: '0% 2.6rem', 'font-size': '1.7em' }}
          className="text-dark"
          href=""
        >
          <i class="fa fa-home" />
        </a>
      </nav>
    </div>
  );
}

export default Header;
