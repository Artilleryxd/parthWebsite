import React from "react";

const EventsSection = () => {
  return (
    <div>
      <div className="text-center py-12">
        <div className="text-4xl font-bold">Events</div>
        <div className="mt-4">
          <h3 className="text-2xl">Upcoming Events</h3>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-lg">
          <h2>
            <a
              href="https://events.humanitix.com/economic-update-opportunities-and-challenges"
              className="font-semibold"
            >
              Economic Update- Opportunities and Challenges
            </a>
          </h2>
          <p>Event Date: Friday, 28 June 2024</p>
        </div>
        <a
          href="https://events.humanitix.com/economic-update-opportunities-and-challenges"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://sipbn.com.au/wp-content/uploads/2024/05/Cover-Page-4.png"
            alt="Economic Update Event"
            className="max-w-full h-auto"
          />
        </a>

        <div className="text-lg mt-8">
          <h2>
            <a
              href="https://www.eventbrite.com.au/e/captech2024-where-business-growth-meets-capital-icc-sydney-tickets-772015889307"
              className="font-semibold"
            >
              #CapTech2024
            </a>
          </h2>
          <p>Event Date: Tuesday, 26 November 2024</p>
        </div>
        <a
          href="https://www.eventbrite.com.au/e/captech2024-where-business-growth-meets-capital-icc-sydney-tickets-772015889307?aff=oddtdtcreator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://sipbn.com.au/wp-content/uploads/2023/12/CapTech2024_3-4.png"
            alt="CapTech2024 Event"
            className="max-w-full h-auto"
          />
        </a>
      </div>

      <div className="text-center py-12">
        <div className="text-4xl font-bold">Events</div>
        <div className="mt-4">
          <h3 className="text-2xl">Past Events</h3>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
