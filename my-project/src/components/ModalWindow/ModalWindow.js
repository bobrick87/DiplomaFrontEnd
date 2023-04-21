import React from "react";

import './ModalWindow.css';

const ModalWindow = ({ active, setActive, children, modalType }) => {
    
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={modalType === 'delete' ? 'modal_content_delete' : 'modal_content'} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>

        </div>
    )
}

export default ModalWindow;