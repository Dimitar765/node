import fs from "fs";

const write = (path, data) => {
  fs.writeFileSync(path, data, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

const read = (path) => {
  return fs.readFileSync(path, "utf8");
};

export default { write, read };
