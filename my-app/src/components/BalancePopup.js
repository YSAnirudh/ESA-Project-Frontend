import React from 'react'
import './BalancePopup.css'

export const BalancePopup = (props) => {
    return (props.trigger)? (
        <div className="popup">
            <div className="popup-inner">
                {props.children}
                {/* <button onClick={()=>props.setTrigger(false)}>Add</button> */}
            </div>
            
        </div>
    ):"";
}
