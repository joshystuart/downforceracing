import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export class SocialMedia extends React.Component {
  public render(): ReactElement {
    return (
      <ul className="list-inline social margin-t-20">
        <li className="list-inline-item">
          <Link to="https://www.facebook.com/downforceracingteam/" target="_blank" className="social-icon">
            <FacebookIcon />
          </Link>
        </li>
        <li className="list-inline-item">
          <Link to="https://www.instagram.com/downforceracingco/" target="_blank" className="social-icon">
            <InstagramIcon />
          </Link>
        </li>
      </ul>
    );
  }
}
