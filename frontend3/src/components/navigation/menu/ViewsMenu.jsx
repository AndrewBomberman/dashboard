import ApartmentIcon from "@mui/icons-material/Apartment";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

export default [
    {
      text: "Hotels",
      icon: <ApartmentIcon />,
      path: "/",
    },
    {
      text: "Rooms",
      icon: <MeetingRoomIcon />,
      path: "/rooms",
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
    
  ];