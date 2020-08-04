import React from 'react';

const BioData = (props) => {
  const {
    avatar_url,
    name,
    login,
    bio,
    followers,
    following,
    company,
    location,
  } = props.bioData;
  return (
    <div className="VED-bioPanel">
      <img src={avatar_url} className="VED-bioAvatar" alt="Profile avatar" />
      <div className="VED-profileDetails">
        <h2>{name}</h2>
        <h3>{login}</h3>
        <div>{bio}</div>
        <input type="submit" value="Follow"></input>
        <span>...</span>
        <div>
          <span>{followers + ' Followers  '}</span>
          <span>{following + ' Following  '}</span>
          <span>{followers + ' Star  '}</span>
        </div>
        <div>{company}</div>
        <div>{location}</div>
        <div>{location}</div>
        <div>{'supreetsingh.247@gmail.com'}</div>
      </div>
    </div>
  );
};

export default BioData;
