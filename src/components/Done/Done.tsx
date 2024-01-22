import React from 'react';
import DoneTaskItem from './DoneTaskItem';
import { Tasks } from '../../../type';
import TasksComponent from '../TodoList/TasksComponent';

interface Props {
    tasks: Tasks[];
}



const Done: React.FC<Props> = ({tasks}) => {
    const content = () => {
        if(tasks.length > 0){
            return (
                <>
                    {tasks.map((task, index) => (
                        <DoneTaskItem key={index} task={task} />
                    ))}
                </>
            );

        } else { return <div className='mt-5'>Вы еще не выполнили ни одного задание!</div>}
    };
    return (
        <div>
            {content()}
        </div>
    );
};

export default Done;