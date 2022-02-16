import { USER_DATA } from "./constants";

export default async function getUserData() {
  try {
    const users = USER_DATA.map((item) => {
      const container = [];

      container.push(item.name.firstName);
      container.push(item.name.lastName);
      container.push(item.about);
      container.push(item.eyeColor);

      return container;
    });

    return users;
  } catch {
    return new Error("Error");
  }
}
