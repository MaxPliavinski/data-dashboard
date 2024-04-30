import { DataGrid, GridSlots } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import LinearProgress from "@mui/material/LinearProgress";

const Data = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 15,
  });

  return (
    <>
      <h1>Analytics</h1>
      <p>
        The finest data is available here at your fingertips in table form. This
        could be a whole section of data that is available for users to deep
        dive further into the numbers/stats.
      </p>
      <div style={{ height: "900px", width: "100%" }}>
        <DataGrid
          slots={{
            loadingOverlay: LinearProgress as GridSlots["loadingOverlay"],
          }}
          loading={!data}
          {...data}
        />
      </div>
    </>
  );
};

export default Data;
