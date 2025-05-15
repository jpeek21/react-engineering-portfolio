import React from 'react';
import './Research.css';
import researchbg from '../../Assets/researchbg.png'; // ✅ Correct
function Research() {
  return (
     <div className='page'>
      <h1>Research</h1>
      <img src={researchbg} alt="researchbg" className="researchbg" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae venenatis ex.</p>
    </div>
  );
}

export default Research;
