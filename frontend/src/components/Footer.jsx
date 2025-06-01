import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import Logo from "../components/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="container py-12">
        <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-neutral-400 text-sm leading-relaxed">
              HomePricer offers accurate real estate price predictions using
              advanced machine learning algorithms to help you make informed
              property decisions.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#features"
                  className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200 text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/#how-it-works"
                  className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200 text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200 text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200 text-sm"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200 text-sm"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200 text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  className="mr-3 mt-0.5 text-[rgb(12,182,167)] flex-shrink-0"
                  size={18}
                />
                <span className="text-neutral-400 text-sm leading-relaxed">
                  123 Property Lane
                  <br />
                  Real Estate City, RE 54321
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  className="mr-3 text-[rgb(12,182,167)] flex-shrink-0"
                  size={18}
                />
                <a
                  href="tel:+11234567890"
                  className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200 text-sm"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail
                  className="mr-3 text-[rgb(12,182,167)] flex-shrink-0"
                  size={18}
                />
                <a
                  href="mailto:info@homepricer.com"
                  className="text-neutral-400 hover:text-[rgb(12,182,167)] transition-colors duration-200 text-sm"
                >
                  info@homepricer.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} HomePricer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
