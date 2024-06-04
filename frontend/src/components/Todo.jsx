import { FcHighPriority, FcLowPriority,FcMediumPriority } from "react-icons/fc";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdOutlineDoneOutline } from "react-icons/md";

import {formatDistanceToNow} from "date-fns"
import {useState} from 'react'
import { useTodoContext } from "../hooks/useTodoContext";

const Todo = ({todo}) => {

    const{dispatch} = useTodoContext()

    const [isCompleted, setIsCompleted] = useState(todo.completed)

    const priorityIcon = {
        high: <FcHighPriority/>,
        medium : <FcMediumPriority/>,
        low :<FcLowPriority/>
    }

    const handleDelete = ()=>{

        fetch(`/api/todo/${todo._id}`,{
            method:'DELETE',
        })
        .then((resp)=>resp.json())
        .then(json => {
                dispatch({
                    type:'DELETE_TODO',
                    payload:json.deleted
                })
        })
        .catch((error) => {
            console.error('Error deleting todo:', error);
        });
    }
 
    const handleChange = ()=>{

           setIsCompleted((prevIsCompleted) => {
           
            const updatedIsCompleted = !prevIsCompleted;
    
            fetch(`/api/todo/${todo._id}`, {
                method: 'PATCH',
                body: JSON.stringify({ ...todo, completed: updatedIsCompleted }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((resp) => resp.json())
            .then((json) => {
                dispatch({
                    type: 'UPDATE_TODO',
                    payload: json.response,
                });
            })
            .catch((error) => {
                console.error('Error updating todo:', error);
            });
    
            return updatedIsCompleted;
        });
    }

    return (
        <div className="todo">
            <div className="todo-info">
            
                <h4>{todo.text} <span> {todo.completed ? <MdOutlineDoneOutline className="done" /> : <label className="custom-checkbox"><input onChange={handleChange}  type="checkbox"/><span className="checkbox-mark"></span></label>} </span></h4>
              
                <p>Category: {todo.category}</p>
                <p className="priority">Priority: {priorityIcon[todo.priority]} <span className="priority-text">{todo.priority}</span></p>
                <p>Created: {formatDistanceToNow(new Date(todo.createdAt),{addSuffix:true})}</p>
            </div>
            
           <RiDeleteBin6Fill className="react-icon" onClick={handleDelete}/>
            
        </div>
    );
}

export default Todo;
