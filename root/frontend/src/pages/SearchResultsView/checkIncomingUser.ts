import { User } from "@auth0/auth0-spa-js";

const getUserData = async (user: User | undefined, baseURL: string) => {
  if (user) {
    try {
      const getUserResponse = await fetch(
        `${baseURL}${user.sub?.substring(6)}`
      );
      const userData = await getUserResponse.json();
      if (!userData) {
        console.warn("User not found");
        return false;
      }
      return userData;
    } catch (error) {
      console.error(error);
    }
  }
};

const createUser = async (user: User | undefined, baseURL: string) => {
  if (user) {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          name: `${user.name}`,
          email: `${user.email}`,
          user_id: `${user.sub?.substring(6)}`,
        }),
      };
      const response = await fetch(`${baseURL}`, options);
      console.log(response);
    } catch (error) {
      console.error;
    }
  }
};

export default async (user: User | undefined, baseURL: string) => {
  const userData = await getUserData(user, baseURL);
  if (!userData) {
    await createUser(user, baseURL);
  }
};
