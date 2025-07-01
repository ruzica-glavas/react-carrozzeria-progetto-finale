import { useState } from "react";
import Header from "./components/Header";
import GlobalContext from "./contexts/GlobalContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefualtLayout from "./layouts/DefaultLayout";

export default function App() {

    const [isLoading, setIsLoading] = useState(false);

    return(
    <GlobalContext.Provider value={{isLoading, setIsLoading}}>
        <BrowserRouter>
            <Routes>
                <Route element={<DefualtLayout/>}>
                    <Route index path="/"/>
                    <Route path="/vehicles/:id"/>
                </Route>
            </Routes>
        </BrowserRouter>
    </GlobalContext.Provider>

    )
}


