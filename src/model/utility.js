import shortid from "shortid";

export const generateId = () => shortid.generate();

export const login = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "password") {
        switch (username) {
          case "scotteau@gmail.com":
            resolve(JSON.stringify({
              userId: "6HGGrj2tJGV3LRLdM0rpO6cfNUD3"
            }));
            break;

          case "hxiaoyin@gmail.com":
            resolve(JSON.stringify({
              userId: "7VPoXiRNG0dyOH3VmHFlz16RYc03"
            }));
            break;

          case "lawrence415610@gmail.com":
            resolve(JSON.stringify({
              userId: "LKm70EJfBTNSEhuibceokHSVjGC3"
            }));
            break;

          case "myself.ollie.lee@gmail.com":
            resolve(JSON.stringify({
              userId: "P4jKP5wmKZZiSFZu5hmVMZaQnI12"
            }));
            break;

          case "sarah19930930@gmail.com":
            resolve(JSON.stringify({
              userId: "pc02KNUAxyScdxJyGzviphE2s8a2"
            }));
            break;

          default:
            reject();
        }
      }
    }, 1500);
  });
};
