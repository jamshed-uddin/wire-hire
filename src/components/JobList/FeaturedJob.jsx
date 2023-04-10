import React, { useEffect, useState } from "react";
import SingleJob from "./SingleJob";

const FeaturedJob = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("jobList.json")
      .then((res) => res.json())
      .then((data) => setFeaturedJobs(data.jobs));
  }, []);

  return (
    <div className=" px-6 lg:px-16 py-8">
      <div className="text-center my-6">
        <h1 className="text-4xl font-bold py-2">Featured Jobs</h1>
        <p className="text-xl font-light">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="lg:grid grid-cols-2 gap-4">
        {featuredJobs?.slice(0, showAll ? 10 : 4).map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        {!showAll ? (
          <button onClick={() => setShowAll(true)} className="my-btn">
            Show All
          </button>
        ) : (
          <button onClick={() => setShowAll(false)} className="my-btn">
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedJob;
