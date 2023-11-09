import { LanguageCodes } from './languages-const';

export const MESSAGES = {
  NOT_FOUND_PAGE: {
    [LanguageCodes.Russian]: 'Такой страницы не существует',
    [LanguageCodes.English]: 'Page not found'
  },
  TASK_NOT_AVAILABLE_FOR_YOU: {
    [LanguageCodes.Russian]: 'Задача недоступна, она занята другим пользователем, либо у вас уже есть задача в работе',
    [LanguageCodes.English]: 'Task not available, it busy by other user or you already have running task'
  }
};

export const FORM_MESSAGES = {
  EMAIL_INCORRECT: {
    [LanguageCodes.Russian]: 'Введён некорректный email',
    [LanguageCodes.English]: 'Email is not correct'
  },
  EMAIL_EMPTY: {
    [LanguageCodes.Russian]: 'Email не может быть пустым',
    [LanguageCodes.English]: 'Email is empty'
  },
  PASSWORD_INCORRECT: {
    [LanguageCodes.Russian]: 'Только латинские буквы, цифры и символы',
    [LanguageCodes.English]: 'Only latin letters, numbers and symbols'
  },
  PASSWORD_EMPTY: {
    [LanguageCodes.Russian]: 'Пароль не может быть пустым',
    [LanguageCodes.English]: 'Password is empty'
  },
  PASSWORDS_NOT_MATCH: {
    [LanguageCodes.Russian]: 'Пароли не совпадают',
    [LanguageCodes.English]: 'Passwords doesn\'t match'
  },
  TEXTAREA_EMPTY: {
    [LanguageCodes.Russian]: 'Поле не может быть пустым',
    [LanguageCodes.English]: 'Field can\'t to be empty'
  }
};

