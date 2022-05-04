import React, {useState, useEffect} from "react";
import ItemDataService from "./database";
import db from "../firebase";
import { collection, Timestamp, orderBy, query, getDocs } from "@firebase/firestore";


function TodoForm({add}){
    const [input, setInput] = useState('');

    const inputChange = e =>{
        e.preventDefault();
        setInput(e.target.value);
    };
    const getItem =async ()=>{
        const q = query(collection(db, 'todoItem'), orderBy("time", "desc"));
        const data = await getDocs(q);
        const allItemArr = data.docs.map((doc) => ({ ...doc.data(), id:doc.id}));
        add(function(){
            return allItemArr;
        });
    }
    useEffect(()=>{
        getItem();
    },[]); //[]為dependencies(根據狀況可能為陣列或元素), 組件渲染完後，如果 dependencies 有改變，才會呼叫 useEffect 內的 function

    const addForm = async (e) =>{
        e.preventDefault();
        const time = Timestamp.now();
        const item = {"input":input, "time":time.seconds};
        //add item to db
        try {
            await ItemDataService.addData(item);
            getItem();
        } catch(e){
            console.log("Error adding Item: " + e)
        };
        setInput('');
    };

    return(
        <form className="todo-form" onSubmit={addForm}>
            <input className="todo-input" value={input} type="text" onChange={inputChange} placeholder=" add your to do item"></input>
            <button className="todo-btn">新增項目</button>
        </form>
    )
};

export default TodoForm;