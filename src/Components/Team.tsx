import React, { ReactElement } from 'react';

export class Team extends React.Component {
  public render(): ReactElement {
    return (
      <section className="section pt-4 bg-light" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">Team</h1>
              <div className="section-title-border margin-t-20"></div>
              <p className="section-subtitle text-muted text-center font-secondary padding-t-30">images</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
