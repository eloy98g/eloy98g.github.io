import React from 'react';
import '../styles/widgets/HoverPopup.scss';

const HoverPopup = (props) => {
  const { title, description, resume } = props;

  return (
    <div className="popup">
      <p className="title">{title}</p>
      <div className="content">
        <p className="description">{description}</p>
        <p className="resume">
          {resume}
        </p>
      </div>
    </div>
  );
};

export default HoverPopup;
