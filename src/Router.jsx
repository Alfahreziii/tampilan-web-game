import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy } from "react";

const HomePage = lazy(() => import ("./pages/HomePage.jsx"));
const Layout = lazy(() => import ("./components/Layout.jsx"));

const Router = () => {

    return (
        <BrowserRouter>  
            <Routes>
                <Route path="/" element= {<Layout />}>
                    <Route index element={<HomePage />}/>
                </Route>
            </Routes>
        </BrowserRouter>  
    )
};

export default Router;