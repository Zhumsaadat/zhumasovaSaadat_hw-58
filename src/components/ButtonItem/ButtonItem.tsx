import React from 'react';
import { Buttons } from '../../../type';

interface Props {
    button: Buttons;
}

const ButtonItem: React.FC<Props> = ({button, id}) => {
    return (
        <div>
            <button className={button.type} onClick={button.onClick}>{button.label}</button>
        </div>
    );
};

export default ButtonItem;