import React, {useState} from "react";
import {Link} from "react-router-dom";
import TodoForm from "./components/todoForm";
import TodoItem from "./components/todoItem";

function ListPage(){
    const [list, setList]=useState([]);

    return (
    <>
    <h1>To Do List</h1>
    <div className="list-container">
        <div className="list">
            <TodoForm add={setList}/> 
            <TodoItem listData={list} deleteData={setList}/>
        </div>
        <Link to ="/"><button className="back-btn">返回首頁</button></Link>
    </div>
    </>
    );
};
export default ListPage;

// const listData = React.createContext([]);
/* <listData.Provider value={[list, setList]}>
    <TodoForm /> 
    <TodoItem />
</listData.Provider> */

