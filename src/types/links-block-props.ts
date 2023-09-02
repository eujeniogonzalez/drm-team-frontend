import { LinksBlockAlignment } from '../const/common-const';
import { AppRoutes } from '../const/router-const';

export type LinksList = {
  route: AppRoutes;
  anchor: string;
}[];

export type LinksBlockProps = {
  links: {
    route: AppRoutes;
    anchor: string;
  }[];
  alignment: LinksBlockAlignment;
};
