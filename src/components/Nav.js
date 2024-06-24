import React from "react";

const Nav = () => {
  const toggleDropdown = (id) => {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle("hidden");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <a href="/" className="text-lg font-bold">
              SIPBN Inc
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="/Home" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="/about" className="text-white hover:text-gray-300">
              About Us
            </a>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact Us
            </a>
            <div className="relative inline-block text-left">
              <div
                className="relative inline-block text-left"
                onMouseEnter={() => toggleDropdown("capTech2024Dropdown")}
                onMouseLeave={() => toggleDropdown("capTech2024Dropdown")}
              >
                <button className="text-white hover:text-gray-300">
                  #capTech2024
                </button>
                <div
                  id="capTech2024Dropdown"
                  className="absolute hidden bg-white text-gray-700 pt-1"
                >
                  <a
                    href="/capTech2024Option1"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                  <a
                    href="/capTech2024Option2"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                  <a
                    href="/capTech2024Option3"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Option 3
                  </a>
                </div>
              </div>
              <button
                className="text-white hover:text-gray-300"
                onClick={() => toggleDropdown("capTech2024Dropdown")}
              >
                #capTech2024
              </button>
              <div
                id="capTech2024Dropdown"
                className="absolute hidden bg-white text-gray-700 pt-1"
              >
                <a
                  href="/capTech2024Option1"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Option 1
                </a>
                <a
                  href="/capTech2024Option2"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Option 2
                </a>
                <a
                  href="/capTech2024Option3"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Option 3
                </a>
              </div>
            </div>
            <div className="relative inline-block text-left">
              <button
                className="text-white hover:text-gray-300"
                onClick={() => toggleDropdown("capTech2023Dropdown")}
              >
                #capTech2023
              </button>
              <div
                id="capTech2023Dropdown"
                className="absolute hidden bg-white text-gray-700 pt-1"
              >
                <a
                  href="/capTech2023Option1"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Option 1
                </a>
                <a
                  href="/capTech2023Option2"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Option 2
                </a>
                <a
                  href="/capTech2023Option3"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Option 3
                </a>
              </div>
            </div>
            <div className="relative inline-block text-left">
              <button
                className="text-white hover:text-gray-300"
                onClick={() => toggleDropdown("eventsDropdown")}
              >
                #Events
              </button>
              <div
                id="eventsDropdown"
                className="absolute hidden bg-white text-gray-700 pt-1"
              >
                <a
                  href="/eventsOption1"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Option 1
                </a>
                <a
                  href="/eventsOption2"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Option 2
                </a>
                <a
                  href="/eventsOption3"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Option 3
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
