import { useNavigate } from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDeleteHotel } from "../../api/controllers/HotelController/useDeleteHotel"
import { FaTrash, FaEdit } from "react-icons/fa";
import { useCookies } from "react-cookie";

export default function Hotel({ hotel }) {
    const [cookies, setCookies, removeCookie] = useCookies();
    const navigate = useNavigate()
    const { mutate } = useDeleteHotel(hotel._id)
    
    const handleDelete = (e)=>{
      e.preventDefault();
      mutate(hotel._id)
    }
    
  return (
    <tr key={hotel._id}>
      <td>{hotel.name}</td>
      <td>{hotel.bookings}</td>
      <td>{hotel.rating?.$numberDecimal}</td>
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
          onClick={()=>navigate("/hotels/"+hotel._id)}
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
