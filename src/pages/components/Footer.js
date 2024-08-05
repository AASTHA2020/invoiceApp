

import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="p-5 text-center">
      <p className="mb-2">Built by Aastha Modi</p>
      <div className="flex justify-center space-x-4">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}
