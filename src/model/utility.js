import shortid from "shortid";
import {projects} from "./model";

export const generateId = () => shortid.generate();

export const login = async (username, password) => {
  // user information & user's projects
  const result = {
    user: {
      id: "user-c8dc5864",
      firstName: "Scott",
      lastName: "Wang",
      avatar:
          "https://s3.amazonaws.com/profile_photos/4720159505425.uVij5QIkQPduW5RhPC9j_27x27.png",
      colorIndex: 0,
    },
    projects: [
        ...projects
    ]
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "daydayup@gmail.com" && password === "password") {
        resolve(JSON.stringify(result));
      } else {
        reject();
      }
    }, 1500);
  });
};
