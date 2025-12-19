import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "hearing-aids" },
    { name: "Shop by Category", id: "hearing-loss" },
    { name: "Services", id: "resources" },
    { name: "Book Trial", id: "about-us" },
    { name: "Contact", id: "footer" },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-blue-500 p-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <span
          onClick={() => scrollToSection("home")}
          className="text-white text-2xl font-bold cursor-pointer"
        >
          SOUNDSBRIDGE
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-gray-300 transition"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-500 px-6 pt-4 pb-6">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="text-white text-lg block"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
