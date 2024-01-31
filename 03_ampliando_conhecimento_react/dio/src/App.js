import React from "react";

import Home from "./pages/home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Feed from "./pages/feed";
import {Tests} from "./pages";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/feed" element={<Feed/>}/>
                <Route path="/teste" element={<Tests/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
