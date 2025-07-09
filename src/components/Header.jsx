import { NavLink, Link } from "react-router-dom"



export default function Header() {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">Carrozzeria</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="vehicles" className="nav-link">Vehicles</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </>

    )
}

