import {
  setErrorEmail,
  setErrorName,
  setErrorPhone,
} from '../models/form-errors';

const phoneValid = /^(8-?|\+?7-?)?(\(?\d{3}\)?)-?(\d-?){5}\d$/;
const nameValid = /[а-яА-ЯЁё]/;
const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{0,2}$/;

export class validate {
  valid = (value: string, type: string) => {
    if (type === 'name') {
      setErrorName(nameValid.test(value));
    }
    if (type === 'email') {
      setErrorEmail(emailValid.test(value));
    }
    if (type === 'phone') {
      setErrorPhone(phoneValid.test(value));
    }
  };
}
