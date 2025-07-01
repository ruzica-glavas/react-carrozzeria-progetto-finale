import { useState } from "react";
import GlobalContext from "./contexts/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefualtLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import VehicleListPage from "./pages/VehicleListPage";
import VehicleDetail from "./pages/VehicleDetail";

export default function App() {

    const [isLoading, setIsLoading] = useState(false);

    return(
    <GlobalContext.Provider value={{isLoading, setIsLoading}}>
        <BrowserRouter>
            <Routes>
                <Route element={<DefualtLayout/>}>
                    <Route index path="/" element={<HomePage/>}/>
                    <Route path="/vehicles" element={<VehicleListPage/>}></Route>
                    <Route path="/vehicles/:id" element={<VehicleDetail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </GlobalContext.Provider>

    )
}


