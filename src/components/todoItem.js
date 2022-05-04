import React from 'react';
import ItemDataService from "./database";

function TodoItem({listData, deleteData}){
    console.log(listData)
    async function deleteItem(id){
        try{
            await ItemDataService.deleteData(id);
            deleteData(function(prev){
                return prev.filter(item => item.id !== id)});
        }catch(e){
            console.log("Error adding Item: " + e)
        };
        
    return (
        <div className="todo-list">
            {
                listData.map((item)=>{
                    console.log(item)
                    return (
                        <div key={item.id} className="item">
                            <p>{item.input}</p>
                            <button className="todo-btn" onClick={(e)=>deleteItem(item.id)}>刪除</button>
                        </div>
                    )
                })
            }   
        </div>
    )
};

export default TodoItem;


