import { NameSpace } from '../../../const/common-const';
import { State } from '../../../types/state-types';
import { IsToastShouldBeShown, ToastMessage } from '../../../types/toast-types';

export const getToastMessage = (state: State): ToastMessage => state[NameSpace.Toast].toastMessage;
export const getIsToastShouldBeShown = (state: State): IsToastShouldBeShown => state[NameSpace.Toast].isToastShouldBeShown;

