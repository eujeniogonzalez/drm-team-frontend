import { LinksListType } from './links-block-props-type';

export type MessagePropsType = {
  message: JSX.Element | string,
  links?: LinksListType
};
