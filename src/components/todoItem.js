import React from 'react';

function TodoItem({listData, deleteData}){
    function deleteItem(e){
        const currentId = Number(e.target.parentElement.id);
        deleteData(function(prev){
            return prev.filter(item => item.id !== currentId)});
        }

    return (
        <div className="todo-list">
            {
                listData.map((item)=>{
                    console.log(typeof(item.id))
                    const {id, input} = item; //解構item
                    return (
                        <div key={id} id={id} className="item">
                            <p>{input}</p>
                            <button className="todo-btn" onClick={deleteItem}>刪除</button>
                        </div>
                    )
                })
            }   
        </div>
    )
};

export default TodoItem;