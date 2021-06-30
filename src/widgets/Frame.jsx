import React from 'react'

const Frame = ({ picture, text, reverse }) => {
  return (
    <div className={reverse ? 'frame reverse' : 'frame'}>
      <div className="copy" style={{ textAlign: 'center' }}>
        <p>{text}</p>
      </div>
      <div className="image">
        <img src={picture} alt="" />
      </div>
    </div>
  );
};

// .frame {
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   height: 100vh;
//   .copy {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: left;
//     font-size: 40px;
//   }

//   .image {
//     width: 50%;
//     display: flex;
//     justify-content: flex-end;
//     align-items: center;

//     img {
//       object-fit: contain;
//       width: 90%;
//       height: 90%;
//     }
//   }

//   &.reverse {
//     flex-direction: row-reverse;
//     .copy {
//       text-align: right;
//     }
//     .image {
//       justify-content: flex-start;
//     }
//   }
// }


export default Frame
