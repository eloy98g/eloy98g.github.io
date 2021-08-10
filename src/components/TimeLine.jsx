// React
import React, { useEffect } from 'react';

// Widgets
import HoverPopup from '../widgets/HoverPopup';
import timelineAnimation from '../animations/TimelineAnimation';
// Assets
import uco from '../assets/uco.png';
import clapfy from '../assets/clapfy.png';
import labora from '../assets/labora.png';

// Styles
import '../styles/components/TimeLine.scss';

const TimeLine = () => {
  useEffect(() => {
    timelineAnimation();
  });

  return (
    <div className="timeline">
      <div className="content">
        <p className="tl_title">El recorrido</p>
        <div className="tl-content">
          <div className="trigger">
            <div className="uco ybar">
              <a href="http://www.uco.es/" className="link" target="blank">
                <img className="img" src={uco} alt="uco" />
                <HoverPopup
                  vertical
                  title="UCO"
                  description="Universidad de Córdoba"
                  resume="Ingeniería informática en la UCO con mención en computadores"
                  trigger="uco"
                />
              </a>
              <p className="text">2016</p>
            </div>
            <div className="clapfy ybar">
              <a href="https://clapfy.es/" className="link" target="blank">
                <img className="img" src={clapfy} alt="clapfy" />
                <HoverPopup
                  title="Clapfy"
                  description="Madrid. Consultora b2b"
                  resume="Tras una fase de formación frontend a nivel profesional, trabajé con un equipo en el que apliqué metodologías ágiles tanto en diseño como en desarrollo de proyectos en producción"
                  trigger="clapfy"
                />
              </a>
              <p className="text">Oct 20 - Abr 21</p>
            </div>
            <p className="labora ybar">
              <a href="https://www.labora.app/" className="link" target="blank">
                <img className="img" src={labora} alt="labora" />
                <HoverPopup
                  title="Labora"
                  description="Madrid. Startup"
                  resume="Junto al equipo de Clapfy, comenzamos a desarrollar un producto propio destinado a facilitar al máximo las contrataciones de las empresas"
                  trigger="labora"
                />
              </a>
              <p className="text">Abr 21 - now</p>
            </p>
          </div>
        </div>
        <div className="line" />
      </div>
    </div>
  );
};

export default TimeLine;
