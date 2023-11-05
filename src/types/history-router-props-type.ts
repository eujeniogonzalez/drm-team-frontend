import type { BrowserHistory } from 'history';

export interface HistoryRouterPropsType {
  history: BrowserHistory,
  basename?: string,
  children?: React.ReactNode
}
