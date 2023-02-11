import { Image, Button, Form } from "react-bootstrap";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useDeleteHotel from "../../../api/controllers/hotelController/useDeleteHotel";

export default function HotelsTableRow({ hotel }) {
  const { mutate } = useDeleteHotel(hotel._id);
  const navigate = useNavigate()

  return (
    <>
      <td>
        <Image className="d-block w-100" height={75} src={hotel.thumbnail} />
      </td>
      <td>{hotel.name}</td>
      <td>{hotel.bookings}</td>
      <td>{hotel.rating.$numberDecimal}</td>
      <td>
        <Form.Label className="text-center">No / Yes</Form.Label>
        <Form.Check
          type="switch"
          id="custom-switch"
          className="btn w-100 align-items-start"
          name={hotel._id}
          defaultChecked={hotel.display}
        />
      </td>
      <td>
        <Button
          variant="success"
          className="btn w-100"
          onClick={() => navigate("/hotels/" + hotel._id)}
        >
          <FaEdit />
        </Button>
      </td>
      <td>
        <Button
          variant="danger"
          className="btn w-100"
          onClick={() => mutate(hotel._id)}
        >
          <FaTrash />
        </Button>
      </td>
    </>
  );
}
