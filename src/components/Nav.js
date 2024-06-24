import React, { useState } from "react";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (id) => {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle("hidden");
  };

  return (
    <nav className="bg-white p-4 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-black">
            <a href="/" className="text-lg font-bold">
              SIPBN Inc
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/Home" className="text-black hover:text-blue-800">
              Home
            </a>
            <div className="relative inline-block text-left">
              <div
                className="relative inline-block text-left"
                onMouseEnter={() => toggleDropdown("aboutUsDropdown")}
                onMouseLeave={() => toggleDropdown("aboutUsDropdown")}
              >
                <button className="text-black hover:text-blue-800">
                  About <span>▼</span>
                </button>
                <div
                  id="aboutUsDropdown"
                  className="absolute hidden bg-white shadow-lg"
                >
                  <a
                    href="/about/mission"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
                  >
                    Mission
                  </a>
                  <a
                    href="/about/team"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
                  >
                    Team
                  </a>
                  <a
                    href="/about/careers"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
                  >
                    Careers
                  </a>
                </div>
              </div>
            </div>
            <a href="/contact" className="text-black hover:text-blue-800">
              Contact Us
            </a>
            <div className="relative inline-block text-left">
              <div
                className="relative inline-block text-left"
                onMouseEnter={() => toggleDropdown("capTech2024Dropdown")}
                onMouseLeave={() => toggleDropdown("capTech2024Dropdown")}
              >
                <button className="text-black hover:text-blue-800">
                  #capTech2024 <span>▼</span>
                </button>
                <div
                  id="capTech2024Dropdown"
                  className="absolute hidden bg-white shadow-lg"
                >
                  <a
                    href="/capTech2024Option1"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
                  >
                    Patrons
                  </a>
                  <a
                    href="/capTech2024Option2"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
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
                <button className="text-black hover:text-blue-800">
                  #capTech2023 <span>▼</span>
                </button>
                <div
                  id="capTech2023Dropdown"
                  className="absolute hidden bg-white shadow-lg"
                >
                  <a
                    href="/capTech2023Option1"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
                  >
                    Agenda
                  </a>
                  <a
                    href="/capTech2023Option2"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
                  >
                    Panel list and Speakers
                  </a>
                  <a
                    href="/capTech2023Option3"
                    className="block px-4 py-2 text-sm"
                  >
                    Booklet
                  </a>
                  <a
                    href="/capTech2023Option4"
                    className="block px-4 py-2 text-sm"
                  >
                    Highlights
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
                  #Events <span>▼</span>
                </button>
                <div
                  id="eventsDropdown"
                  className="absolute hidden bg-white shadow-lg"
                >
                  <div className="relative">
                    <div
                      className="relative inline-block text-left"
                      onMouseEnter={() =>
                        toggleDropdown("upcomingEventsDropdown")
                      }
                      onMouseLeave={() =>
                        toggleDropdown("upcomingEventsDropdown")
                      }
                    >
                      <a
                        href="/eventsOption2"
                        className="block px-4 py-2 text-sm hover:text-blue-800"
                      >
                        Upcoming Events <span>▼</span>
                      </a>
                      <div
                        id="upcomingEventsDropdown"
                        className="absolute hidden bg-white shadow-lg"
                      >
                        <a
                          href="/events/upcoming/webinars"
                          className="block px-4 py-2 text-sm hover:text-blue-800"
                        >
                          Webinars
                        </a>
                        <a
                          href="/events/upcoming/conferences"
                          className="block px-4 py-2 text-sm hover:text-blue-800"
                        >
                          Conferences
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    href="/eventsOption1"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
                  >
                    #capTech2022
                  </a>
                  <div className="relative">
                    <div
                      className="relative inline-block text-left"
                      onMouseEnter={() => toggleDropdown("pastEventsDropdown")}
                      onMouseLeave={() => toggleDropdown("pastEventsDropdown")}
                    >
                      <a
                        href="/eventsOption3"
                        className="block px-4 py-2 text-sm hover:text-blue-800"
                      >
                        Past Events <span>▼</span>
                      </a>
                      <div
                        id="pastEventsDropdown"
                        className="absolute hidden bg-white shadow-lg"
                      >
                        <a
                          href="/events/past/2021"
                          className="block px-4 py-2 text-sm hover:text-blue-800"
                        >
                          2021
                        </a>
                        <a
                          href="/events/past/2020"
                          className="block px-4 py-2 text-sm hover:text-blue-800"
                        >
                          2020
                        </a>
                        <a
                          href="/events/past/2019"
                          className="block px-4 py-2 text-sm hover:text-blue-800"
                        >
                          2019
                        </a>
                      </div>
                    </div>
                  </div>
                  <a
                    href="/eventsOption3"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
                  >
                    Upcoming Delegations
                  </a>
                </div>
              </div>
            </div>
            {/* New Options: Global Pitching and Membership */}
            <div className="relative inline-block text-left">
              <div
                className="relative inline-block text-left"
                onMouseEnter={() => toggleDropdown("globalPitchingDropdown")}
                onMouseLeave={() => toggleDropdown("globalPitchingDropdown")}
              >
                <button className="text-black hover:text-blue-800">
                  Global Pitching <span>▼</span>
                </button>
                <div
                  id="globalPitchingDropdown"
                  className="absolute hidden bg-white shadow-lg"
                >
                  <a
                    href="/globalPitchingOption1"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
                  >
                    Option 1
                  </a>
                  <a
                    href="/globalPitchingOption2"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
                  >
                    Option 2
                  </a>
                </div>
              </div>
            </div>
            <div className="relative inline-block text-left">
              <div
                className="relative inline-block text-left"
                onMouseEnter={() => toggleDropdown("membershipDropdown")}
                onMouseLeave={() => toggleDropdown("membershipDropdown")}
              >
                <button className="text-black hover:text-blue-800">
                  Membership <span>▼</span>
                </button>
                <div
                  id="membershipDropdown"
                  className="absolute hidden bg-white shadow-lg"
                >
                  <a
                    href="/membershipOption1"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
                  >
                    Option 1
                  </a>
                  <a
                    href="/membershipOption2"
                    className="block px-4 py-2 text-sm hover:text-blue-800"
                  >
                    Option 2
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 p-4 bg-white shadow-lg">
            <a href="/Home" className="text-black hover:text-blue-800">
              Home
            </a>
            <div className="relative inline-block text-left">
              <button
                onClick={() => toggleDropdown("mobileAboutUsDropdown")}
                className="text-black hover:text-blue-800"
              >
                About Us <span>▼</span>
              </button>
              <div
                id="mobileAboutUsDropdown"
                className="hidden bg-white shadow-lg"
              >
                <a
                  href="/about/mission"
                  className="block px-4 py-2 text-sm hover:text-blue-800"
                >
                  Mission
                </a>
                <a
                  href="/about/team"
                  className="block px-4 py-2 text-sm hover:text-blue-800"
                >
                  Team
                </a>
                <a
                  href="/about/careers"
                  className="block px-4 py-2 text-sm hover:text-blue-800"
                >
                  Careers
                </a>
              </div>
            </div>
            <a href="/contact" className="text-black hover:text-blue-800">
              Contact Us
            </a>
            <div className="relative inline-block text-left">
              <button
                onClick={() => toggleDropdown("mobileCapTech2024Dropdown")}
                className="text-black hover:text-blue-800"
              >
                #capTech2024 <span>▼</span>
              </button>
              <div
                id="mobileCapTech2024Dropdown"
                className="hidden bg-white shadow-lg"
              >
                <a
                  href="/capTech2024Option1"
                  className="block px-4 py-2 text-sm hover:text-blue-800"
                >
                  Patrons
                </a>
                <a
                  href="/capTech2024Option2"
                  className="block px-4 py-2 text-sm hover:text-blue-800"
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
            <div className="relative inline-block text-left">
              <button
                onClick={() => toggleDropdown("mobileCapTech2023Dropdown")}
                className="text-black hover:text-blue-800"
              >
                #capTech2023 <span>▼</span>
              </button>
              <div
                id="mobileCapTech2023Dropdown"
                className="hidden bg-white shadow-lg"
              >
                <a
                  href="/capTech2023Option1"
                  className="block px-4 py-2 text-sm hover:text-blue-800"
                >
                  Agenda
                </a>
                <a
                  href="/capTech2023Option2"
                  className="block px-4 py-2 text-sm hover:text-blue-800"
                >
                  Panel list and Speakers
                </a>
                <a
                  href="/capTech2023Option3"
                  className="block px-4 py-2 text-sm"
                >
                  Booklet
                </a>
                <a
                  href="/capTech2023Option4"
                  className="block px-4 py-2 text-sm"
                >
                  Highlights
                </a>
              </div>
            </div>
            <div className="relative inline-block text-left">
              <button
                onClick={() => toggleDropdown("mobileEventsDropdown")}
                className="text-black hover:text-blue-800"
              >
                #Events <span>▼</span>
              </button>
              <div
                id="mobileEventsDropdown"
                className="hidden bg-white shadow-lg"
              >
                <div className="relative">
                  <div
                    className="relative inline-block text-left"
                    onMouseEnter={() =>
                      toggleDropdown("mobileUpcomingEventsDropdown")
                    }
                    onMouseLeave={() =>
                      toggleDropdown("mobileUpcomingEventsDropdown")
                    }
                  >
                    <a
                      href="/eventsOption2"
                      className="block px-4 py-2 text-sm hover:text-blue-800"
                    >
                      Upcoming Events <span>▼</span>
                    </a>
                    <div
                      id="mobileUpcomingEventsDropdown"
                      className="absolute hidden bg-white shadow-lg"
                    >
                      <a
                        href="/events/upcoming/webinars"
                        className="block px-4 py-2 text-sm hover:text-blue-800"
                      >
                        Webinars
                      </a>
                      <a
                        href="/events/upcoming/conferences"
                        className="block px-4 py-2 text-sm hover:text-blue-800"
                      >
                        Conferences
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href="/eventsOption1"
                  className="block px-4 py-2 text-sm hover:text-blue-800"
                >
                  #capTech2022
                </a>
                <div className="relative">
                  <div
                    className="relative inline-block text-left"
                    onMouseEnter={() =>
                      toggleDropdown("mobilePastEventsDropdown")
                    }
                    onMouseLeave={() =>
                      toggleDropdown("mobilePastEventsDropdown")
                    }
                  >
                    <a
                      href="/eventsOption3"
                      className="block px-4 py-2 text-sm hover:text-blue-800"
                    >
                      Past Events <span>▼</span>
                    </a>
                    <div
                      id="mobilePastEventsDropdown"
                      className="absolute hidden bg-white shadow-lg"
                    >
                      <a
                        href="/events/past/2021"
                        className="block px-4 py-2 text-sm hover:text-blue-800"
                      >
                        2021
                      </a>
                      <a
                        href="/events/past/2020"
                        className="block px-4 py-2 text-sm hover:text-blue-800"
                      >
                        2020
                      </a>
                      <a
                        href="/events/past/2019"
                        className="block px-4 py-2 text-sm hover:text-blue-800"
                      >
                        2019
                      </a>
                    </div>
                  </div>
                </div>
                <a
                  href="/eventsOption3"
                  className="block px-4 py-2 text-sm hover:text-blue-800"
                >
                  Upcoming Delegations
                </a>
              </div>
            </div>
            {/* Mobile Dropdowns for Global Pitching and Membership */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => toggleDropdown("mobileGlobalPitchingDropdown")}
                className="text-black hover:text-blue-800"
              >
                Global Pitching <span>▼</span>
              </button>
              <div
                id="mobileGlobalPitchingDropdown"
                className="hidden bg-white shadow-lg"
              >
                <a
                  href="/globalPitchingOption1"
                  className="block px-4 py-2 text-sm hover:text-blue-800"
                >
                  Option 1
                </a>
                <a
                  href="/globalPitchingOption2"
                  className="block px-4 py-2 text-sm hover:text-blue-800"
                >
                  Option 2
                </a>
              </div>
            </div>
            <div className="relative inline-block text-left">
              <button
                onClick={() => toggleDropdown("mobileMembershipDropdown")}
                className="text-black hover:text-blue-800"
              >
                Membership <span>▼</span>
              </button>
              <div
                id="mobileMembershipDropdown"
                className="hidden bg-white shadow-lg"
              >
                <a
                  href="/membershipOption1"
                  className="block px-4 py-2 text-sm hover:text-blue-800"
                >
                  Option 1
                </a>
                <a
                  href="/membershipOption2"
                  className="block px-4 py-2 text-sm hover:text-blue-800"
                >
                  Option 2
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
