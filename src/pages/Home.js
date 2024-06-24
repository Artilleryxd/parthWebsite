import React from "react";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold">Welcome to SIPBN Inc</h1>
        <p className="mt-4">
          Elevate your business with unparalleled deal-making prowess and a
          commitment to exceptional customer experiences.
        </p>
      </div>
    </div>
  );
};

export default Home;
