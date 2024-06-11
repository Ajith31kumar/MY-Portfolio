import React from 'react';
import CVResume from '../../assets/Ajith_Kumar_CV_Resume.pdf'; // Update the filename if needed

const CTA = () => {
  const viewResume = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "/resume"; // Redirect to resume page
    } else {
      window.open(CVResume, '_blank'); // Open PDF in a new tab for non-mobile devices
    }
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
