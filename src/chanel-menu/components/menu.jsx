import { MdArrowBack, MdArrowForward } from "react-icons/md";
import "../chanel-menu.css";
import React from "react";

const Menu = ({ data, hasPrevious, position, handleMenuClick, goBack }) => {
  return (
    <div className={`menu-container ${position}`}>
      {hasPrevious && (
        <div className="menu-back-item">
          <MdArrowBack onClick={goBack} className="menu-arrow" />
        </div>
      )}
      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => handleMenuClick(item)}
          className="menu-item"
        >
          <span>{item.label}</span>
          {item.children?.length > 0 && (
            <MdArrowForward className="menu-arrow" />
          )}
        </div>
      ))}
    </div>
  );
};
export default Menu;
