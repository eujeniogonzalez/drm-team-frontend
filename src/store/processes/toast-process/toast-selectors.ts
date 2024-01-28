import { NameSpace } from '../../../const/common-const';
import { StateType } from '../../../types/state-types';
import { IsToastShouldBeShownType, ToastMessageType } from '../../../types/toast-types';

export const getToastMessage = (state: StateType): ToastMessageType => (
  state[NameSpace.Toast].toastMessage
);

export const getIsToastShouldBeShown = (state: StateType): IsToastShouldBeShownType => (
  state[NameSpace.Toast].isToastShouldBeShown
);

