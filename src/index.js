import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ListPage from "./listPage";
import "./index.css";


const Root=document.getElementById('root')
console.log(Root)
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/todolist" element={<ListPage />}/>
        </Routes>
    </BrowserRouter>
)

