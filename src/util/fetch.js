const BASE_URL = "https://conduit.productionready.io/api";

export const authRequest = async () => {
  const response = await fetch(`${BASE_URL}/user`, {
    headers: {
      "Authorization": `Token ${localStorage.getItem("token")}`,
      "Accept": "application/json"
    }
  });
  return await response.json();
};

export const loginRequest = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user: { email, password } })
  });
  return await response.json();
};
