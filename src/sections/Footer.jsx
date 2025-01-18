import { PhoneIcon } from 'lucide-react';
import { TextHoverEffect } from '../components/TextHoverEffect';
import { firstName, lastName } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="c-space pt-7 pb-3 text-sm flex justify-between items-center flex-wrap gap-2">
      <TextHoverEffect text="AYMEN" />
      <div className="text-white-500  flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex flex-col absolute right-3 gap-3">
        <a href="https://github.com/aymnart" target="_blank" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.linkedin.com/in/aymenamara/" target="_blank" className="social-icon">
          <img src="/assets/linkedin.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a href="tel:+21653863641" className="social-icon">
          <PhoneIcon />
        </a>
      </div>
      <p className="text-white-500">
        © {currentYear} {firstName} {lastName} · All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
