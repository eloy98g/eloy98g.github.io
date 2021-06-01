import React from 'react';

// Logos
import github from '../assets/logos/github.png';

const ProjectItem = ({ data }) => {
  const { title, subtitle, desc, team, techs, images, headers } = data;
  return (
    <div className="project">
      <div className="hide top">
        <p className="hide-title">{title}</p>
        <p className="hide-subtitle">{subtitle}</p>
      </div>
      <div className="hide bottom">
        {headers.map((e) => {
          return (
            <img
              key={headers.indexOf(e)}
              className="hide-logo"
              src={e}
              alt="logo"
            />
          );
        })}
      </div>
      <div className="description">
        <div className="header">
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className="details">
          <p className="desc">{desc}</p>
          <div className="team">
            <p>Resto del equipo: </p>
            {team.map((e) => {
              return (
                <a
                  href={`https://github.com/${e.user}`}
                  className="user"
                  target="blank"
                >
                  <img src={github} alt="" title={e.name} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="tech">
          {techs.map((e) => {
            return <img src={e.icon} alt="" className="logo" title={e.name} />;
          })}
        </div>
      </div>
      <div className="images">
        {images.map((e) => {
          return <img src={e} alt="" />;
        })}
      </div>
    </div>
  );
};

export default ProjectItem;
