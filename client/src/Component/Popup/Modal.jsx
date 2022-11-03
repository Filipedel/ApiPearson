import React from "react";
import pearson from "./Pearson.png"
const Modal =  ({open,onClose}) =>{
    
    if(!open) return null;
    return(
        <div className='overlay'>
            <div className="modalContainer">
                <img src={pearson} width="100" alt=""/>
                <div className="modalRight">
                    <p  onClick={onClose} className="closeBtn">X</p>
                    <div className="content">
                        <p>I'll do something later with this</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;