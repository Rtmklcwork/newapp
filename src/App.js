import React from 'react'
import Form from './Components/Form';
import TodoItem from './Components/TodoItem'
import User from './Components/User'

import { useSelector } from 'react-redux';

function App() {
    const todos = useSelector((state) => state.todo.todos)
    return (
        <div className='min-h-screen h-full w-screen bg-indigo-400'>
            <div className='container mx-auto px-4'>
                <header className='flex gap-20 '>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5'>Введите Имя</h1>
                        <User />
                    </div>
                    <div className='w-1/3'>
                        <h1 className='font-bold my-5'>ToDo List</h1>
                        <Form />

                        {
                            todos?.map((todo) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                />
                            ))
                        }

                    </div>
                   
                </header>
            </div>
        </div>
    );
}

export default App;
