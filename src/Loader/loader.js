const appliedJobData = async () => {
  const response = await fetch("/jobList.json");
  const data = await response.json();
  const allJobs = data.jobs;

  const storedJob = JSON.parse(localStorage.getItem("jobId"));
  const matchedJob = [];
  for (const job of storedJob) {
    const appliedJob = allJobs.find((singleJob) => singleJob?.id === job.id);
    if (appliedJob) {
      matchedJob.push(appliedJob);
    }
  }

  return { allJobs, matchedJob };
};

export { appliedJobData };
