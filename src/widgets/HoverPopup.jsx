import React from 'react';
import '../styles/widgets/HoverPopup.scss';

const HoverPopup = (props) => {
  const { title, description, trigger } = props;

  return (
    <div className="popup">
      <p className="title">Clapfy</p>
      <div className="content">
        <p className="description">Madrid. Empresa de consultoría</p>
        <p className="experience">
          En los seis meses de duración de las prácticas de empresa, aprendí y
          desarrollé metodologías ágiles tanto en diseño como en desarrollo de
          productos mientras trabajaba en equipo en proyectos en producción
        </p>
      </div>
    </div>
  );
};

export default HoverPopup;
