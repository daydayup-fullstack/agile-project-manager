import shortid from "shortid";

export const generateId = () => shortid.generate();

export const calcAnchor = (e) => {
  // console.log(e.target.offsetLeft, e.target.offsetTop);
  return {
    anchor: {
      x: e.target.offsetLeft,
      y: e.target.offsetTop,
      width: e.target.clientWidth,
      height: e.target.clientHeight,
    },
  };
};

export const calcAddButtonAnchor = (e) => {
  return {
    anchor: {
      x: e.target.offsetLeft + e.target.clientWidth + 42,
      y: e.target.offsetTop + e.target.clientHeight - 5,
      width: e.target.clientWidth,
      height: e.target.clientHeight,
    },
  };
};
