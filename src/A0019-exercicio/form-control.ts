const inputUsername = document.querySelector('.username') as HTMLInputElement;
const inputEmail = document.querySelector('.email') as HTMLInputElement;
const inputPassword = document.querySelector('.password') as HTMLInputElement;
const inputPassword2 = document.querySelector('.password2') as HTMLInputElement;
const form = document.querySelector('.form') as HTMLFormElement;

import validator from 'validator';

form.addEventListener('submit', function (e) {
  e.preventDefault();
  hideMessagesError(form);
  verifyField();
  checkEmail(inputEmail);
  checkPassword(inputPassword, inputPassword2);
  if (shouldSendForm(form)) console.log('form enviado');
});

function verifyEmptyFields(): boolean {
  if (
    inputUsername.value === '' ||
    inputEmail.value === '' ||
    inputPassword.value === '' ||
    inputPassword2.value === ''
  ) {
    return true;
  }

  return false;
}

function showMessageError(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;

  errorMessage.innerText = msg;
  formFields.classList.add('show-error-message');
}

function verifyField(): void {
  if (verifyEmptyFields()) {
    if (inputUsername.value === '') {
      showMessageError(inputUsername, 'Campo usuário não pode estar vazio!');
    }
    if (inputEmail.value === '') {
      showMessageError(inputEmail, 'Campo email não pode estar vazio!');
    }
    if (inputPassword.value === '') {
      showMessageError(inputPassword, 'Campo senha não pode estar vazio!');
    }
    if (inputPassword2.value === '') {
      showMessageError(inputPassword2, 'Campo senha não pode estar vazio!');
    }
  }
}

function hideMessagesError(form: HTMLFormElement) {
  form.querySelectorAll('.show-error-message').forEach((item) => {
    item.classList.remove('show-error-message');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!validator.isEmail(input.value)) {
    showMessageError(input, 'Email inválido');
  }
}

function checkPassword(
  password1: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password1.value !== password2.value) {
    showMessageError(password1, 'As senhas precisam ser iguais!');
    showMessageError(password2, 'As senhas precisam ser iguais!');
  }
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.show-error-message').forEach(() => (send = false));
  return send;
}
