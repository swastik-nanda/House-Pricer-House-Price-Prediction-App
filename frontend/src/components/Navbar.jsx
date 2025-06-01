import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Added useNavigate
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "../components/Logo";
import Button from "../components/Button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for auth
  const location = useLocation();
  const navigate = useNavigate(); // To redirect after logout

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Check if user is logged in on mount or when location changes
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location]);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login after logout
  };

  const navbarClasses = isScrolled ? "bg-white shadow-md" : "bg-transparent";

  const navItemClasses =
    "font-medium text-neutral-700 hover:text-[rgb(12,182,167)] transition-colors";
  const activeNavItemClasses = "text-[rgb(12,182,167)] font-semibold";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarClasses}`}
    >
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Logo variant={isScrolled ? "dark" : "dark"} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={
              location.pathname === "/" || location.pathname === "/home"
                ? activeNavItemClasses
                : navItemClasses
            }
          >
            Home
          </Link>
          <Link
            to="/features"
            className={
              location.hash === "features"
                ? activeNavItemClasses
                : navItemClasses
            }
          >
            Features
          </Link>
          <Link
            to="/how-it-works"
            className={
              location.hash === "how-it-works"
                ? activeNavItemClasses
                : navItemClasses
            }
          >
            How It Works
          </Link>
          <Link
            to="/contact"
            className={
              location.hash === "contact"
                ? activeNavItemClasses
                : navItemClasses
            }
          >
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <Button variant="outline" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="primary" size="sm">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-800 hover:text-[rgb(12,182,167)] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg border-t border-neutral-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link
                to="/"
                className={
                  location.pathname === "/" || location.pathname === "/home"
                    ? `py-2 ${activeNavItemClasses}`
                    : `py-2 ${navItemClasses}`
                }
              >
                Home
              </Link>
              <Link
                to="/#features"
                className={
                  location.hash === "#features"
                    ? `py-2 ${activeNavItemClasses}`
                    : `py-2 ${navItemClasses}`
                }
              >
                Features
              </Link>
              <Link
                to="/#how-it-works"
                className={
                  location.hash === "#how-it-works"
                    ? `py-2 ${activeNavItemClasses}`
                    : `py-2 ${navItemClasses}`
                }
              >
                How It Works
              </Link>
              <Link
                to="/#contact"
                className={
                  location.hash === "#contact"
                    ? `py-2 ${activeNavItemClasses}`
                    : `py-2 ${navItemClasses}`
                }
              >
                Contact
              </Link>

              <div className="flex flex-col space-y-2 pt-2">
                {isLoggedIn ? (
                  <Button variant="outline" fullWidth onClick={handleLogout}>
                    Logout
                  </Button>
                ) : (
                  <>
                    <Link to="/login">
                      <Button variant="outline" fullWidth>
                        Log In
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button variant="primary" fullWidth>
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
