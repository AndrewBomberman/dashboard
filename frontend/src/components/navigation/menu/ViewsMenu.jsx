import ApartmentIcon from "@mui/icons-material/Apartment";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddHomeIcon from "@mui/icons-material/AddHome";

export default [
  {
    text: "Hotels",
    icon: <ApartmentIcon />,
    path: "/",
  },
  {
    text: "Bookings",
    icon: <FormatListBulletedIcon />,
    path: "/bookings",
  },
  {
    text: "Statistics",
    icon: <BarChartIcon />,
    path: "/statistics",
  },
  {
    text: "Add Hotel",
    icon: <AddHomeIcon />,
    path: "hotels/add",
  },
];
