import React, { useRef } from "react";
import "./TeamMemberPopup.css";
import { connect } from "react-redux";
import { hide_addmember_popup } from "../../actions";

const TeamMemberPopup = ({
  children,
//   anchor = { x: 0, y: 0, width: 0 },
  hide_addmember_popup,
  
}) => {
//   const [origin, setOrigin] = React.useState({ x: 0, y: 0, width: 0 });
//   const popup = useRef(null);

//   const OFFSET_Y = 24;
//   const OFFSET_X = 4;

//   React.useEffect(() => {
//     if (anchor.x + popup.current.clientWidth > window.innerWidth) {
//       const x = anchor.x + anchor.width - popup.current.clientWidth;
//       const y = anchor.y;
//       setOrigin({
//         x: x - OFFSET_X,
//         y: y,
//       });
//     } else {
//       setOrigin({ x: anchor.x + OFFSET_X, y: anchor.y });
//     }
//   }, [anchor.x, anchor.y, anchor.width]);

  const dismiss = () => {
    hide_addmember_popup();
   
  };

  return (
    <div className="TeamPopup" onClick={dismiss}>
      <div className="addmember"
        // style={{ top: `${origin.y + OFFSET_Y}px`, left: `${origin.x}px` }}
        // ref={popup}
      >
        {children}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
    hide_addmember_popup
})(TeamMemberPopup);
