import React, {useState} from "react"

function TodoForm({add}){
    const [input, setInput] = useState('');
    // const [id, setId] = useState([]);

    const inputChange = e =>{
        e.preventDefault();
        setInput(e.target.value);
    };

    const addForm = e =>{
        e.preventDefault();
        add(function(prevData){
            return [
                ...prevData,
                {
                    id:Math.floor(Math.random()*1000),
                    input
                }
            ]
        });
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