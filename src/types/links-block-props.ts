import { AppRoutes } from '../const/router-const';

export type LinksBlockProps = {
  links: {
    route: AppRoutes;
    anchor: string;
  }[]
};
