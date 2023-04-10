import React from "react";

const FeaturedJob = () => {
  const [featuredJob, setFeaturedJob] = useState([]);
  useEffect(() => {
    fetch("jobList.json")
      .then((res) => res.json())
      .then((data) => setJobCategories(data));
  }, []);
  return <div></div>;
};

export default FeaturedJob;
