import { useState } from 'react';
import './App.css';

function App() {

    const [tasks, setTasks] = useState([]);

    // функция создаёт новый массив задач с уже существующими + новой задачей
    const createNewTask = () => {
        let newTeskValue = 'add a new task';
        setTasks([...tasks, { taskValue: newTeskValue }]);
    }

    return (
        <div className='App'>
            <div className='tasks'>
                <input value='' />
                <button onClick={createNewTask}>new task</button>
                <ul>
                    {/* перебираются все задачи и выводятся на экран */}
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task.taskValue}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
