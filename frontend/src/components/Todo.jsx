import { FcHighPriority, FcLowPriority,FcMediumPriority } from "react-icons/fc";
import { RiDeleteBin6Fill } from "react-icons/ri";

import {formatDistanceToNow} from "date-fns"
import { MdOutlineDoneOutline } from "react-icons/md";
const Todo = ({todo}) => {

    const priorityIcon = {
        high: <FcHighPriority/>,
        medium : <FcMediumPriority/>,
        low :<FcLowPriority/>
    }

    return (
        <div className="todo">
            <div className="todo-info">
            
                <h4>{todo.text} <span> {todo.completed && <MdOutlineDoneOutline className="done" />} </span></h4>
               
                <p>Category: {todo.category}</p>
                <p className="priority">Priority: {priorityIcon[todo.priority]} <span className="priority-text">{todo.priority}</span></p>
                <p>Created: {formatDistanceToNow(new Date(todo.createdAt),{addSuffix:true})}</p>
            </div>
            
           <RiDeleteBin6Fill className="react-icon"/>
            
        </div>
    );
}

export default Todo;
