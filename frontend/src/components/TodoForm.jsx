import {useState} from 'react'

const TodoForm = () => {

    const [todo, setTodo]=useState(null)
    const [category, setCategory]=useState(null)
    const [priority, setPriority]=useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(todo,category,priority);
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>

        <h3>Add a new Todo</h3>

        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" placeholder="Enter todo..." value={todo} onChange={e=>setTodo(e.target.value)} />

        <label htmlFor="category">Category</label>
        <input type="text" id="category" placeholder="Enter category..." value={category} onChange={e=>setCategory(e.target.value)} />

        <label htmlFor="priority">Priority</label>
        <input type="text" id="priority" placeholder="Enter priority..." value={priority} onChange={e=>setPriority(e.target.value)} />

        <button className="btn">Add</button>

    </form>
    );
}

export default TodoForm;
