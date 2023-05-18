import { useLoaderData } from "react-router-dom";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Typography,
} from "@mui/material";

export default function HotelStatisticsPage() {
  const { last_year_bookings, meal_plan_stats, family_type_stats } =
    useLoaderData();

  const config = {
    labels: last_year_bookings.map((data) => data.year),
    datasets: [
      {
        label: "Last 5 Year Bookings",
        data: last_year_bookings.map((data) => data.bookings),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const config2 = {
    labels: meal_plan_stats.map((data) => data.type_of_meal_plan),
    datasets: [
      {
        label: "Meal Plan Statistics",
        data: meal_plan_stats.map((data) => data.total),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const config3 = {
    labels: family_type_stats.map((data) => data.type),
    datasets: [
      {
        label: "Meal Plan Statistics",
        data: family_type_stats.map((data) => data.total),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className="Stats">
      <Typography variant="h1" component="h2">
        Statistics
      </Typography>
      <Grid container spacing={5} columns={16} sx={{marginTop:10}}>
        <Grid xs={8}>
          <Line data={config} />
        </Grid>
        <Grid xs={8}>
          <Bar data={config2} />
        </Grid>
        <Grid xs={8} sx={{ marginTop: 5 }}>
          <Pie data={config3} />
        </Grid>
      </Grid>
    </div>
  );
}
