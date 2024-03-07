import React from 'react';
import CV from '../../assets/My Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;



// export default CTA;
// import React from 'react';

// const CTA = () => {
//   const resumeLink = "https://drive.google.com/file/d/1oyWrQfeiYwnmXMCsDBhaQDF4GIWzT54n/view";

//   return (
//     <div className="cta">
//       <p className="resume">
//         <a className="simple-box" href={resumeLink} target="_blank" rel="noopener noreferrer">
//           Download CV
//         </a>
//       </p>
//       <a href="#contact" className="btn btn-primary">
//         Let's talk
//       </a>
//     </div>
//   );
// };

// export default CTA;

