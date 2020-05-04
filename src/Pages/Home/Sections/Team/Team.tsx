import React, { ReactElement } from 'react';
import joshProfileImage from './dfr-josh.jpg';
import nickProfileImage from './dfr-nick.jpg';
import mickProfileImage from './dfr-mick.jpg';
import robProfileImage from './dfr-rob.jpg';
import { TeamProfile, TeamProfileProps } from './TeamProfile';

const teamMembers: TeamProfileProps[] = [
  {
    profileImage: joshProfileImage,
    name: 'Joshy',
    series: 'Formula Renault 3.5',
  },
  {
    profileImage: nickProfileImage,
    name: 'Nick',
    series: 'Formula Renault 3.5',
  },
  {
    profileImage: robProfileImage,
    name: 'Rob',
    series: 'Formula Renault 3.5',
  },
  {
    profileImage: mickProfileImage,
    name: 'Mick',
    series: 'F3',
  },
];

export class Team extends React.Component {
  public render(): ReactElement {
    let i = 0;
    const profiles = teamMembers.map((teamMember: TeamProfileProps) => {
      i++;

      return (
        <TeamProfile key={i} profileImage={teamMember.profileImage} name={teamMember.name} series={teamMember.series} />
      );
    });

    return (
      <section className="section pt-4 bg-light" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h1 className="section-title text-center">Team</h1>
            </div>
          </div>
          <div className="row">{profiles}</div>
        </div>
      </section>
    );
  }
}
