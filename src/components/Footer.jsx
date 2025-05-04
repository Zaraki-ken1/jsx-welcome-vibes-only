
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 text-center text-gray-600 border-t mt-12">
      <p>© {new Date().getFullYear()} Your App Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
