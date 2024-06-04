import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";

export const useTodoContext = ()=>{

    const context = useContext(TodoContext)

    if(!context) throw Error('useContext must be inside the contextProvider')

    return context    
}
