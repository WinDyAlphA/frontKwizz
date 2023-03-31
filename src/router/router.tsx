import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Creer from "../pages/creer/creer";
import Header from "../pages/header/header";
import Home from '../pages/home/Home'
import Jouer from '../pages/jouer/jouer'
import CreerQuest from "../pages/creerQuestion/creerQuestion";

function Router() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/Jouer'} element={<Jouer />} />
                <Route path={'/Creer'} element={<Creer />} >
                        <Route path={'questions'} element={<CreerQuest />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
