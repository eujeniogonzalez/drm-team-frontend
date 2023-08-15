import React from 'react';

export const MESSAGES = {
  SUCCESS_REGISTER: (
    <>
      Вы успешно зарегистрировались<br/><br/>
      Проверьте почту, мы отправили письмо со ссылкой для подтверждения
    </>
  ),
  NOT_FOUND_PAGE: 'Такой страницы не существует'
};

export const FORM_MESSAGES = {
  EMAIL_INCORRECT: 'Введён некорректный email',
  EMAIL_EMPTY: 'Email не может быть пустым',
  PASSWORD_INCORRECT: 'Только латинские буквы, цифры и символы',
  PASSWORD_EMPTY: 'Пароль не может быть пустым',
  PASSWORDS_NOT_MATCH: 'Пароли не совпадают'
};

