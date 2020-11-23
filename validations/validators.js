const isValidEmail = (email, validation) => {
  const result = new RegExp(validation).test(email);
  return result;
};

const isValidBirthDate = (birthdate, validation) => {
  const result = new RegExp(validation).test(birthdate);
  return result;
};

const isValidPassword = (password, validation) => {
  const result = new RegExp(validation).test(password);
  return result;
};

export {isValidEmail, isValidBirthDate, isValidPassword};
