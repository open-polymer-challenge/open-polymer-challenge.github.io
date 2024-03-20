import React from 'react';

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa' }}>
      <p>&copy; {new Date().getFullYear()} Open Polymer Challenge</p>
      <p>Contact us: <a className="text-red-500" href="mailto:openpolymerchallenge@gmail.com">openpolymerchallenge@gmail.com</a></p>
    </footer>
  );
}

export default Footer;