import React from "react";
import Banner from "./Banner";
import JobCategory from "./JobCategory";
import FeaturedJob from "./JobList/FeaturedJob";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeaturedJob></FeaturedJob>
    </>
  );
};

export default Home;
