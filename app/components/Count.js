import React, { useState, useEffect } from "react"

export default function Count() {
    const [lastItem, setLastItem] = useState("")
    const [todolist, setTodolist] = useState([])
    useEffect(() => {
        localStorage.setItem("todos", todolist)
        setLastItem(todolist[todolist.length - 1])
    }, [todolist])
    

    const [count, setCount] = useState(0)
    // get input value
    const [inputValue, setInputValue] = useState("")
    // add todo
    const addTodo = () => {
        inputValue != "" ? setTodolist([...todolist, inputValue]) : null
        setInputValue("")
    }
    // delete todo
    const deleteTodo = index => {
        const newTodolist = [...todolist]
        newTodolist.splice(index, 1)
        setTodolist(newTodolist)
    }
    return (
        <div>
            <div className="exo-1">
                <h1>Count</h1>
                <p>Vous avez cliqué : {count} fois</p>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
            <div className="exo-2">
                <h1>Todolist</h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                />
                <button onClick={addTodo}>Add</button>
                <ul>
                    {todolist.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                color: lastItem === item ? "red" : ""
                            }}
                        >
                            {item}
                            <button onClick={() => deleteTodo(index)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}