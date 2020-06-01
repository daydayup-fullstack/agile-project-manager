import React, { useRef } from "react";
import "./PopupMenu.css";

const PopupMenu = ({
  children,
  anchor = { x: 0, y: 0, width: 0 },
  dismiss,
}) => {
  const [origin, setOrigin] = React.useState({ x: 0, y: 0, width: 0 });
  const popup = useRef(null);

  const OFFSET_Y = 24;
  const OFFSET_X = 4;

  React.useEffect(() => {
    if (anchor.x + popup.current.clientWidth > window.innerWidth) {
      const x = anchor.x + anchor.width - popup.current.clientWidth;
      const y = anchor.y;
      setOrigin({
        x: x - OFFSET_X,
        y: y,
      });
    } else {
      setOrigin({ x: anchor.x + OFFSET_X, y: anchor.y });
    }
  }, [anchor.x, anchor.y, anchor.width]);

  return (
    <div className="PopupMenu" onClick={dismiss}>
      <div
        className="menu"
        style={{ top: `${origin.y + OFFSET_Y}px`, left: `${origin.x}px` }}
        ref={popup}
      >
        {children}
      </div>
    </div>
  );
};

export default PopupMenu;
