import React, {useState} from 'react'

function TodoForm() {
const [input, setInput] = useState('')
const [todo,setTodo]=useState([])
const [todos,setTodos]=useState([])

const handleChange = e => {
    setInput(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault();
    
    setTodo({
        id: Math.floor(Math.random() * 10000),
        text: input
    })
    setTodos([...todos,todo])
}
return (
    <div className="todo-form" >
        <input 
        type="text"
        placeholder='add a todo'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        />
        <button className="todo-button"onClick={(e)=>handleSubmit(e)}>Add todo</button>
        {todos?.map((task,index)=>(
          <div key={index}>{task.text}</div>  
        ))}
    </div>
);
}

export default TodoForm;
