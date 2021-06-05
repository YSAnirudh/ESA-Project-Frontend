import React from 'react';
import '../CSS/BalancePopup.css';

export const BalancePopup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">{props.children}</div>
    </div>
  ) : (
    ''
  );
};
