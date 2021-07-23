export const validatePassword = (password: string): string => {
  const capitalLetterPattern = new RegExp("[A-Z]");
  const digitPattern = new RegExp("[0-9]");
  const specialCharacterPattern = new RegExp("[#?!@$%^&*-]");

  const containsCapitalLetter = capitalLetterPattern.test(password);
  const containsDigit = digitPattern.test(password);
  const containsSpecialCharacter = specialCharacterPattern.test(password);

  if (password.length < 6) {
    return "must be atleast 6 characters long";
  }

  if (!containsCapitalLetter) {
    return "must contain capital letter";
  }

  if (!containsDigit) {
    return "must contain number";
  }

  if (!containsSpecialCharacter) {
    return "must contain special character";
  }

  return "pass";
};
