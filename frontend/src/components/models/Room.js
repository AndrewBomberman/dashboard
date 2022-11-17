import { useNavigate } from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDeleteroom } from "../../api/controllers/RoomController/useDeleteroom"
import { FaTrash, FaEdit } from "react-icons/fa";

export default function Room({ room }) {
    const navigate = useNavigate()
    const { mutate } = useDeleteRoom()
    
    const handleDelete = (e)=>{
      e.preventDefault();
      mutate(room._id)
    }
    
  return (
    <tr key={room._id}>
      <td>{room.name}</td>
      <td>{room.bookings}</td>
      <td>{room.rating?.$numberDecimal}</td>
      <td>
        <Form.Label className="text-center">No / Yes</Form.Label>
        <Form.Check
          type="switch"
          id="custom-switch"
          className="btn w-100 align-items-start"
          name={room._id}
          defaultChecked={room.display}
          
        />
      </td>
      <td>
        <Button
          variant="success"
          className="btn w-100"
          onClick={()=>navigate("/rooms/"+room._id)}
        >
          <FaEdit />
        </Button>
      </td>
      <td>
        <Button variant="danger" className="btn w-100" onClick={handleDelete}>
          <FaTrash />
        </Button>
      </td>
    </tr>
  );
}
