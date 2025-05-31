import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faBoxOpen,
  faUserShield,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800
                        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                        text-white mt-50 px-6">
      
      <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-400" />

      
      <div className="max-w-7xl mx-auto grid gap-12 text-sm
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-8">
       
        <section>
          <h2 className="text-xl font-semibold mb-3">About Us</h2>
          <p className="text-gray-200 text-justify leading-relaxed">
            We craft premium products backed by world-class support.  
            Your satisfaction will always be our first priority.
          </p>
        </section>

       
        <section>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <FooterLink icon={faHome}       label="Home"     href="/"         />
            <FooterLink icon={faInfoCircle} label="About"    href="/about"    />
            <FooterLink icon={faBoxOpen}    label="Products" href="/products" />
            <FooterLink icon={faUserShield} label="Privacy Policy" href="/privacy" />
          </ul>
        </section>

        
        <section>
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <ContactLine icon={faEnvelope} text="support@example.com" />
          <ContactLine icon={faPhone}    text="+1 234 567 890"      />
          <ContactLine icon={faMapMarkerAlt} text="123 Main St, City, Country" />
        </section>

       
        <section className="flex lg:justify-end">
          <div className="flex flex-col gap-4 lg:gap-6">
            <IconButton icon={faHome}       href="/"         tooltip="Home"          />
            <IconButton icon={faInfoCircle} href="/about"    tooltip="About"         />
            <IconButton icon={faBoxOpen}    href="/products" tooltip="Products"      />
            <IconButton icon={faUserShield} href="/privacy"  tooltip="Privacy Policy"/>
          </div>
        </section>
      </div>

      {/* ---------- Bottom strip ---------- */}
      <div className="bg-black/10 text-center py-4 text-xs tracking-wide">
        &copy; {new Date().getFullYear()} <strong>YourCompany</strong>. All rights reserved.
      </div>
    </footer>
  );
};


const FooterLink = ({ icon, label, href }) => (
  <li>
    <a href={href} className="flex items-center gap-2 hover:text-cyan-300 transition">
      <FontAwesomeIcon icon={icon} className="w-4" /> {label}
    </a>
  </li>
);

const ContactLine = ({ icon, text }) => (
  <p className="flex items-center gap-2 text-gray-200 mb-2">
    <FontAwesomeIcon icon={icon} className="w-4" /> {text}
  </p>
);

const IconButton = ({ icon, href, tooltip }) => (
  <a
    href={href}
    className="relative group p-3 rounded-full bg-white/10 hover:bg-white/20
               backdrop-blur-md transition"
    aria-label={tooltip}
  >
    <FontAwesomeIcon icon={icon} className="w-5 h-5" />
    
    <span className="absolute -left-1/2 -top-9 translate-x-1/2
                     scale-0 group-hover:scale-100 group-hover:-translate-y-1
                     origin-bottom bg-black text-white text-xs
                     px-2 py-1 rounded-md transition-all pointer-events-none">
      {tooltip}
    </span>
  </a>
);

export default Footer;
