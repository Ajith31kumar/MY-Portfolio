import React from 'react';
import CV from '../../assets/Ajith Kumar K CV Resume .pdf'; // Adjust the file path as necessary

const CTA = () => {
  const viewResume = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile devices, create a download link
      const link = document.createElement('a');
      link.href = CV;
      link.setAttribute('download', 'Ajith Kumar K CV Resume.pdf');
      link.style.display = 'none'; // Hide the link
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // For non-mobile devices, open in a new tab
      window.open(CV, '_blank');
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
