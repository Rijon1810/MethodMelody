export const isLogged = (data) => {
  return {
    data,
    type: "SIGN_IN",
  };
};

export const signUp = (data) => {
  return {
    data,
    type: "SIGN_UP",
  };
};