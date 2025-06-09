import { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const ErrorContext = createContext();

export function ErrorProvider({ children }) {

  const loginInitial = {
    mail: {
      value: '',
      invalid: false,
      message: '',
    },
    password: {
      value: '',
      invalid: false,
      message: '',
    },
  };
  const [loginErrors, setLoginErrors] = useState(loginInitial);
  const registerInitial = {
    name: {
      value: '',
      invalid: false,
      message: '',
    },
    mail: {
      value: '',
      invalid: false,
      message: '',
    },
    phone: {
      value: '',
      invalid: false,
      message: '',
    },
    password: {
      value: '',
      invalid: false,
      message: '',
    },
    confirmPassword: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [registerErrors, setRegisterErrors] = useState(registerInitial);
  const reserveTerraceInitial = {
    range30: {
      value: '',
      invalid: false,
      message: '',
    },
    date: {
      value: '',
      invalid: false,
      message: '',
    },
    time: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [reserveTerraceErrors, setReserveTerraceErrors] = useState(reserveTerraceInitial);
  const reserveTableInitial = {
    range1: {
      value: '',
      invalid: false,
      message: '',
    },
    date: {
      value: '',
      invalid: false,
      message: '',
    },
    time: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [reserveTableErrors, setReserveTableErrors] = useState(reserveTableInitial);
  const imageInitial = {
    image: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [imageErrors, setImageErrors] = useState(imageInitial);
  const nameInitial = {
    name: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [nameErrors, setNameErrors] = useState(nameInitial);
  const phoneInitial = {
    phone: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [phoneErrors, setPhoneErrors] = useState(phoneInitial);
  const mailInitial = {
    mail: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [mailErrors, setMailErrors] = useState(mailInitial);
  const passwordInitial = {
    password: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [passwordErrors, setPasswordErrors] = useState(passwordInitial);
  const addressInitial = {
    street: {
      value: '',
      invalid: false,
      message: '',
    },
    numExt: {
      value: '',
      invalid: false,
      message: '',
    },
    numInt: {
      value: '',
      invalid: false,
      message: '',
    },
    postalCode: {
      value: '',
      invalid: false,
      message: '',
    },
    city: {
      value: '',
      invalid: false,
      message: '',
    },
    state: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [addressErrors, setAddressErrors] = useState(addressInitial);
  const paymentInitial = {
    type: {
      value: '',
      invalid: false,
      message: '',
    },
    cardNumber: {
      value: '',
      invalid: false,
      message: '',
    },
    expiration: {
      value: '',
      invalid: false,
      message: '',
    },
    cvv: {
      value: '',
      invalid: false,
      message: '',
    }
  };
  const [paymentErrors, setPaymentErrors] = useState(paymentInitial);

  // Products Description Forms
  const pozoleInitial = {
    requiredDescription: {
      value: '',
      invalid: false,
      message: '',
    },
  };
  const [pozoleErrors, setPozoleErrors] = useState(pozoleInitial);
  const pozoleChInitial = {
    requiredDescription: {
      value: '',
      invalid: false,
      message: '',
    },
  };
  const [pozoleChErrors, setPozoleChErrors] = useState(pozoleChInitial);
  const flautasInitial = {
    requiredDescription: {
      value: '',
      invalid: false,
      message: '',
    },
  };
  const [flautasErrors, setFlautasErrors] = useState(flautasInitial);
  const flautasAhogadasInitial = {
    requiredDescription: {
      value: '',
      invalid: false,
      message: '',
    },
  };
  const [flautasAhogadasErrors, setFlautasAhogadasErrors] = useState(flautasAhogadasInitial);
  const quesadillaSInitial = {
    quesadillaS: {
      coccion: {
        value: '',
        invalid: false,
        message: '',
      },
      relleno: {
        value: '',
        invalid: false,
        message: '',
      },
    }
  };
  const [quesadillaSErrors, setQuesadillaSErrors] = useState(quesadillaSInitial);
  const quesadillaSPInitial = {
    quesadillaSP: {
      coccion: {
        value: '',
        invalid: false,
        message: '',
      },
      relleno: {
        value: '',
        invalid: false,
        message: '',
      },
    }
  };
  const [quesadillaSPErrors, setQuesadillaSPErrors] = useState(quesadillaSPInitial);
  const quesadillaCInitial = {
    quesadillaC: {
      coccion: {
        value: '',
        invalid: false,
        message: '',
      },
      relleno: {
        value: '',
        invalid: false,
        message: '',
      },
      relleno2: {
        value: '',
        invalid: false,
        message: '',
      }
    }
  };
  const [quesadillaCErrors, setQuesadillaCErrors] = useState(quesadillaCInitial);
  const quesadillaCPInitial = {
    quesadillaCP: {
      coccion: {
        value: '',
        invalid: false,
        message: '',
      },
      relleno: {
        value: '',
        invalid: false,
        message: '',
      },
      relleno2: {
        value: '',
        invalid: false,
        message: '',
      }
    }
  };
  const [quesadillaCPErrors, setQuesadillaCPErrors] = useState(quesadillaCPInitial);
  const pambazoGInitial = {
    pambazoG: {
      relleno: {
        value: '',
        invalid: false,
        message: '',
      },
    }
  };
  const [pambazoGErrors, setPambazoGErrors] = useState(pambazoGInitial);
  const pambazoGQInitial = {
    pambazoGQ: {
      relleno: {
        value: '',
        invalid: false,
        message: '',
      },
    }
  };
  const [pambazoGQErrors, setPambazoGQErrors] = useState(pambazoGQInitial);
  const sopeSInitial = {
    sopeS: {
      coccion: {
        value: '',
        invalid: false,
        message: '',
      },
    }
  };
  const [sopeSErrors, setSopeSErrors] = useState(sopeSInitial);
  const sopeSQInitial = {
    sopeSQ: {
      coccion: {
        value: '',
        invalid: false,
        message: '',
      },
    }
  };
  const [sopeSQErrors, setSopeSQErrors] = useState(sopeSQInitial);
  const sopeGInitial = {
    sopeG: {
      coccion: {
        value: '',
        invalid: false,
        message: '',
      },
      relleno: {
        value: '',
        invalid: false,
        message: '',
      },
    }
  };
  const [sopeGErrors, setSopeGErrors] = useState(sopeGInitial);
  const sopeGQInitial = {
    sopeGQ: {
      coccion: {
        value: '',
        invalid: false,
        message: '',
      },
      relleno: {
        value: '',
        invalid: false,
        message: '',
      },
    }
  };
  const [sopeGQErrors, setSopeGQErrors] = useState(sopeGQInitial);
  const sopeBInitial = {
    sopeB: {
      coccion: {
        value: '',
        invalid: false,
        message: '',
      },
    }
  };
  const [sopeBErrors, setSopeBErrors] = useState(sopeBInitial);
  const sopeBQInitial = {
    sopeBQ: {
      coccion: {
        value: '',
        invalid: false,
        message: '',
      },
    }
  };
  const [sopeBQErrors, setSopeBQErrors] = useState(sopeBQInitial);

  // NO edit
  function updateValueInput (inputValue, inputName, form) {
    if (form === 'login') {
      const newLoginErrors = { ...loginErrors };
      newLoginErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newLoginErrors[inputName].invalid = validation.invalid;
      newLoginErrors[inputName].message = validation.message;
      setLoginErrors(newLoginErrors);
    }
    if (form === 'register') {
      const newRegisterErrors = { ...registerErrors };
      newRegisterErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newRegisterErrors[inputName].invalid = validation.invalid;
      newRegisterErrors[inputName].message = validation.message;
      setRegisterErrors(newRegisterErrors);
    }
    if (form === 'reserveTerrace') {
      const newReserveTerraceErrors = { ...reserveTerraceErrors };
      newReserveTerraceErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newReserveTerraceErrors[inputName].invalid = validation.invalid;
      newReserveTerraceErrors[inputName].message = validation.message;
      setReserveTerraceErrors(newReserveTerraceErrors);
    }
    if (form === 'reserveTable') {
      const newReserveTableErrors = { ...reserveTableErrors };
      newReserveTableErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newReserveTableErrors[inputName].invalid = validation.invalid;
      newReserveTableErrors[inputName].message = validation.message;
      setReserveTableErrors(newReserveTableErrors);
    }
    if (form === 'image') {
      const newImageErrors = { ...imageErrors };
      newImageErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newImageErrors[inputName].invalid = validation.invalid;
      newImageErrors[inputName].message = validation.message;
      setImageErrors(newImageErrors);
    }
    if (form === 'name') {
      const newNameErrors = { ...nameErrors };
      newNameErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newNameErrors[inputName].invalid = validation.invalid;
      newNameErrors[inputName].message = validation.message;
      setNameErrors(newNameErrors);
    }
    if (form === 'phone') {
      const newPhoneErrors = { ...phoneErrors };
      newPhoneErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newPhoneErrors[inputName].invalid = validation.invalid;
      newPhoneErrors[inputName].message = validation.message;
      setPhoneErrors(newPhoneErrors);
    }
    if (form === 'mail') {
      const newMailErrors = { ...mailErrors };
      newMailErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newMailErrors[inputName].invalid = validation.invalid;
      newMailErrors[inputName].message = validation.message;
      setMailErrors(newMailErrors);
    }
    if (form === 'password') {
      const newPasswordErrors = { ...passwordErrors };
      newPasswordErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newPasswordErrors[inputName].invalid = validation.invalid;
      newPasswordErrors[inputName].message = validation.message;
      setPasswordErrors(newPasswordErrors);
    }
    if (form === 'address') {
      const newAddressErrors = { ...addressErrors };
      newAddressErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newAddressErrors[inputName].invalid = validation.invalid;
      newAddressErrors[inputName].message = validation.message;
      setAddressErrors(newAddressErrors);
    }
    if (form === 'payment') {
      const newPaymentErrors = { ...paymentErrors };
      newPaymentErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newPaymentErrors[inputName].invalid = validation.invalid;
      newPaymentErrors[inputName].message = validation.message;
      setPaymentErrors(newPaymentErrors);
    }
    if (form === 'pozole') {
      const newPozoleErrors = { ...pozoleErrors };
      newPozoleErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newPozoleErrors[inputName].invalid = validation.invalid;
      newPozoleErrors[inputName].message = validation.message;
      setPozoleErrors(newPozoleErrors);
    }
    if (form === 'pozoleCh') {
      const newPozoleChErrors = { ...pozoleChErrors };
      newPozoleChErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newPozoleChErrors[inputName].invalid = validation.invalid;
      newPozoleChErrors[inputName].message = validation.message;
      setPozoleChErrors(newPozoleChErrors);
    }
    if (form === 'flautas') {
      const newFlautasErrors = { ...flautasErrors };
      newFlautasErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newFlautasErrors[inputName].invalid = validation.invalid;
      newFlautasErrors[inputName].message = validation.message;
      setFlautasErrors(newFlautasErrors);
    }
    if (form === 'flautasAhogadas') {
      const newFlautasAhogadasErrors = { ...flautasAhogadasErrors };
      newFlautasAhogadasErrors[inputName].value = inputValue;
      const validation = validateInput(inputValue, inputName);
      newFlautasAhogadasErrors[inputName].invalid = validation.invalid;
      newFlautasAhogadasErrors[inputName].message = validation.message;
      setFlautasAhogadasErrors(newFlautasAhogadasErrors);
    }
    if (form === 'quesadillaS') {
      const newQuesadillaSErrors = { ...quesadillaSErrors };
      const [quesadillaS, input] = inputName.split('.');
      newQuesadillaSErrors[quesadillaS][input].value = inputValue;
      const validation = validateInput(inputValue, input);
      newQuesadillaSErrors[quesadillaS][input].invalid = validation.invalid;
      newQuesadillaSErrors[quesadillaS][input].message = validation.message;
      setQuesadillaSErrors(newQuesadillaSErrors);
    }
    if (form === 'quesadillaSP') {
      const newQuesadillaSPErrors = { ...quesadillaSPErrors };
      const [quesadillaSP, input] = inputName.split('.');
      newQuesadillaSPErrors[quesadillaSP][input].value = inputValue;
      const validation = validateInput(inputValue, input);
      newQuesadillaSPErrors[quesadillaSP][input].invalid = validation.invalid;
      newQuesadillaSPErrors[quesadillaSP][input].message = validation.message;
      setQuesadillaSPErrors(newQuesadillaSPErrors);
    }
    if (form === 'quesadillaC') {
      const newQuesadillaCErrors = { ...quesadillaCErrors };
      const [quesadillaC, input] = inputName.split('.');
      newQuesadillaCErrors[quesadillaC][input].value = inputValue;
      const validation = validateInput(inputValue, input);
      newQuesadillaCErrors[quesadillaC][input].invalid = validation.invalid;
      newQuesadillaCErrors[quesadillaC][input].message = validation.message;
      setQuesadillaCErrors(newQuesadillaCErrors);
    }
    if (form === 'quesadillaCP') {
      const newQuesadillaCPErrors = { ...quesadillaCPErrors };
      const [quesadillaCP, input] = inputName.split('.');
      newQuesadillaCPErrors[quesadillaCP][input].value = inputValue;
      const validation = validateInput(inputValue, input);
      newQuesadillaCPErrors[quesadillaCP][input].invalid = validation.invalid;
      newQuesadillaCPErrors[quesadillaCP][input].message = validation.message;
      setQuesadillaCPErrors(newQuesadillaCPErrors);
    }
    if (form === 'pambazoG') {
      const newPambazoGErrors = { ...pambazoGErrors };
      const [pambazoG, input] = inputName.split('.');
      newPambazoGErrors[pambazoG][input].value = inputValue;
      const validation = validateInput(inputValue, input);
      newPambazoGErrors[pambazoG][input].invalid = validation.invalid;
      newPambazoGErrors[pambazoG][input].message = validation.message;
      setPambazoGErrors(newPambazoGErrors);
    }
    if (form === 'pambazoGQ') {
      const newPambazoGQErrors = { ...pambazoGQErrors };
      const [pambazoGQ, input] = inputName.split('.');
      newPambazoGQErrors[pambazoGQ][input].value = inputValue;
      const validation = validateInput(inputValue, input);
      newPambazoGQErrors[pambazoGQ][input].invalid = validation.invalid;
      newPambazoGQErrors[pambazoGQ][input].message = validation.message;
      setPambazoGQErrors(newPambazoGQErrors);
    }
    if (form === 'sopeS') {
      const newSopeSErrors = { ...sopeSErrors };
      const [sopeS, input] = inputName.split('.');
      newSopeSErrors[sopeS][input].value = inputValue;
      const validation = validateInput(inputValue, input);
      newSopeSErrors[sopeS][input].invalid = validation.invalid;
      newSopeSErrors[sopeS][input].message = validation.message;
      setSopeSErrors(newSopeSErrors);
    }
    if (form === 'sopeSQ') {
      const newSopeSQErrors = { ...sopeSQErrors };
      const [sopeSQ, input] = inputName.split('.');
      newSopeSQErrors[sopeSQ][input].value = inputValue;
      const validation = validateInput(inputValue, input);
      newSopeSQErrors[sopeSQ][input].invalid = validation.invalid;
      newSopeSQErrors[sopeSQ][input].message = validation.message;
      setSopeSQErrors(newSopeSQErrors);
    }
    if (form === 'sopeG') {
      const newSopeGErrors = { ...sopeGErrors };
      const [sopeG, input] = inputName.split('.');
      newSopeGErrors[sopeG][input].value = inputValue;
      const validation = validateInput(inputValue, input);
      newSopeGErrors[sopeG][input].invalid = validation.invalid;
      newSopeGErrors[sopeG][input].message = validation.message;
      setSopeGErrors(newSopeGErrors);
    }
    if (form === 'sopeGQ') {
      const newSopeGQErrors = { ...sopeGQErrors };
      const [sopeGQ, input] = inputName.split('.');
      newSopeGQErrors[sopeGQ][input].value = inputValue;
      const validation = validateInput(inputValue, input);
      newSopeGQErrors[sopeGQ][input].invalid = validation.invalid;
      newSopeGQErrors[sopeGQ][input].message = validation.message;
      setSopeGQErrors(newSopeGQErrors);
    }
    if (form === 'sopeB') {
      const newSopeBErrors = { ...sopeBErrors };
      const [sopeB, input] = inputName.split('.');
      newSopeBErrors[sopeB][input].value = inputValue;
      const validation = validateInput(inputValue, input);
      newSopeBErrors[sopeB][input].invalid = validation.invalid;
      newSopeBErrors[sopeB][input].message = validation.message;
      setSopeBErrors(newSopeBErrors);
    }
    if (form === 'sopeBQ') {
      const newSopeBQErrors = { ...sopeBQErrors };
      const [sopeBQ, input] = inputName.split('.');
      newSopeBQErrors[sopeBQ][input].value = inputValue;
      const validation = validateInput(inputValue, input);
      newSopeBQErrors[sopeBQ][input].invalid = validation.invalid;
      newSopeBQErrors[sopeBQ][input].message = validation.message;
      setSopeBQErrors(newSopeBQErrors);
    }
    // agregar los demas forms
  }

  // edit
  function getInfoError (inputName, form) {
    if (form === 'login') {
      return loginErrors[inputName];
    }
    if (form === 'register') {
      return registerErrors[inputName];
    }
    if (form === 'reserveTerrace') {
      return reserveTerraceErrors[inputName];
    }
    if (form === 'reserveTable') {
      return reserveTableErrors[inputName];
    }
    if (form === 'image') {
      return imageErrors[inputName];
    }
    if (form === 'name') {
      return nameErrors[inputName];
    }
    if (form === 'phone') {
      return phoneErrors[inputName];
    }
    if (form === 'mail') {
      return mailErrors[inputName];
    }
    if (form === 'password') {
      return passwordErrors[inputName];
    }
    if (form === 'address') {
      return addressErrors[inputName];
    }
    if (form === 'payment') {
      return paymentErrors[inputName];
    }
    if (form === 'pozole') {
      return pozoleErrors[inputName];
    }
    if (form === 'pozoleCh') {
      return pozoleChErrors[inputName];
    }
    if (form === 'flautas') {
      return flautasErrors[inputName];
    }
    if (form === 'flautasAhogadas') {
      return flautasAhogadasErrors[inputName];
    }
    if (form === 'quesadillaS') {
      const [quesadillaS, input] = inputName.split('.');
      return quesadillaSErrors[quesadillaS][input];
    }
    if (form === 'quesadillaSP') {
      const [quesadillaSP, input] = inputName.split('.');
      return quesadillaSPErrors[quesadillaSP][input];
    }
    if (form === 'quesadillaC') {
      const [quesadillaC, input] = inputName.split('.');
      return quesadillaCErrors[quesadillaC][input];
    }
    if (form === 'quesadillaCP') {
      const [quesadillaCP, input] = inputName.split('.');
      return quesadillaCPErrors[quesadillaCP][input];
    }
    if (form === 'pambazoG') {
      const [pambazoG, input] = inputName.split('.');
      return pambazoGErrors[pambazoG][input];
    }
    if (form === 'pambazoGQ') {
      const [pambazoGQ, input] = inputName.split('.');
      return pambazoGQErrors[pambazoGQ][input];
    }
    if (form === 'sopeS') {
      const [sopeS, input] = inputName.split('.');
      return sopeSErrors[sopeS][input];
    }
    if (form === 'sopeSQ') {
      const [sopeSQ, input] = inputName.split('.');
      return sopeSQErrors[sopeSQ][input];
    }
    if (form === 'sopeG') {
      const [sopeG, input] = inputName.split('.');
      return sopeGErrors[sopeG][input];
    }
    if (form === 'sopeGQ') {
      const [sopeGQ, input] = inputName.split('.');
      return sopeGQErrors[sopeGQ][input];
    }
    if (form === 'sopeB') {
      const [sopeB, input] = inputName.split('.');
      return sopeBErrors[sopeB][input];
    }
    if (form === 'sopeBQ') {
      const [sopeBQ, input] = inputName.split('.');
      return sopeBQErrors[sopeBQ][input];
    }
    // agregar los demas forms
  }

  // edit
  function isFormError (form) {
    if (form === 'login') {
      updateValueInput(loginErrors.mail.value, 'mail', form);
      updateValueInput(loginErrors.password.value, 'password', form);
      return validateForm(loginErrors);
    }
    if (form === 'register') {
      updateValueInput(registerErrors.name.value, 'name', form);
      updateValueInput(registerErrors.mail.value, 'mail', form);
      updateValueInput(registerErrors.phone.value, 'phone', form);
      updateValueInput(registerErrors.password.value, 'password', form);
      updateValueInput(registerErrors.confirmPassword.value, 'confirmPassword', form);
      return validateForm(registerErrors);
    }
    if (form === 'reserveTerrace') {
      updateValueInput(reserveTerraceErrors.range30.value, 'range30', form);
      updateValueInput(reserveTerraceErrors.date.value, 'date', form);
      updateValueInput(reserveTerraceErrors.time.value, 'time', form);
      return validateForm(reserveTerraceErrors);
    }
    if (form === 'reserveTable') {
      updateValueInput(reserveTableErrors.range1.value, 'range1', form);
      updateValueInput(reserveTableErrors.date.value, 'date', form);
      updateValueInput(reserveTableErrors.time.value, 'time', form);
      return validateForm(reserveTableErrors);
    }
    if (form === 'image') {
      updateValueInput(imageErrors.image.value, 'image', form);
      return validateForm(imageErrors);
    }
    if (form === 'name') {
      updateValueInput(nameErrors.name.value, 'name', form);
      return validateForm(nameErrors);
    }
    if (form === 'phone') {
      updateValueInput(phoneErrors.phone.value, 'phone', form);
      return validateForm(phoneErrors);
    }
    if (form === 'mail') {
      updateValueInput(mailErrors.mail.value, 'mail', form);
      return validateForm(mailErrors);
    }
    if (form === 'password') {
      updateValueInput(passwordErrors.password.value, 'password', form);
      return validateForm(passwordErrors);
    }
    if (form === 'address') {
      updateValueInput(addressErrors.street.value, 'street', form);
      updateValueInput(addressErrors.numExt.value, 'numExt', form);
      updateValueInput(addressErrors.numInt.value, 'numInt', form);
      updateValueInput(addressErrors.postalCode.value, 'postalCode', form);
      updateValueInput(addressErrors.city.value, 'city', form);
      updateValueInput(addressErrors.state.value, 'state', form);
      return validateForm(addressErrors);
    }
    if (form === 'payment') {
      updateValueInput(paymentErrors.type.value, 'type', form);
      updateValueInput(paymentErrors.cardNumber.value, 'cardNumber', form);
      updateValueInput(paymentErrors.expiration.value, 'expiration', form);
      updateValueInput(paymentErrors.cvv.value, 'cvv', form);
      return validateForm(paymentErrors);
    }
    if (form === 'pozole') {
      Object.entries(pozoleErrors).forEach(([key, value]) => {
        updateValueInput(value.value, key, form);
      });
      return validateForm(pozoleErrors);
    }
    if (form === 'pozoleCh') {
      Object.entries(pozoleChErrors).forEach(([key, value]) => {
        updateValueInput(value.value, key, form);
      });
      return validateForm(pozoleChErrors);
    // agregar los demas forms
    }
    if (form === 'flautas') {
      Object.entries(flautasErrors).forEach(([key, value]) => {
        updateValueInput(value.value, key, form);
      });
      return validateForm(flautasErrors);
    }
    if (form === 'flautasAhogadas') {
      Object.entries(flautasAhogadasErrors).forEach(([key, value]) => {
        updateValueInput(value.value, key, form);
      });
      return validateForm(flautasAhogadasErrors);
    }
    if (form === 'quesadillaS') {
      Object.entries(quesadillaSErrors).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          updateValueInput(value2.value, `${key}.${key2}`, form);
        });
      });
      return validateForm(quesadillaSErrors);
    }
    if (form === 'quesadillaSP') {
      Object.entries(quesadillaSPErrors).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          updateValueInput(value2.value, `${key}.${key2}`, form);
        });
      });
      return validateForm(quesadillaSPErrors);
    }
    if (form === 'quesadillaC') {
      Object.entries(quesadillaCErrors).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          updateValueInput(value2.value, `${key}.${key2}`, form);
        });
      });
      return validateForm(quesadillaCErrors);
    }
    if (form === 'quesadillaCP') {
      Object.entries(quesadillaCPErrors).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          updateValueInput(value2.value, `${key}.${key2}`, form);
        });
      });
      return validateForm(quesadillaCPErrors);
    }
    if (form === 'pambazoG') {
      Object.entries(pambazoGErrors).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          updateValueInput(value2.value, `${key}.${key2}`, form);
        });
      });
      return validateForm(pambazoGErrors);
    }
    if (form === 'pambazoGQ') {
      Object.entries(pambazoGQErrors).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          updateValueInput(value2.value, `${key}.${key2}`, form);
        });
      });
      return validateForm(pambazoGQErrors);
    }
    if (form === 'sopeS') {
      Object.entries(sopeSErrors).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          updateValueInput(value2.value, `${key}.${key2}`, form);
        });
      });
      return validateForm(sopeSErrors);
    }
    if (form === 'sopeSQ') {
      Object.entries(sopeSQErrors).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          updateValueInput(value2.value, `${key}.${key2}`, form);
        });
      });
      return validateForm(sopeSQErrors);
    }
    if (form === 'sopeG') {
      Object.entries(sopeGErrors).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          updateValueInput(value2.value, `${key}.${key2}`, form);
        });
      });
      return validateForm(sopeGErrors);
    }
    if (form === 'sopeGQ') {
      Object.entries(sopeGQErrors).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          updateValueInput(value2.value, `${key}.${key2}`, form);
        });
      });
      return validateForm(sopeGQErrors);
    }
    if (form === 'sopeB') {
      Object.entries(sopeBErrors).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          updateValueInput(value2.value, `${key}.${key2}`, form);
        });
      });
      return validateForm(sopeBErrors);
    }
    if (form === 'sopeBQ') {
      Object.entries(sopeBQErrors).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          updateValueInput(value2.value, `${key}.${key2}`, form);
        });
      });
      return validateForm(sopeBQErrors);
    }
  }

  // no edit
  function validateForm (form) {
    if (form.quesadillaS) {
      let isInvalid = false;
      Object.entries(form).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          if (value2.invalid === true) {
          isInvalid = true;
          }
        });
      });
      if (isInvalid) {
      return true;
      }
    }
    if (form.quesadillaSP) {
      let isInvalid = false;
      Object.entries(form).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          if (value2.invalid === true) {
          isInvalid = true;
          }
        });
      });
      if (isInvalid) {
      return true;
      }
    }
    if (form.quesadillaC) {
      let isInvalid = false;
      Object.entries(form).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          if (value2.invalid === true) {
          isInvalid = true;
          }
        });
      });
      if (isInvalid) {
      return true;
      }
    }
    if (form.quesadillaCP) {
      let isInvalid = false;
      Object.entries(form).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          if (value2.invalid === true) {
          isInvalid = true;
          }
        });
      });
      if (isInvalid) {
      return true;
      }
    }
    if (form.pambazoG) {
      let isInvalid = false;
      Object.entries(form).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          if (value2.invalid === true) {
          isInvalid = true;
          }
        });
      });
      if (isInvalid) {
      return true;
      }
    }
    if (form.pambazoGQ) {
      let isInvalid = false;
      Object.entries(form).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          if (value2.invalid === true) {
          isInvalid = true;
          }
        });
      });
      if (isInvalid) {
      return true;
      }
    }
    if (form.sopeS) {
      let isInvalid = false;
      Object.entries(form).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          if (value2.invalid === true) {
          isInvalid = true;
          }
        });
      });
      if (isInvalid) {
      return true;
      }
    }
    if (form.sopeSQ) {
      let isInvalid = false;
      Object.entries(form).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          if (value2.invalid === true) {
          isInvalid = true;
          }
        });
      });
      if (isInvalid) {
      return true;
      }
    }
    if (form.sopeG) {
      let isInvalid = false;
      Object.entries(form).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          if (value2.invalid === true) {
          isInvalid = true;
          }
        });
      });
      if (isInvalid) {
      return true;
      }
    }
    if (form.sopeGQ) {
      let isInvalid = false;
      Object.entries(form).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          if (value2.invalid === true) {
          isInvalid = true;
          }
        });
      });
      if (isInvalid) {
      return true;
      }
    }
    if (form.sopeB) {
      let isInvalid = false;
      Object.entries(form).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          if (value2.invalid === true) {
          isInvalid = true;
          }
        });
      });
      if (isInvalid) {
      return true;
      }
    }
    if (form.sopeBQ) {
      let isInvalid = false;
      Object.entries(form).forEach(([key, value]) => {
        Object.entries(value).forEach(([key2, value2]) => {
          if (value2.invalid === true) {
          isInvalid = true;
          }
        });
      });
      if (isInvalid) {
      return true;
      }
    }
    return Object.values(form).some((input) => input.invalid);
  }

  // no edit
  function validateInput(inputValue, validationType) {
    if (validationType === 'requiredDescription') {
      if (inputValue === '') {
        return { invalid: true, message: 'Es necesario elegir la proteina' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'coccion') {
      if (inputValue === '') {
        return { invalid: true, message: 'Es necesario elegir un metodo de coccion' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'relleno') {
      if (inputValue === '') {
        return { invalid: true, message: 'Es necesario elegir el guisado' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'relleno2') {
      if (inputValue === '') {
        return { invalid: true, message: 'Es necesario elegir el segundo guisado' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (inputValue === '') {
      return { invalid: true, message: 'Este campo no puede estar vacio' }
    } 
    if (/<\/?[a-z][\s\S]*>/i.test(inputValue)) {
      return { invalid: true, message: 'El valor no puede contener etiquetas HTML' }
    }
    if (validationType === 'mail') {
      if (!/\S+@\S+\.\S+/.test(inputValue)){
        return { invalid: true, message: 'Correo invalido' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'password') {
      if (inputValue.length < 8) {
        return { invalid: true, message: 'La contraseña debe tener al menos 8 caracteres' }
      } else if (!/[a-z]/.test(inputValue)) {
        return { invalid: true, message: 'La contraseña debe tener al menos una letra minúscula' }
      } else if (!/[A-Z]/.test(inputValue)) {
        return { invalid: true, message: 'La contraseña debe tener al menos una letra mayúscula' }
      } else if (!/[0-9]/.test(inputValue)) {
        return { invalid: true, message: 'La contraseña debe tener al menos un número' }
      } else if (!/[!@#$%^&*(),.?":{}|]/.test(inputValue)) {
        return { invalid: true, message: 'La contraseña debe tener al menos un caracter especial (!@#$%^&*(),.?":{}|)' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    // Esta quiza tenemos que moverla a una funcion aparte
    if (validationType === 'confirmPassword') {
      if (inputValue !== registerErrors.password.value) {
        return { invalid: true, message: 'Las contraseñas no coinciden' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'phone') {
      if (inputValue.length < 10) {
        return { invalid: true, message: 'El telefono debe tener al menos 10 digitos' }
      } else if (!/[0-9]/.test(inputValue)) {
        return { invalid: true, message: 'El telefono solo puede contener numeros' }
      } else if (!/^[0-9]+$/.test(inputValue)) {
        return { invalid: true, message: 'El telefono solo puede contener numeros' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'name') {
      if (inputValue.length < 3) {
        return { invalid: true, message: 'El nombre debe tener al menos 3 caracteres' }
      } else if (!/^[a-zA-Z ]+$/.test(inputValue)) {
        return { invalid: true, message: 'El nombre solo puede contener letras' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'range1') {
      if (inputValue < 1 || inputValue > 20) {
        return { invalid: true, message: 'El rango debe ser de 1 a 20' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'range30') {
      if (inputValue < 30 || inputValue > 60) {
        return { invalid: true, message: 'El rango debe ser de 30 a 60' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'street') {
      if (inputValue.length < 3) {
        return { invalid: true, message: 'La calle debe tener al menos 3 caracteres' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'postalCode') {
      if (inputValue.length < 5) {
        return { invalid: true, message: 'El codigo postal debe tener al menos 5 caracteres' }
      } else if (!/^[0-9]+$/.test(inputValue)) {
        return { invalid: true, message: 'El codigo postal solo puede contener numeros' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'city') {
      if (inputValue.length < 3) {
        return { invalid: true, message: 'La ciudad debe tener al menos 3 caracteres' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'state') {
      if (inputValue.length < 3) {
        return { invalid: true, message: 'El estado debe tener al menos 3 caracteres' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'type') {
      if (inputValue.length < 4) {
        return { invalid: true, message: 'El tipo de tarjeta debe tener al menos 4 caracteres' }
      } else if (!/^[a-zA-Z ]+$/.test(inputValue)) {
        return { invalid: true, message: 'El tipo de tarjeta solo puede contener letras' }
      } else if (inputValue !== 'Visa' && inputValue !== 'Mastercard' && inputValue !== 'AMEX') {
        return { invalid: true, message: `El tipo de tarjeta solo puede ser Visa, Mastercard o AMEX` }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'cardNumber') {
      if (inputValue.length < 16) {
        return { invalid: true, message: 'El numero de tarjeta debe tener al menos 16 caracteres' }
      } else if (!/^[0-9]+$/.test(inputValue)) {
        return { invalid: true, message: 'El numero de tarjeta solo puede contener numeros' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    if (validationType === 'cvv') {
      if (inputValue.length < 3) {
        return { invalid: true, message: 'El cvv debe tener al menos 3 caracteres' }
      } else if (inputValue.length > 4) {
        return { invalid: true, message: 'El cvv no puede tener mas de 4 caracteres' }
      } else if (!/^[0-9]+$/.test(inputValue)) {
        return { invalid: true, message: 'El cvv solo puede contener numeros' }
      } else {
        return { invalid: false, message: '' }
      }
    }
    return { invalid: false, message: '' }
  }

  // edit
  function addInput(form, inputIndex) {
    if (form === 'pozole') {
      const inputForAdd = {
        [inputIndex]: {
          value: '',
          invalid: false,
          message: '',
        }
      }
      const newPozoleErrors = { ...pozoleErrors, ...inputForAdd };
      setPozoleErrors(newPozoleErrors);
    }
    if (form === 'pozoleCh') {
      const inputForAdd = {
        [inputIndex]: {
          value: '',
          invalid: false,
          message: '',
        }
      }
      const newPozoleChErrors = { ...pozoleChErrors, ...inputForAdd };
      setPozoleChErrors(newPozoleChErrors);
    }
    if (form === 'flautas') {
      const inputForAdd = {
        [inputIndex]: {
          value: '',
          invalid: false,
          message: '',
        }
      }
      const newFlautasErrors = { ...flautasErrors, ...inputForAdd };
      setFlautasErrors(newFlautasErrors);
    }
    if (form === 'flautasAhogadas') {
      const inputForAdd = {
        [inputIndex]: {
          value: '',
          invalid: false,
          message: '',
        }
      }
      const newFlautasAhogadasErrors = { ...flautasAhogadasErrors, ...inputForAdd };
      setFlautasAhogadasErrors(newFlautasAhogadasErrors);
    }
    if (form === 'quesadillaS') {
      const inputForAdd = {
        [inputIndex]: {
          ...quesadillaSInitial.quesadillaS,
        }
      }
      const newQuesadillaSErrors = { ...quesadillaSErrors, ...inputForAdd };
      setQuesadillaSErrors(newQuesadillaSErrors);
    }
    if (form === 'quesadillaSP') {
      const inputForAdd = {
        [inputIndex]: {
          ...quesadillaSPInitial.quesadillaSP,
        }
      }
      const newQuesadillaSPErrors = { ...quesadillaSPErrors, ...inputForAdd };
      setQuesadillaSPErrors(newQuesadillaSPErrors);
    }
    if (form === 'quesadillaC') {
      const inputForAdd = {
        [inputIndex]: {
          ...quesadillaCInitial.quesadillaC,
        }
      }
      const newQuesadillaCErrors = { ...quesadillaCErrors, ...inputForAdd };
      setQuesadillaCErrors(newQuesadillaCErrors);
    }
    if (form === 'quesadillaCP') {
      const inputForAdd = {
        [inputIndex]: {
          ...quesadillaCPInitial.quesadillaCP,
        }
      }
      const newQuesadillaCPErrors = { ...quesadillaCPErrors, ...inputForAdd };
      setQuesadillaCPErrors(newQuesadillaCPErrors);
    }
    if (form === 'pambazoG') {
      const inputForAdd = {
        [inputIndex]: {
          ...pambazoGInitial.pambazoG,
        }
      }
      const newPambazoGErrors = { ...pambazoGErrors, ...inputForAdd };
      setPambazoGErrors(newPambazoGErrors);
    }
    if (form === 'pambazoGQ') {
      const inputForAdd = {
        [inputIndex]: {
          ...pambazoGQInitial.pambazoGQ,
        }
      }
      const newPambazoGQErrors = { ...pambazoGQErrors, ...inputForAdd };
      setPambazoGQErrors(newPambazoGQErrors);
    }
    if (form === 'sopeS') {
      const inputForAdd = {
        [inputIndex]: {
          ...sopeSInitial.sopeS,
        }
      }
      const newSopeSErrors = { ...sopeSErrors, ...inputForAdd };
      setSopeSErrors(newSopeSErrors);
    }
    if (form === 'sopeSQ') {
      const inputForAdd = {
        [inputIndex]: {
          ...sopeSQInitial.sopeSQ,
        }
      }
      const newSopeSQErrors = { ...sopeSQErrors, ...inputForAdd };
      setSopeSQErrors(newSopeSQErrors);
    }
    if (form === 'sopeG') {
      const inputForAdd = {
        [inputIndex]: {
          ...sopeGInitial.sopeG,
        }
      }
      const newSopeGErrors = { ...sopeGErrors, ...inputForAdd };
      setSopeGErrors(newSopeGErrors);
    }
    if (form === 'sopeGQ') {
      const inputForAdd = {
        [inputIndex]: {
          ...sopeGQInitial.sopeGQ,
        }
      }
      const newSopeGQErrors = { ...sopeGQErrors, ...inputForAdd };
      setSopeGQErrors(newSopeGQErrors);
    }
    if (form === 'sopeB') {
      const inputForAdd = {
        [inputIndex]: {
          ...sopeBInitial.sopeB,
        }
      }
      const newSopeBErrors = { ...sopeBErrors, ...inputForAdd };
      setSopeBErrors(newSopeBErrors);
    }
    if (form === 'sopeBQ') {
      const inputForAdd = {
        [inputIndex]: {
          ...sopeBQInitial.sopeBQ,
        }
      }
      const newSopeBQErrors = { ...sopeBQErrors, ...inputForAdd };
      setSopeBQErrors(newSopeBQErrors);
    }
  }

  return (
    <ErrorContext.Provider value={{ 
      updateValueInput,
      getInfoError,
      isFormError,
      addInput
      }}>
      {children}
    </ErrorContext.Provider>
  );
}

ErrorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};