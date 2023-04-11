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
    <div>
      <RadarChart
        cx={300}
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
          name="Mike"
          dataKey="assignment_number"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
};

export default Statistics;
