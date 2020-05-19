import shortid from "shortid";

export const generateId = () => shortid.generate();

export const login = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "daydayup@gmail.com" && password === "password") {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
};
