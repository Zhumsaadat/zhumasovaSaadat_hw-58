import React, { useState } from 'react';
import { Tasks } from '../../../type';
import Modal from '../Modal/Modal';


interface Props{
    task: Tasks;
    tasks: Tasks[];
    doneTask: (id: number) => void;
}

const TasksComponent: React.FC<Props> = ({task, tasks, doneTask}) => {
    const [showModal, setShowModal] = useState(false);
    const [buttons, setButtons] = useState([
        {type: 'primary', label: 'Done', onClick: () => {doneTask(task.id)} },
        {type: 'danger', label: 'Close', onClick: () => { setShowModal(false)} }
    ])


    const clickedOnTask = () => {
        setShowModal(prevState => true);
    }

    return (
        <>
           <div className="border border-black p-2 m-2" onClick={clickedOnTask}>{task.category}</div>
            <Modal show={showModal} task={task} buttons={buttons}/>
        </>
    );
};

export default TasksComponent;