import shortid from "shortid";

export const generateId = () => shortid.generate();

export const login = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "password") {
        switch (username) {
          case "scotteau@gmail.com":
            resolve(
              JSON.stringify({
                userId: "6HGGrj2tJGV3LRLdM0rpO6cfNUD3",
                devId: "user-scott",
              })
            );
            break;

          case "hxiaoyin@gmail.com":
            resolve(
              JSON.stringify({
                userId: "7VPoXiRNG0dyOH3VmHFlz16RYc03",
                devId: "user-sivila",
              })
            );
            break;

          case "lawrence415610@gmail.com":
            resolve(
              JSON.stringify({
                userId: "LKm70EJfBTNSEhuibceokHSVjGC3",
                devId: "user-lawrence",
              })
            );
            break;

          case "myself.ollie.lee@gmail.com":
            resolve(
              JSON.stringify({
                userId: "P4jKP5wmKZZiSFZu5hmVMZaQnI12",
                devId: "user-ollie",
              })
            );
            break;

          case "sarah19930930@gmail.com":
            resolve(
              JSON.stringify({
                userId: "pc02KNUAxyScdxJyGzviphE2s8a2",
                devId: "user-sarah",
              })
            );
            break;

          default:
            reject();
        }
      }
    }, 1500);
  });
};

export const users = {
  c8dc5864: {
    id: "c8dc5864",
    firstName: "Scott",
    lastName: "Wang",
    avatar:
      "https://s3.amazonaws.com/profile_photos/4720159505425.uVij5QIkQPduW5RhPC9j_27x27.png",
    colorIndex: 0,
    email: "scotteau@gmail.com",
  },
  "762825b6": {
    id: "762825b6",
    firstName: "Lawrence",
    lastName: "Liu",
    avatar: "",
    colorIndex: 4,
    email: "lawrence415610@gmail.com",
  },
  b803c8e6: {
    id: "b803c8e6",
    firstName: "Ollie",
    lastName: "Lee",
    avatar:
      "https://s3.amazonaws.com/profile_photos/1171854711778417.pLuY5oITP89IeVzx0MJP_27x27.png",
    colorIndex: 2,
    email: "sarah19930930@gmail.com",
  },
  e1c540b7: {
    id: "e1c540b7",
    firstName: "Sarah",
    lastName: "Xiao",
    avatar: "",
    colorIndex: 10,
    email: "myself.ollie.lee@gmail.com",
  },
  "8ddb8913": {
    id: "8ddb8913",
    firstName: "Silvia",
    lastName: "Silvia",
    avatar:
      "https://s3.amazonaws.com/profile_photos/1171854712057265.7zSf934pYJpZhkV1kn6o_27x27.png",
    colorIndex: 8,
    email: "hxiaoyin@gmail.com",
  },
};
