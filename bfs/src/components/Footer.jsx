import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
      <div className="px-4 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] justify-between items-center md:items-start gap-8">
          {/* Company Section */}
          <div className="text-center md:text-start">
            <h2 className="text-2xl font-semibold">
              Bombay Facility Service (BFS)
            </h2>
            <p className="mt-2">
              Bombay Facility Service is a leading security service provider in
              Mumbai, offering skilled personnel for various services. Our team
              is highly trained and committed to excellence, ensuring the safety
              and satisfaction of our clients.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-xl mb-2">Quick Links</h3>
            <ul className="text-center md:text-start">
              <li>
                <a href="/home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-xl mb-2">Services</h3>
            <ul className="text-center md:text-start">
              <li>Bodyguard Services</li>
              <li>Security Guard Services</li>
              <li>Cook Services</li>
              <li>Housekeeping Services</li>
              <li>Custom Services</li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-4 md:space-y-2 text-center md:text-left">
              <p className="flex items-center justify-center md:justify-start">
                <a
                  href="https://www.google.com/maps/search/?q=Jai+Ambe+Soc.+MG+Cross,+Road+No.3,+Kandivali+West,+Mumbai-67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <MapPin className="mr-1 text-gray-400 flex-shrink-0" />
                  Jai Ambe Soc. MG Cross, Road No.3, Kandivali West, Mumbai-67.
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <a href="tel:+911234567890" className="flex items-center">
                  <Phone className="mr-2 text-gray-400" />
                  +91-123-456-7890
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <a href="mailto:contact@bfs.com" className="flex items-center">
                  <Mail className="mr-2 text-gray-400" />
                  contact@bfs.com
                </a>
              </p>
            </div>

            {/* Social Media Section */}
            <div className="mt-4">
              <h3 className="font-semibold text-xl mb-2 text-center md:text-left">
                Follow Us
              </h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-white"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 hover:text-white"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-white"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} Bombay Facility Service. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
