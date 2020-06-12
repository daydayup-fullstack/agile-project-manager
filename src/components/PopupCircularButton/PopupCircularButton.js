import React, { useState, useRef, useEffect } from "react";
import "./PopupCircularButton.css";
import { connect } from "react-redux";
import {
  hide_calendar_popup,
} from "../../actions";

const PopupCircularButton = ({
  children,
  anchor = { x: 0, y: 0, width: 0, height: 0 },
  hide_calendar_popup
}) => {
  const [origin, setOrigin] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const popup = useRef(null);


  useEffect(() => {
    const OFFSET_X = 7;
    const OFFSET_Y = 0;
    if (anchor.y + popup.current.clientHeight > window.innerHeight) {
      setOrigin({
        x: anchor.x - anchor.width / 2 - OFFSET_X,
        y: anchor.y - popup.current.clientHeight - anchor.height * 1.5,
      })
      //手动修改一个不是伪元素的元素的top值令其就位。
      popup.current.firstChild.firstChild.style.top = "312px";
    } else if (anchor.x + popup.current.clientWidth > window.innerWidth) {
      const x = anchor.x - popup.current.clientWidth;
      const y = anchor.y;
      setOrigin({
        x: x,
        y: y,
      });
    } else {
      setOrigin({ x: anchor.x - anchor.width / 2 - OFFSET_X, y: anchor.y + anchor.height / 2 });
    }
  }, [anchor.x, anchor.y, anchor.width, anchor.height]);

  return (
    <div
      className="PopupCircularButton__container">
      <div
        className="PopupCircularButton__content"
        ref={popup}
        style={{
          top: `${origin.y}px`,
          left: `${origin.x}px`,
        }}>
        {children}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    
  };
};

export default connect(mapStateToProps, {
  hide_calendar_popup
})(PopupCircularButton);
