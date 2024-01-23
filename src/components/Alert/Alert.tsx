import React from 'react';



interface Props extends React.PropsWithChildren{
    type: string;
    key: number;
    onDismiss?: () => void;
    showAlert: boolean;
}



const Alert: React.FC<Props> = ({type, onDismiss, children, showAlert}) => {
    return(
        <div>
            <div className= {`alert ${type} bg-opacity-10 position-absolute top-50 start-50 w-100`} role={type} style={{display: showAlert? 'block': 'none'}} onClick={showAlert => !showAlert}>
                Это {type} Alert!
                {/*{onDismiss&& (*/}
                {/*    <button className="closeButton" onClick={onDismiss}>*/}
                {/*        Закрыть*/}
                {/*    </button>*/}
                {/*)}*/}
            </div>
        </div>
    )
};

export default Alert;
