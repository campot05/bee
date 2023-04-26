const refs = {
  form: document.querySelector('.modal-form'),
  name: document.getElementById('name'),
  tel: document.getElementById('tel'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  repeatPass: document.getElementById('repeat-pass'),
};

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const isValidForm = validateInputs();

  if (!isValidForm) {
    return;
  }
  refs.form.reset();
});

const setError = (el, message) => {
  const inputParrent = el.parentElement;
  const err = inputParrent.querySelector('.error');

  err.innerText = message;
  inputParrent.classList.add('no-valid');
};

const setSuccess = (el) => {
  const inputParrent = el.parentElement;
  console.log(inputParrent);
  const err = inputParrent.querySelector('.error');
  inputParrent.classList.remove('no-valid');
  err.innerText = '';
};

const isValidEmail = (email) => {
  const reg =
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{1,6}$/;
  return reg.test(email);
};

const isValidTel = (tel) => {
  const reg = /^\+?\d+$/;
  return reg.test(tel);
};

const validateInputs = () => {
  let isValidForm = true;

  const nameValue = refs.name.value.trim();
  const telValue = refs.tel.value.trim();
  const emailValue = refs.email.value.trim();
  const passwordValue = refs.password.value.trim();
  const repeatPassValue = refs.repeatPass.value.trim();

  if (nameValue === '') {
    setError(refs.name, 'Укажите Ваше имя');
    isValidForm = false;
  } else {
    setSuccess(refs.name);
  }

  if (telValue === '') {
    setError(refs.tel, 'Недостаточно количество символов');
    isValidForm = false;
  } else if (!isValidTel(telValue)) {
    setError(refs.tel, 'Могут быть только цифры');
    isValidForm = false;
  } else setSuccess(refs.tel);

  if (!isValidEmail(emailValue)) {
    setError(refs.email, 'Укажите корректную почту');
    isValidForm = false;
  } else {
    setSuccess(refs.email);
  }

  if (passwordValue.length < 6) {
    setError(refs.password, 'Пароль должен быть минимум 6 символов');
    isValidForm = false;
  } else {
    setSuccess(refs.password);
  }

  if (repeatPassValue !== passwordValue) {
    setError(refs.repeatPass, 'Пароли не совпадают');
    isValidForm = false;
  } else {
    setSuccess(refs.repeatPass);
  }
  return isValidForm;
};
