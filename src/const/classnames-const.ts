import { LanguageCodes } from './languages-const';

export enum LoaderSizes {
  Micro = 'lds-ellipsis-micro',
  Small = 'lds-ellipsis-small',
  Medium = 'lds-ellipsis-medium',
  Large = 'lds-ellipsis-large'
};

export enum LoaderColors {
  White = 'lds-ellipsis-bg-white',
  Grey = 'lds-ellipsis-bg-grey',
  Main = 'lds-ellipsis-bg-main'
};

export enum TaskStatusIndicatorColors {
  New = 'task-status-indicator-new',
  Running = 'task-status-indicator-running',
  Reviewing = 'task-status-indicator-reviewing',
  Done = 'task-status-indicator-done'
};

export enum ButtonStyles {
  MainColor = 'button-main-color',
  GreyColor = 'button-grey-color',
  Unavailable = 'button-unavailable'
};

export const LANGUAGE_SWITCHER_CLASSES = {
  [LanguageCodes.English]: 'switcher-lever-english',
  [LanguageCodes.Russian]: 'switcher-lever-russian'
};

export const LANGUAGE_SWITCHER_IMAGE_CLASSES = {
  [LanguageCodes.English]: 'switcher-lever-image-english-visible',
  [LanguageCodes.Russian]: 'switcher-lever-image-russia-visible'
};
