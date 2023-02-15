import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { BiSortAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const HotelsTableHeader = ({ crtSort, crtOrder, changeSort, changeOrder}) => {
  const keys = ["thumbnail", "name", "bookings", "rating", "displayed"];
  const navigate = useNavigate();
  const sort = (key) => {
    if (key !== crtSort) {
      changeSort(key);
      changeOrder("desc");
    } else {
      if (crtOrder === "asc") {
        changeOrder("desc");
      } else if (crtOrder === "desc") {
        changeOrder("asc");
      }
    }
  };

  return (
    <tr>
      {keys.map((key) => {
        return (
          <th key={key}>
            <div className="d-flex align-items-start">
            
              <p className="p-2">{key[0].toUpperCase() + key.slice(1)}</p>
              
              {key !== "thumbnail" && key !== "id" && (
                <Button className="btn btn-dark" onClick={() => sort(key)}>
                  <BiSortAlt2 />
                </Button>
              )}
            </div>
          </th>
        );
      })}
      <th colSpan={2}>
        <Button
          type="button"
          className="btn w-100"
          onClick={() => {
            navigate("/hotels/add");
          }}
        >
          Add Hotel
        </Button>
      </th>
    </tr>
  );
};
export default HotelsTableHeader;
