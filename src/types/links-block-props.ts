import { AppRoutes } from '../const/router-const';

export type LinksList = {
  route: AppRoutes;
  anchor: string;
}[];

export type LinksBlockProps = {
  links: {
    route: AppRoutes;
    anchor: string;
  }[]
};
