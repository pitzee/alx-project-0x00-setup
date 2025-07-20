import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-4 px-8 text-center mt-8">
      <div>
        &copy; {new Date().getFullYear()} StayFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
