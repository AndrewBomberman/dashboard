import { Await, useLoaderData } from "react-router-dom";

export default function HotelsPage (){
    const { hotels } = useLoaderData();
    console.log(hotels)
  return (
    <div>
      
      
    </div>
  );
}