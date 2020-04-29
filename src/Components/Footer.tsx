import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  public render(): ReactElement {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 margin-t-20">
              <h4>DORSIN</h4>
              <div className="text-muted margin-t-20">
                <ul className="list-unstyled footer-list">
                  <li>
                    <Link to="">Home</Link>
                  </li>
                  <li>
                    <Link to="">About us</Link>
                  </li>
                  <li>
                    <Link to="">Careers</Link>
                  </li>
                  <li>
                    <Link to="">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 margin-t-20">
              <h4>Information</h4>
              <div className="text-muted margin-t-20">
                <ul className="list-unstyled footer-list">
                  <li>
                    <Link to="">Terms & Condition</Link>
                  </li>
                  <li>
                    <Link to="">About us</Link>
                  </li>
                  <li>
                    <Link to="">Jobs</Link>
                  </li>
                  <li>
                    <Link to="">Bookmarks</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 margin-t-20">
              <h4>Support</h4>
              <div className="text-muted margin-t-20">
                <ul className="list-unstyled footer-list">
                  <li>
                    <Link to="">FAQ</Link>
                  </li>
                  <li>
                    <Link to="">Contact</Link>
                  </li>
                  <li>
                    <Link to="">Disscusion</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 margin-t-20">
              <h4>Subscribe</h4>
              <div className="text-muted margin-t-20">
                <p>
                  In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web
                  copy before the design starts.
                </p>
              </div>
              <form className="form subscribe">
                <input placeholder="Email" className="form-control" required />
                <Link to="" className="submit">
                  <i className="pe-7s-paper-plane" />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
