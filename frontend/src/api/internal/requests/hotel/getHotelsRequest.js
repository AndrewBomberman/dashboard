export default async () => {
  const response = await fetch("http://localhost:8000/api/v1/hotels");
  return await response.json()
};
