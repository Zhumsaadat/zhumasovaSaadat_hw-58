import React from 'react';
import { Buttons, Tasks } from '../../../type';
import ButtonItem from '../ButtonItem/ButtonItem';

interface Props extends  React.PropsWithChildren{
    show: boolean;
    task: Tasks;
    buttons: Buttons[];
}

const Modal: React.FC<Props> = ({show, task, children, buttons}) => {


    return (
        <>
                <div className="modal show" style={{display: show? 'block': 'none'}} onClick={show => !show} >
                    <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                        <div className="modal-content">
                            <div className="modal-header d-flex justify-content-between">
                                <h1>{task.category}</h1>
                                <strong role="button" className='text-uppercase text-end ' onClick={buttons[1].onClick}>x</strong>
                            </div>
                            <ul>
                                {task.tasks.map((taskItem, index) => <li className="text-start p-3" key={index}>{taskItem}</li>)}
                            </ul>
                            <div className="modal-footer">
                                {buttons.map((button, index) => {
                                   return <ButtonItem key={index} button={button} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

 export default Modal;