import React from 'react';
import { Tasks } from '../../../type';

interface Props {
    task: Tasks;
}

const DoneTaskItem: React.FC<Props> = ({task}) => {
    return (
        <>
            <div className="border border-black p-2 m-2" >{task.category}</div>
        </>
    );
};

export default DoneTaskItem;