export default function HotelsTableHeader() {
  const keys = ["thumbnail", "name", "bookings", "rating"];
  return (
    <div className="HotelsTableHeader">
      <thead>
        {keys.map((key) => {
          return (
            <th key={key}>
              <div className="d-flex align-items-start">
                <p className="p-2">{key[0].toUpperCase() + key.slice(1)}</p>
              </div>
            </th>
          );
        })}
      </thead>
    </div>
  );
}
