export let nameError = true;
export let emailError = true;
export let phoneError = true;

export const setErrorName = (error: boolean) => {
  nameError = error;
};

export const setErrorEmail = (error: boolean) => {
  emailError = error;
};

export const setErrorPhone = (error: boolean) => {
  phoneError = error;
};
