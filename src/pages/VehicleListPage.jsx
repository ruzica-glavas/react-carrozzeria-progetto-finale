import { useContext, useEffect, useState } from "react";
import axios from "axios";
import GlobalContext from "../contexts/GlobalContext";
import VehicleCard from "../components/VehicleCard";

export default function VehiclesListPage() {
  const [vehicles, setVehicles] = useState([]);
  const { setIsLoading } = useContext(GlobalContext);


  const fetchVehicles = () => {
    setIsLoading(true);
    axios
      .get(import.meta.env.VITE_API_URL) 
      .then((response) => {
        setVehicles(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .then(()=>{setIsLoading(false)})
  };

  useEffect(fetchVehicles, []);

  return (
    <div className="container">
      <h1 className="my-4">I Nostri Veicoli</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>

  );
}