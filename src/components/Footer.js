import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer-section py-4" style={{ backgroundColor: '#000'}}>
      <div className="container py-4 px-4 text-center text-white">
        <p className="mb-1" style={{ color: 'rgb(167, 139, 250)' }}>
          © {new Date().getFullYear()} Megan Kanauje Magar. All rights reserved.
        </p>
        <p className="small" style={{ color: 'white' }}>
          Designed & built using React and Bootstrap.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
