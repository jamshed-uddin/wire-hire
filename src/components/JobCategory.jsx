import React, { useEffect, useState } from "react";

const JobCategory = () => {
  const [jobCategories, setJobCategories] = useState([]);
  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setJobCategories(data.jobCategories));
  }, []);

  return (
    <div className="px-6 lg:px-16 text-center lg:mb-6">
      <h1 className="text-4xl font-bold py-2">Job Category List</h1>
      <p className="text-xl font-light">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="lg:flex gap-6 justify-center text-start py-6">
        {jobCategories.map((jobCategory) => (
          <div
            key={jobCategory.id}
            className="border-2 w-1/2 mx-auto lg:w-full py-8 px-6 m-3 my-border bg-[#ffffffd1] cursor-pointer transition duration-300 hover:shadow-xl"
          >
            <img className="mx-auto mb-4" src={jobCategory.logo} alt="" />
            <h3 className="text-2xl font-semibold">{jobCategory.name}</h3>
            <p className="font-semibold mt-1 ">
              Available job: {jobCategory.available}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
