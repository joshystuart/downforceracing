import React, { ReactElement } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export class SocialMedia extends React.Component {
  public render(): ReactElement {
    return (
      <ul className="list-inline social margin-t-20">
        <li className="list-inline-item">
          <a
            href="https://www.facebook.com/downforceracingteam/"
            target="_blank"
            className="social-icon"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.instagram.com/downforceracingco/"
            target="_blank"
            className="social-icon"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
        </li>
      </ul>
    );
  }
}
