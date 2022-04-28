import React from "react";
import {Link} from "react-router-dom"

function HomePage () {
    return (
    <div className="Container">
        <h1>React練習專案</h1>
        <h2>歡迎光臨我的頁面</h2>
        <Link to="/todolist"><button className="home-btn">To do list 專案</button></Link>
        
    </div>
    )
};


export default HomePage;