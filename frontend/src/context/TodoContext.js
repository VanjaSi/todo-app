import { createContext, useReducer } from "react";

export const TodoContext = createContext()

const todoReducer = (state, action)=>{

    switch(action.type){
        case 'SET_TODO' :
            return {
                todos: action.payload
            }
        case 'CREATE_TODO':
            return {
                todos: [action.payload, ...state.todos]
            }
        case 'DELETE_TODO':
            return {
               todos : state.todos.filter(todo => todo._id !== action.payload._id)
            }
        case 'UPDATE_TODO':
            return {
                todos :state.todos.map(todo => {
                    if(todo._id === action.payload._id){
                        return {...todo, completed : action.payload.completed}
                    }
                    return todo
                })
            }

        default:
            return state
    }
}

export const TodoContextProvider = ({children})=>{

    const [state,dispatch] = useReducer(todoReducer, {todos:null})

    return (
        <TodoContext.Provider value={{...state,dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}
