import React, { ReactElement } from 'react';
import dfrLogo from './../Images/dfr-logo-xs.png';

export class Navbar extends React.Component {
  public render(): ReactElement {
    return (
      <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
        <div className="container">
          <a className="navbar-brand logo text-uppercase" href="/">
            <img src={dfrLogo} alt="Downforce Racing logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav navbar-center" id="mySidenav">
              <li className="nav-item active">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  Videos
                </a>
              </li>
              <li className="nav-item">
                <a href="#features" className="nav-link">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#team" className="nav-link">
                  Team
                </a>
              </li>
            </ul>
            <div className="nav-button ml-auto">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <button type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">
                    Live stream
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
