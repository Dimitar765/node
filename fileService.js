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

const purge = (path) => {
  fs.unlinkSync(path);
};

const create = (path, data) => {
  fs.writeFile(path, data);
};

const append = (path, data) => {
  fs.appendFileSync(path, data);
};

export default { write, read, purge, create, append };
