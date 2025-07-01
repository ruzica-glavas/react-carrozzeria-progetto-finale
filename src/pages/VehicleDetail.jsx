// import { useParams } from "react-router-dom"
// import { useContext, useEffect, useState } from "react";
// import GlobalContext from "../contexts/GlobalContext";
// import axios from "axios";
// //import VehicleCard from "../components/VehicleCard";

// export default function VehicleDetail(){

//     const{brand, model, plateNumber, engine, color, year, vin, photo, ownerName, ownerPhone, description, maintenances} = vehicle; 

//     const {id} = useParams();
//     const [vehicle, setVehicle]=useState({});
//     const {setIsLoading} = useContext(GlobalContext);

//     const fetchVehicle = () =>{
//         setIsLoading(true)
//         axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
//         .then(response=>{
//             const {data} = response
//             setVehicle(data)
//         })
//         .catch(error=>console.log(error))
//         .then(()=>{setIsLoading(false)})
//     }

//     useEffect(fetchVehicle, [])

//     return (
//         <>
//         <div className="card h-100">
//             <h2>{brand} {model}</h2>
//             <img src={photo} className="card-img-top" alt={`Foto ${brand} ${model}`} />
//             <div className="card-body">
//             <h5 className="card-title">{brand} {model}</h5>
//             <h6 className="card-text">Targa: {plateNumber}</h6>
//             </div>
//         </div>
//         </>
//     )
// }

import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";
import axios from "axios";
import { Link } from "react-router-dom";

export default function VehicleDetail() {
    const { id } = useParams();
    const [vehicle, setVehicle] = useState({}); // inizialmente null
    const { setIsLoading } = useContext(GlobalContext);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${import.meta.env.VITE_API_URL}/${id}`)
            .then(response => {
                setVehicle(response.data);
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    }, [id]);

    if (!vehicle) {
        return <p>Caricamento veicolo...</p>
    }

    const { brand, model, plateNumber, engine, color, year, vin, photo, ownerName, ownerPhone, description, maintenances } = vehicle;

    return (
    <>
        <div className="container my-4">
            <div className="card mx-auto" style={{ maxWidth: "600px" }}>
                <img src={photo} className="card-img-top" alt={`Foto ${brand} ${model}`} />
                <div className="card-body">
                    <h3 className="card-title">{brand} {model}</h3>
                    <p className="card-text"><strong>Targa:</strong> {plateNumber}</p>
                    <p><strong>Motore:</strong> {engine}</p>
                    <p><strong>Colore:</strong> {color}</p>
                    <p><strong>Anno:</strong> {year}</p>
                    <p><strong>VIN:</strong> {vin}</p>
                    <p><strong>Proprietario:</strong> {ownerName} - {ownerPhone}</p>
                    <p><strong>Descrizione:</strong> {description}</p>
                </div>

                {maintenances && maintenances.length > 0 && (
                    <div className="mt-4">
                        <h5>Storico Manutenzioni</h5>
                        <ul className="list-group">
                        {maintenances.map((m) => (
                            <li key={m.id} className="list-group-item">
                            <strong>{m.description}</strong><br />
                            Dal: {m.beginDate} - Al: {m.endDate}<br />
                            Prezzo: €{m.price}
                            </li>
                        ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>

        <div className="card-footer text-center">
          <div className="d-flex justify-content-center gap-2 my-2">
            <Link to={`/vehicles`} className="btn btn-outline-danger">
              Torna indietro
            </Link>
         {/* }  */}

          </div>
        </div>
        {/* <Link to={`/vehicles`}>Schiaccia</Link> */}
    </> 
    );
}