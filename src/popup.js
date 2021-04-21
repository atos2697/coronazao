import React from "react";
import "./popup.css";
import { AiOutlineClose } from "react-icons/ai";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <AiOutlineClose
          style={{ cursor: "pointer" }}
          className="close-btn"
          onClick={() => props.setTrigger(false)}
        >
          x
        </AiOutlineClose>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
