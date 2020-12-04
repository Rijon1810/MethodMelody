export const isLogged = (data) => {
  return {
    type: "SIGN_IN",
    data: data,
  };
};
