import React, { ReactElement } from 'react';

export type TeamProfileProps = {
  profileImage: string;
  name: string;
  series: string;
};

export class TeamProfile extends React.Component<TeamProfileProps> {
  public render(): ReactElement {
    const { profileImage, name, series } = this.props;
    return (
      <div className="col-lg-3 col-sm-6">
        <div className="team-box text-center">
          <div className="team-wrapper">
            <div className="team-member">
              <img alt="Josh" src={profileImage} className="img-fluid rounded" />
            </div>
          </div>
          <h4 className="team-name">{name}</h4>
          <p className="text-uppercase team-designation">{series}</p>
        </div>
      </div>
    );
  }
}
