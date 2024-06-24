import React from "react";

const SIPBNSection = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h3 className="text-2xl font-semibold">Message from President</h3>
        </div>
        <div className="text-left">
          <p>
            The purpose of Sydney Investors, Professionals and Business
            Networking Group Incorporated (“SIPBN”) is to connect people and
            business with the opportunity and entrepreneurship across different
            parts of the world including Australia, US, India, UK, Europe,
            China, Hong Kong, Israel and the Middle East. At SIPBN, you will
            find a platform to leverage your business or enterprise and have
            access to the networks, information, and resources to expand your
            business or investments into various markets at one place.
          </p>
          <p>
            We facilitate the engagement to and from Australia through our
            extensive contacts in the government, trading, and the business
            world. Our members and partners benefit from our networking events,
            information sessions, trade delegations / visits and receptions.
          </p>
          <h4 className="text-xl font-semibold mt-8">Raman Bhalla</h4>
        </div>
        <div className="mt-12">
          <h5 className="text-lg font-semibold mb-4">
            Secure your #CapTech2024 ticket
          </h5>
          <p className="text-white mb-4">
            Early bird discount 20% till 30th June 2024
          </p>
          <a
            href="https://www.eventbrite.com.au/e/captech2024-where-business-growth-meets-capital-icc-sydney-tickets-772015889307?aff=oddtdtcreator)"
            target="_blank"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {/* Repeat this block for each icon/link */}
          <div className="text-center">
            <a href="https://sipbn.com.au/membership/">
              <img
                src="https://sipbn.com.au/wp-content/uploads/2020/09/about-icon1.png"
                alt=""
                className="mx-auto"
              />
              <h4 className="mt-2">Apply for Membership</h4>
              <h4 className="mt-2"> News </h4>
              <h4 className="mt-2">Events</h4>
              <h4 className="mt-2">Subscribe</h4>
            </a>
          </div>
          {/* End of block */}
        </div>
      </div>
    </div>
  );
};

export default SIPBNSection;
