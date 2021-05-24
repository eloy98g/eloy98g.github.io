import React from 'react';
import '../styles/widgets/UnderlinedText.scss';

const UnderlinedText = ({ text, style, controller }) => {
  return (
    <div className="underline-text">
      <p className="mainText">{text}</p>
      <div className={`underline ${controller}`} style={style} />
    </div>
  );
};
export default UnderlinedText;
