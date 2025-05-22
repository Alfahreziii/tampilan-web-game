import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy } from "react";

const HomePage = lazy(() => import ("./pages/HomePage.jsx"));
const GamePage = lazy(() => import ("./pages/GamePage.jsx"));
const Layout = lazy(() => import ("./components/Layout.jsx"));


const Router = () => {

    return (
        <BrowserRouter>  
            <Routes>
                <Route path="/" element= {<Layout />}>
                    <Route index element={<HomePage />}/>
                    <Route path="/game" element={<GamePage />}/>
                </Route>
            </Routes>
        </BrowserRouter>  
    )
};

export default Router;