import React, { useState } from 'react';
import { Buttons, Tasks } from '../../../type';
import ButtonItem from '../ButtonItem/ButtonItem';
import Alert from '../Alert/Alert';

interface Props extends  React.PropsWithChildren{
    show: boolean;
    task: Tasks;
    buttons: Buttons[];
}

const Modal: React.FC<Props> = ({show, task, children, buttons}) => {

    const [showAlert, setShowAlert] = useState(false);
    const [alertTypes, SetAlertTypes] = useState([
        {type: "alert-danger", onDismiss: () => setShowAlert(true) },
        {type: "alert-primary", onDismiss: undefined },
        {type: "alert-success", onDismiss: undefined },
        {type: "alert-warning", onDismiss: undefined }
    ])

    const clickedTaskInCategory = () => {
        setShowAlert(prevState => true
        )
    }

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
                                {task.tasks.map((taskItem, index) => (
                                    <div key={index}>
                                        <li className="text-start p-3" showAlert={showAlert} onClick={clickedTaskInCategory}>
                                            {taskItem}
                                        </li>
                                    </div>
                                ))}
                            </ul>
                            <div className="modal-footer">
                                {buttons.map((button, index) => {
                                   return <ButtonItem key={index} button={button} />
                                })}
                            </div>
                            {
                                alertTypes.map((typeItem, index) => {
                                    if (typeItem.onDismiss) {
                                        return <Alert key={index} type={typeItem.type} showAlert={showAlert} onDismiss={typeItem.onDismiss}/>
                                    } else {
                                        return <Alert key={index} type={typeItem.type} showAlert={showAlert} />;
                                    }
                                })
                            }

                        </div>
                    </div>
                </div>

        </>
    );
};

 export default Modal;