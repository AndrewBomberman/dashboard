import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import Button from '@mui/material/Button';

export default function HotelsTable({ hotels }) {
  console.log(hotels);
  const [display, setDisplay] = useState();

  const headers = ["Thumbnail", "Name", "Bookings", "Rating", "Displayed", "Street" ,"City", "Country", "Rooms", "Reviews"];
  return (
    <div className="HotelsTable">
      <TableContainer component={Paper}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {headers.map((header) => {
                return <TableCell key={header}>{header}</TableCell>;
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {hotels.map((hotel) => {
              return (
                <TableRow key={hotel._id}>
                  <TableCell>
                    {
                      <img
                        src={
                          hotel.thumbnail ??
                          "http://localhost:8000/images/sample/no-image.png"
                        }
                      />
                    }
                  </TableCell>
                  <TableCell>{hotel.name}</TableCell>
                  <TableCell>{hotel.bookings}</TableCell>
                  <TableCell>{hotel.rating.$numberDecimal}</TableCell>
                  <TableCell>
                    <Switch
                      defaultChecked={hotel.display}
                      onChange={(e) => {
                        setDisplay(e.target.checked);
                      }}
                    />
                  </TableCell>
                  <TableCell>{hotel.address.address1}</TableCell>
                  <TableCell>{hotel.address.city}</TableCell>
                  <TableCell>{hotel.address.country}</TableCell>
                  <TableCell>{hotel.rooms.length}</TableCell>
                  <TableCell>{hotel.reviews.length}</TableCell>
                  <TableCell><Button>Edit</Button></TableCell>
                  <TableCell><Button>Delete</Button></TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
