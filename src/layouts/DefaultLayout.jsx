import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Loader from "../components/Loader";
import GlobalContext from "../contexts/GlobalContext";

export default function DefualtLayout() {
    const {isLoading} = useContext(GlobalContext);

    return(
        <>
            <Header/>
            <Outlet/>
            {isLoading && <Loader/>}
        </>
    )
}
