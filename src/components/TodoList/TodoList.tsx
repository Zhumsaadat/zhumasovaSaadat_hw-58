import React from 'react';
import { Tasks } from '../../../type';
import TasksComponent from './TasksComponent';

interface Props {
    tasks: Tasks[];
    doneTask: (id: number) => void;
}

const TodoList: React.FC<Props> = ({tasks, doneTask}) => {
    return (
        <>
            <h2> list</h2>
            {tasks.map(task => (
                <TasksComponent doneTask={doneTask} tasks={tasks} task={task}/>
            ))}
         </>
    )

};

export default TodoList;