import { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import * as dayjs from "dayjs";

const ChartBlock = () => {
  useEffect(() => {
    console.log(dayjs().startOf("week"));
  });

  const state = {
    options: {
      chart: {
        id: "basic-bar",
        fontFamily: "Roboto, sans-serif",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#000"],
      markers: {
        size: 7,
      },
      title: {
        text: "Tasks done each day in last week",
        margin: 16,
        offsetX: -9,
        style: {
          fontFamily: '"Baloo Bhai 2", cursive',
          fontWeight: "700",
          fontSize: "16px",
        },
      },
      xaxis: {
        categories: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
      },
      yaxis: {
        labels: {
          offsetX: -15,
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
      },
    },
    series: [
      {
        name: "tasks",
        data: [0, 1, 2, 1, 4, 3, 2],
      },
    ],
  };
  return (
    <>
      <p className="title title--main">Your statistics</p>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height="266"
        width="449"
      />
    </>
  );
};

export default ChartBlock;
