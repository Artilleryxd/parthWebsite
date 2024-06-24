import React from "react";
import Nav from "../components/Nav";
import InfiniteText from "../components/InfiniteText";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventsSection from "../components/EventsSection";
// Custom Next Arrow
const NextArrow = ({ className, onClick }) => (
  <div
    className={`${className} custom-next-arrow z-10 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer bg-gray-800 text-white flex justify-center items-center rounded-full h-12 w-12 shadow-lg`}
    onClick={onClick}
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="white"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ className, onClick }) => (
  <div
    className={`${className} custom-prev-arrow z-10 absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer bg-gray-800 text-white flex justify-center items-center rounded-full h-12 w-12 shadow-lg`}
    onClick={onClick}
  >
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="white"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      ></path>
    </svg>
  </div>
);

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Nav />
      <InfiniteText />
      <div className="container mx-auto mt-8">
        <Slider {...settings} className="max-w-screen-lg mx-auto">
          {/* Image containers updated for a more modern aspect ratio and shadow for depth */}
          <div className="aspect-w-16 aspect-h-9 shadow-lg">
            <img
              src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719256302/SIPBN/whvnt0gygce8cfmrbhmr.png"
              alt="Image 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="aspect-w-16 aspect-h-9 shadow-lg">
            <img
              src="https://res.cloudinary.com/dq23wxdum/image/upload/v1719256302/SIPBN/pcdahzqjsjwydlsvkeai.png"
              alt="Image 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* More images can be added here with the same structure */}
        </Slider>
        {/* Four Pillars Section */}
        {/* Promo Block Section */}
        <section className="my-8">
          <div className="flex items-center justify-between bg-gray-800 text-white p-4 rounded shadow-lg">
            <div>
              <h5 className="font-bold text-lg">
                Secure your #CapTech2024 ticket
              </h5>
              <p className="text-white">
                Early bird discount 20% till 30th June 2024
              </p>
            </div>
            <a
              href="https://www.eventbrite.com.au/e/captech2024-where-business-growth-meets-capital-icc-sydney-tickets-772015889307?aff=oddtdtcreator%20)"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block text-center"
            >
              Learn More
            </a>
          </div>
        </section>
        {/* Icon Blurbs Section */}
        <section className="my-8 grid grid-cols-2 gap-4">
          {/* Icon 1: Apply for Membership */}
          <div className="bg-white text-gray-800 p-4 rounded shadow-lg">
            <a
              href="https://sipbn.com.au/membership/"
              className="flex items-center space-x-2"
            >
              <img
                src="https://sipbn.com.au/wp-content/uploads/2020/09/about-icon1.png"
                alt="Membership Icon"
                className="w-12 h-12"
              />
              <span className="text-lg font-bold">Apply for Membership</span>
            </a>
          </div>

          {/* Icon 2: News */}
          <div className="bg-white text-gray-800 p-4 rounded shadow-lg">
            <a
              href="https://sipbn.com.au/news/"
              className="flex items-center space-x-2"
            >
              <img
                src="https://sipbn.com.au/wp-content/uploads/2020/09/icon-about3.png"
                alt="News Icon"
                className="w-12 h-12"
              />
              <span className="text-lg font-bold">News</span>
            </a>
          </div>

          {/* Icon 3: Events */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl">
            <a
              href="https://sipbn.com.au/events/"
              className="flex items-center space-x-4"
            >
              <img
                src="https://sipbn.com.au/wp-content/uploads/2020/09/icon-events.png"
                alt="Events Icon"
                className="w-16 h-16"
              />
              <span className="text-xl font-bold">Events</span>
            </a>
          </div>

          {/* Icon 4: Subscribe */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-xl">
            <a
              href="https://sipbn.com.au/newsletter"
              className="flex items-center space-x-4"
            >
              <img
                src="https://sipbn.com.au/wp-content/uploads/2020/09/icon-acout4.png"
                alt="Subscribe Icon"
                className="w-16 h-16"
              />
              <span className="text-xl font-bold">Subscribe</span>
            </a>
          </div>
        </section>
        <section className="my-8">
          <h1 className="mx-8 mt-20 mb-10 font-semibold text-[25px]">
            The Four Pillars That Empower SIPBN
          </h1>

          <div className="mx-4 flex my-10">
            <div className="shadow-2xl flex-1 mx-3">
              <p className="text-center font-semibold my-10">
                Active Network Connectivity
              </p>
              <p className="text-center my-10 px-6">
                SIPBN membership grants you access via events and strategic
                introductions to an exclusive network of peers in business
                leaders, investors, mergers & acquisitions, private equity,
                family offices, government agencies and peer reviewed service
                providers.
              </p>
            </div>
            <div className="flex-1 shadow-2xl mx-3">
              <p className="text-center font-semibold my-10">
                Active Network Connectivity
              </p>
              <p className="text-center  my-10 px-6">
                SIPBN links members with businesses and reliable service
                providers to enable effective investment and trade outcomes.
                E.g: How to enter a country, the required etiquette, language
                services and market intelligence.
              </p>
            </div>
          </div>

          <div className="mx-4 flex my-10">
            <div className="shadow-2xl flex-1 mx-3">
              <p className="text-center font-semibold my-10">
                Targeted Advocacy to Media and Government
              </p>
              <p className="text-center my-10 px-6">
                SIPBN champions initiatives and lobby for policy approaches that
                foster increased investment and trade opportunities for the
                betterment of all Australians.
              </p>
            </div>
            <div className="flex-1 shadow-2xl mx-3 ">
              <p className="text-center font-semibold my-10">
                Continuous High Value Deal flow
              </p>
              <p className="text-center my-10 px-6">
                The SIPBN platform provides members with the opportunity to
                exchange information on high value business, investment and
                trade deals.
              </p>
            </div>
          </div>
        </section>
        {/* News Section */}
        <section className="my-8 bg-gray-100">
          <div className="container mx-auto">
            <div className="py-8">
              <h2 className="text-3xl font-bold text-center mb-8">
                Latest News
              </h2>
              {/* News items can be added here */}
            </div>
          </div>
        </section>
      </div>

      <EventsSection />
    </div>
  );
};

export default Home;
