import React from 'react';
import CV from '../../assets/Ajith Kumar K CV Resume .pdf'; // Adjust the file path as necessary

const CTA = () => {
  const viewResume = () => {
    window.open(CV, '_blank');
  };

  return (
    <div className="cta">
      <button onClick={viewResume} className="btn btn-primary">
        View Resume
      </button>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
