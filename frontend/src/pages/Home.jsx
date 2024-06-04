import { useEffect, useState } from "react";
import { useTodoContext } from "../hooks/useTodoContext";
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";
import { BsArrowDownSquareFill } from "react-icons/bs";

const Home = () => {

    const{todos, dispatch} = useTodoContext()    
    const [showForm, setShowForm] = useState(false)

    useEffect(()=>{
        const fetchTodos = async()=>{

            try {
                const response = await fetch('/api/todo',{
                    withCredentials: true,
                  })

                if(!response.ok){
                    throw new Error('Failed to fetch todos')
                }
                const json = await response.json()
               dispatch({
                type:'SET_TODO',
                payload:json
               })
               
            } catch (error) {
                console.error('Error fetching todos',error);
            }
          
        }
        fetchTodos()


    },[dispatch])

    return (
        <div className="container home">
            <div className="todos-holder">
                {todos && todos.map(todo => <Todo todo={todo} key={todo._id} />)}
            </div>
            <div className="form-holder">
        
                <BsArrowDownSquareFill className="btn show-form-btn" onClick={()=>setShowForm(!showForm)}/>
                {showForm &&  <TodoForm /> }
               
            </div>
        </div>
    );
};




export default Home;
