import React, { ReactElement } from 'react';
import { SocialMedia } from './SocialMedia';

export class Footer extends React.Component {
  public render(): ReactElement {
    return (
      <div className="footer-alt">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="float-right">
                <SocialMedia />
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
