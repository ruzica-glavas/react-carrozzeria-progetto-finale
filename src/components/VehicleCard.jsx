import { Link } from "react-router-dom";

export default function VehicleCard(props){
    // const isDetail = props.isDetail || false;
    const{id, brand, model, plateNumber, photo} = props.vehicle;    
    
    
    return(
        <>
    
      <div className="card h-100">
         <h2>{brand} {model}</h2>
        <img src={photo} className="card-img-top" alt={`Foto ${brand} ${model}`} />
        <div className="card-body">
          <h5 className="card-title">{brand} {model}</h5>
          <h6 className="card-text">Targa: {plateNumber}</h6>
        </div>

         {/* {isDetail ?
                <div className="card-body detail">
                    <p>{engine}</p>
                    <p>{color}</p>
                    <p>{year}</p>
                    <p>{vin}</p>
                    <p>{ownerName}</p>
                    <p>{ownerPhone}</p>
                    <p>{description}</p>
                </div>: ""
         }  */}


        <div className="card-footer text-center">
          <div className="d-flex justify-content-center gap-2 my-2">
            {/* {!isDetail &&  */}
            <Link to={`/vehicles/${id}`} className="btn btn-outline-primary">
              Dettaglio
            </Link>
         {/* }  */}

          </div>
        </div>
   
    </div>
        </>
    )


}








