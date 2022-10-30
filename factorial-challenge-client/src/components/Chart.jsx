import React, { useEffect, useState } from "react";
import { Card, Title, AreaChart } from "@tremor/react";
import { getAllTimeService } from "../services/averageTime.services";

function Chart() {
  const [ data, setData ] = useState(null)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getAllTimeService();
      setData(response.data);

    } catch (error) {
      throw alert ("error");
    }
  }

  const dataFormatter = (number) => {
    return Intl.NumberFormat("us").format(number).toString() + " seg";
  };

  return (
    <div>
      <Card>
        <Title>Average Time on Page</Title>
        <AreaChart
          data={data}
          categories={["value"]}
          dataKey="createdAt"
          height="h-72"
          colors={["indigo", "cyan"]}
          valueFormatter={dataFormatter}
          marginTop="mt-4"
        />
      </Card>
    </div>
  );
}

export default Chart;
