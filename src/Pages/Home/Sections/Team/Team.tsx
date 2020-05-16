import React, { ReactElement } from 'react';
import joshProfileImage from './dfr-josh.jpg';
import nickProfileImage from './dfr-nick.jpg';
import mickProfileImage from './dfr-mick.jpg';
import russProfileImage from './dfr-russ.jpg';
import robProfileImage from './dfr-rob.jpg';
import tedProfileImage from './dfr-ted.jpg';
import edProfileImage from './dfr-ed.jpg';
import malbsProfileImage from './dfr-malbs.jpg';
import brentProfileImage from './dfr-brent.jpg';
import nickmProfileImage from './dfr-nickm.jpg';
import jayProfileImage from './dfr-jay.jpg';
import { TeamProfile, TeamProfileProps } from './TeamProfile';

const teamMembers: TeamProfileProps[] = [
  {
    profileImage: joshProfileImage,
    name: 'Joshy Stuart',
    series: 'Formula Renault 3.5',
  },
  {
    profileImage: nickProfileImage,
    name: 'Nick Bradford',
    series: 'Formula Renault 3.5',
  },
  {
    profileImage: robProfileImage,
    name: 'Rob Crouch',
    series: 'Formula Renault 3.5',
  },
  {
    profileImage: russProfileImage,
    name: 'Shane Russel',
    series: 'Formula Renault 3.5',
  },
  {
    profileImage: edProfileImage,
    name: 'Edward Samborski',
    series: 'Formula Renault 3.5',
  },
  {
    profileImage: mickProfileImage,
    name: 'Michael Carew',
    series: 'F3',
  },
  {
    profileImage: tedProfileImage,
    name: 'Theodore Burns',
    series: 'Formula Renault 3.5',
  },
  {
    profileImage: malbsProfileImage,
    name: 'Sean P Malloy',
    series: 'F3',
  },
  {
    profileImage: jayProfileImage,
    name: 'Jay Dixon',
    series: 'F3',
  },
  {
    profileImage: nickmProfileImage,
    name: 'Nick Milani',
    series: 'F3',
  },
  {
    profileImage: brentProfileImage,
    name: 'Brent Mekis',
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
