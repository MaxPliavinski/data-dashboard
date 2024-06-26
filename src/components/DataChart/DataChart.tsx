import { useRef, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import { darkOptions } from "@/components/DataChart/Themes";
import { months } from "@/helper/util";
import { ChartConfiguration } from "chart.js";

const DataChart = (props: ChartConfiguration) => {
  const { data, options } = props;
  const chartRef = useRef<HTMLCanvasElement>(null);
  const labels = months({ count: 7 });

  useEffect(() => {
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: {
          ...options,
          ...darkOptions,
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [data, options, props]);

  return <canvas ref={chartRef} />;
};
Chart.register(...registerables);

export default DataChart;
