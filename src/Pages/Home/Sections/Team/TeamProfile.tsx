import React, { ReactElement } from 'react';

export type TeamProfileProps = {
  profileImage: string;
  name: string;
  series: string;
};
export type TeamProfileState = {
  hover: boolean;
};

const imageStyles = {
  cursor: 'pointer',
  WebkitFilter: 'grayscale(100%)',
  msFilter: 'grayscale(100%)',
  filter: 'grayscale(100%)',
};
const imageStylesHover = {
  cursor: 'pointer',
  WebkitFilter: 'grayscale(0%)',
  msFilter: 'grayscale(0%)',
  filter: 'grayscale(0%)',
};

export class TeamProfile extends React.Component<TeamProfileProps, TeamProfileState> {
  constructor(props: Readonly<TeamProfileProps>) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  public render(): ReactElement {
    const { profileImage, name, series } = this.props;

    return (
      <div className="col-lg-3 col-sm-6">
        <div className="team-box text-center">
          <div className="team-wrapper">
            <div className="team-member">
              <img
                onMouseEnter={(): void => this.setState({ hover: true })}
                onMouseLeave={(): void => this.setState({ hover: false })}
                alt={name}
                src={profileImage}
                className="img-fluid"
                style={this.state.hover ? imageStylesHover : imageStyles}
              />
            </div>
          </div>
          <h4 className="team-name">{name}</h4>
          <p className="text-uppercase team-designation">{series}</p>
        </div>
      </div>
    );
  }
}
