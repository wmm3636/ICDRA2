
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Conference Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="/lovable-uploads/icdra19th_logo.png"
                alt="ICDRA 2026 Logo"
                className="h-12 w-auto"
              />
              <div>
                <div className="text-white font-bold text-xl">ICDRA 2026</div>
                <div className="text-gray-300">Saudi Arabia</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              The 20th International Conference of Drug Regulatory Authorities, hosted in the Kingdom of Saudi Arabia.
              Bringing together global regulatory leaders to advance pharmaceutical safety, innovation, and international collaboration.
            </p>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <span className="font-semibold">Date:</span> April 13-17, 2026
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Location:</span> Riyadh, Saudi Arabia
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-emerald-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/registration" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Registration
                </Link>
              </li>
              <li>
                <Link to="/programme" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Programme
                </Link>
              </li>
              <li>
                <Link to="/venue" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Venue
                </Link>
              </li>
              <li>
                <Link to="/visa" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Visa Information
                </Link>
              </li>
              <li>
                <Link to="/accommodation" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Accommodation
                </Link>
              </li>
              <li>
                <Link to="/travel" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">
                  Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-emerald-400">Contact Information</h3>
            <div className="text-gray-300 space-y-3">
              <p className="flex flex-col">
                <span className="font-semibold text-white mb-1">Email:</span>
                <a href="mailto:Icdra2026@sfda.gov.sa" className="hover:text-emerald-400 transition-colors duration-200">
                  Icdra2026@sfda.gov.sa
                </a>
              </p>
              {/* <p className="flex flex-col">
                <span className="font-semibold text-white mb-1">Phone:</span>
                <span>+966 11 XXX XXXX</span>
              </p> */}
              <p className="flex flex-col">
                <span className="font-semibold text-white mb-1">Address:</span>
                <span>Riyadh, Kingdom of Saudi Arabia</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 The 20th ICDRA - Kingdom of Saudi Arabia. All rights reserved
          </p>
          <p className="text-gray-500 text-sm mt-2">
            The event is hosted by the Saudi Food and Drug Authority (SFDA) in collaboration with the Word Health Organization (WHO)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
