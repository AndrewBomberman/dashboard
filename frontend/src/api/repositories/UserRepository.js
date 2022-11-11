export const useRegister = async (user) => {
  return await fetch("http://localhost:8000/api/v1/register", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};
export const useLogin = async (user) => {
  return await fetch("http://localhost:8000/api/v1/login", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};
