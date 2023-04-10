const jobDetail = async (id) => {
  const jobDataFile = await fetch("jobList.json");
  const data = await jobDataFile.json();
  const jobData = data.jobs;

  const singleJobDetail = jobData.find((job) => job.id === id);
  return singleJobDetail;
};

export { jobDetail };
