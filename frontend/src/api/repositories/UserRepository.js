
export const useRegister = async (user) => {
  console.log(user)
  const response  = await fetch("http://localhost:8000/api/v1/auth/jwt/register", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await response.json();

};
export const useLogin = async (user) => {
  
  const response = await fetch("http://localhost:8000/api/v1/login", {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await response.json();
};
