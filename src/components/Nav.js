import React from "react";

const Nav = () => {
  const toggleDropdown = (id) => {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle("hidden");
  };

  return (
    <nav className="bg-white-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-black">
            <a href="/" className="text-lg font-bold">
              SIPBN Inc
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="/Home" className="text-black hover:text-blue-800">
              Home
            </a>
            <a href="/about" className="text-black hover:text-blue-800">
              About Us
            </a>
            <a href="/contact" className="text-black hover:text-blue-800">
              Contact Us
            </a>
            <div className="relative inline-block text-left">
              <div
                className="relative inline-block text-left"
                onMouseEnter={() => toggleDropdown("capTech2024Dropdown")}
                onMouseLeave={() => toggleDropdown("capTech2024Dropdown")}
              >
                <button className="text-black  hover:text-blue-800">
                  #capTech2024
                </button>
                <div
                  id="capTech2024Dropdown"
                  className="absolute hidden bg-white"
                >
                  <a
                    href="/capTech2024Option1"
                    className="block px-4 py-2 text-s hover:text-blue-800"
                  >
                    Patrons
                  </a>
                  <a
                    href="/capTech2024Option2"
                    className="block px-4 py-2 text-s hover:text-blue-800"
                  >
                    Panel list and Speakers
                  </a>
                  <a
                    href="/capTech2024Option3"
                    className="block px-4 py-2 text-sm"
                  >
                    #capTech2023 Highlights
                  </a>
                </div>
              </div>
            </div>
            <div className="relative inline-block text-left">
              <div
                className="relative inline-block text-left"
                onMouseEnter={() => toggleDropdown("capTech2023Dropdown")}
                onMouseLeave={() => toggleDropdown("capTech2023Dropdown")}
              >
                <button className="text-black  hover:text-blue-800">
                  #capTech2023
                </button>
                <div
                  id="capTech2023Dropdown"
                  className="absolute hidden bg-white"
                >
                  <a
                    href="/capTech2023Option1"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
                  >
                    Option 1
                  </a>
                  <a
                    href="/capTech2023Option2"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
                  >
                    Option 2
                  </a>
                  <a
                    href="/capTech2023Option3"
                    className="block px-4 py-2 text-sm"
                  >
                    Option 3
                  </a>
                </div>
              </div>
            </div>
            <div className="relative inline-block text-left">
              <div
                className="relative inline-block text-left"
                onMouseEnter={() => toggleDropdown("eventsDropdown")}
                onMouseLeave={() => toggleDropdown("eventsDropdown")}
              >
                <button className="text-black hover:text-blue-800">
                  #Events
                </button>
                <div id="eventsDropdown" className="absolute hidden bg-white">
                  <a
                    href="/eventsOption1"
                    className="block px-4 py-2 text-sm  hover:text-blue-800"
                  >
                    Option 1
                  </a>
                  <a
                    href="/eventsOption2"
                    className="block px-4 py-2 text-sm  hover:text-blue-800"
                  >
                    Option 2
                  </a>
                  <a
                    href="/eventsOption3"
                    className="block px-4 py-2 text-sm  hover:text-blue-800"
                  >
                    Option 3
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
