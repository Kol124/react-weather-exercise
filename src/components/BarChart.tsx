import React from "react";
import { Bar } from "react-chartjs-2";

export const BarChart = ({ show }: { show: boolean }) => {
  return (
    <>
      <Bar
        data={{
          labels: ["00:00 AM", "03:00 AM", "06:00 AM", "09:00 AM", "12:00 AM"],
          datasets: [
            {
              // Label for bars
              label: "total count/value",
              // Data or value of your each variable
              data: [0, 0, 613, 0],
              backgroundColor: [
                "aliceBlue",
                "white",
                "grey",
                "blue",
                "lightBlue",
              ],
              borderColor: ["blue", "grey", "#ccc", "lightBlue", "blue"],
              borderWidth: 0.5,
            },
          ],
        }}
        // Height of graph
        height={400}
      />
    </>
  );
};
