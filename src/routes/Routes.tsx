import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import  Congratulations  from "../pages/Congratulations";
import  ErroMenu  from "../pages/ErroMenu";
import  InitialPage  from "../pages/InitialPage";
import  Pesquisa  from "../pages/Pesquisa";
import  ProductFound  from "../pages/ProductFound";
import  Register  from "../pages/Register";
import  Register2  from "../pages/Register2";

export const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route element = { <InitialPage/> } path="/" />
                <Route element = { <Home/> } path="/Home" />
                <Route element = { <Congratulations/> } path="/Congratulations" />
                <Route element = { <ErroMenu/> } path="/ErroMenu" />
                <Route element = { <Pesquisa/> } path="/Pesquisa" />
                <Route element = { <ProductFound/> } path="/ProductFound" />
                <Route element = { <Register/> } path="/Register" />
                <Route element = { <Register2/> } path="/Register2" />

            </Routes>

        </BrowserRouter>

    );

}

export default Router;

