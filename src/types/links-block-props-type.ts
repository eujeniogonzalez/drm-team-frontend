import { LinksBlockAlignment } from '../const/common-const';
import { AppRoutes } from '../const/router-const';

export type LinksListType = {
  route: AppRoutes,
  anchor: string
}[];

export type LinksBlockPropsType = {
  links: {
    route: AppRoutes,
    anchor: string
  }[],
  alignment: LinksBlockAlignment
};
