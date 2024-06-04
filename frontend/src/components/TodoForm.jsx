import {useState} from 'react'
import { useTodoContext } from '../hooks/useTodoContext'

const TodoForm = () => {

    const{dispatch} = useTodoContext()
    const [todo, setTodo]=useState('')
    const [category, setCategory]=useState('')
    const [priority, setPriority]=useState('medium')
    const [emptyFields, setEmptyFields] = useState([])
    const [error, setError] = useState(null)

    
    const handleSubmit = async (e)=>{
        e.preventDefault()

        const newTodo = {text:todo,category,priority}

        const response = await fetch('/api/todo',{
            method:'POST',
            body: JSON.stringify(newTodo),
            headers:{
                'Content-Type':'application/json',
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
            return 
        }

        //response is ok
        setError(null)
        setEmptyFields([])
        setTodo('')
        setCategory('')
        setPriority('')
        dispatch({
            type:'CREATE_TODO',
            payload: json
        })
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit} method='POST'>

        <h3>Add a new Todo</h3>

        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" placeholder="Enter todo..." value={todo} onChange={e=>setTodo(e.target.value)} className={emptyFields.includes('todo') && 'error'} />

        <label htmlFor="category">Category</label>
        <input type="text" id="category" placeholder="Enter category..." value={category} onChange={e=>setCategory(e.target.value)} className={emptyFields.includes('category') && 'error'} />

        <label htmlFor="priority">Choose a priority</label>
        <select id="priority" value={priority} onChange={ e => setPriority(e.target.value)}>
            <option value="" disabled>Select an priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
        

        <button className="btn">Add</button>

        {error && <p className='error'>{error}</p>}

    </form>
    );
}

export default TodoForm;
