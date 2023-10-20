import React from "react";

import "./App.css"
import AppRoutes from "../AppRoutes/AppRoutes";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import FilmForm from "../FilmForm/FilmForm";
import { useAppSelector } from "../../store/hooks/hooks";

const App = () => {

    const isActive = useAppSelector( (state) => state.form.isActive);

    return (
        <div className="App">
            <Header/>
            { isActive && <FilmForm/> }
            <AppRoutes/>
            <Footer/>
        </div>
    );
}

export default App;