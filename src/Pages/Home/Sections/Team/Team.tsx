import React, { ReactElement } from 'react';
import joshProfileImage from './dfr-josh.jpg';
import nickProfileImage from './dfr-nick.jpg';
import mickProfileImage from './dfr-mick.jpg';
import russProfileImage from './dfr-russ.jpg';
import robProfileImage from './dfr-rob.jpg';
import tedProfileImage from './dfr-ted.jpg';
import edProfileImage from './dfr-ed.jpg';
import malbsProfileImage from './dfr-malbs.jpg';
import brettProfileImage from './dfr-brett.jpg';
import nickmProfileImage from './dfr-nickm.jpg';
import jayProfileImage from './dfr-jay.jpg';
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
    profileImage: russProfileImage,
    name: 'Russ',
    series: 'Formula Renault 3.5',
  },
  {
    profileImage: edProfileImage,
    name: 'Ed',
    series: 'Formula Renault 3.5',
  },
  {
    profileImage: mickProfileImage,
    name: 'Mick',
    series: 'F3',
  },
  {
    profileImage: tedProfileImage,
    name: 'Ted',
    series: 'Formula Renault 3.5',
  },
  {
    profileImage: malbsProfileImage,
    name: 'Malbs',
    series: 'F3',
  },
  {
    profileImage: jayProfileImage,
    name: 'Jay',
    series: 'F3',
  },
  {
    profileImage: nickmProfileImage,
    name: 'Nick',
    series: 'F3',
  },
  {
    profileImage: brettProfileImage,
    name: 'Brett',
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
