export const checkTokenExpiry = (token: string) => {
  try {
    const tokenData = JSON.parse(atob(token.split(".")[1]));
    return tokenData.exp;
  } catch (e) {
    return null;
  }
};
