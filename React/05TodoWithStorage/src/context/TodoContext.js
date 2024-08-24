import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo",
            completed: false
        }
    ],

    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }

})

// useContext(TodoContext)  -- i need to add this line whenever i want to use my context

// Custom Hook
export const useTodo = () => {
    return useContext(TodoContext)
}

//TodoContext.Provider -- to create a provider in this hook 

export const TodoProvider = TodoContext.Provider;