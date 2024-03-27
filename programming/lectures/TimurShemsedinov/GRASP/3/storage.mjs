import { deserialize, serialize } from "node:v8";
import { readFile, writeFile } from "node:fs/promises";

class User {
  constructor(firstName, surname) {
    this.firstName = firstName;
    this.surname = surname;
  }
}

class Storage {
  save(id, object) {
    const buffer = serialize(object);
    const path = `./${id}.v8`;
    return writeFile(path, buffer);
  }

  async read(id) {
    const path = `./${id}.v8`;
    const buffer = await readFile(path);
    const { firstName, surname } = deserialize(buffer);
    return new User(firstName, surname);
  }
}

const user1 = new User("Egor", "Rakutov");

const storage = new Storage();

(async () => {
  await storage.save(1, user1);

  const info = await storage.read(1);

  console.log("info - ", info);
})();
