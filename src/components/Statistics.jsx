import React from "react";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const assignment = [
    {
      id: 1,
      assignment_serial_number: "Assignment-1",
      assignment_number: 60,
    },
    {
      id: 2,
      assignment_serial_number: "Assignment-2",
      assignment_number: 58,
    },
    {
      id: 3,
      assignment_serial_number: "Assignment-3",
      assignment_number: 60,
    },
    {
      id: 4,
      assignment_serial_number: "Assignment-4",
      assignment_number: 59,
    },
    {
      id: 5,
      assignment_serial_number: "Assignment-5",
      assignment_number: 58,
    },
    {
      id: 6,
      assignment_serial_number: "Assignment-6",
      assignment_number: 60,
    },
    {
      id: 7,
      assignment_serial_number: "Assignment-7",
      assignment_number: 60,
    },
    {
      id: 8,
      assignment_serial_number: "Assignment-8",
      assignment_number: 60,
    },
  ];

  return (
    <div className="mt-[65px] py-8 lg:mt-[75px] px-6 lg:px-16 lg:flex">
      <RadarChart
        cx={280}
        cy={250}
        outerRadius={150}
        width={600}
        height={500}
        data={assignment}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="assignment_serial_number" />
        <PolarRadiusAxis />
        <Tooltip />
        <Radar
          dataKey="assignment_number"
          stroke="#000000"
          fill="#3E54AC"
          fillOpacity={0.5}
        />
      </RadarChart>
      <div className="px-12">
        {" "}
        <h1 className="text-3xl font-semibold">Chart Detail</h1>
        <p className="text-lg font-[350] border-b border-regal-blue pb-1">
          A radar chart on my previous assignment number.
        </p>
        <p className="text-lg font-[350] py-4">
          This chart holds the information of my assignments.I have finished 8
          assignments.All 8 of them mentioned in 8 axis of this radar
          chart.Assignment numbers will appear by hovering over the individual
          assignment area of the chart.Radar Chart by{" "}
          <a target="_blank" href="https://recharts.org/en-US">
            <span className="text-regal-blue underline">Recharts</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Statistics;
