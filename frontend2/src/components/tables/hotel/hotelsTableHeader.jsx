import { Button } from "react-bootstrap";

const HotelsTableHeader = () => {
  const keys = ["thumbnail", "name", "bookings", "rating"];
  return (
    <thead>
      <tr>
        {keys.map((key) => {
          return (
            <th key={key}>
              <div className="d-flex align-items-start">
                <p className="p-2">{key[0].toUpperCase() + key.slice(1)}</p>
              </div>
            </th>
          );
        })}
        <th>
          <div className="d-flex align-items-start">
            <p className="p-2">Displayed</p>
          </div>
        </th>
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
    </thead>
  );
};
export default HotelsTableHeader;
