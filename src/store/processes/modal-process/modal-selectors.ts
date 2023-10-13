import { NameSpace } from '../../../const/common-const';
import { IsModalShouldBeShown } from '../../../types/modal-types';
import { State } from '../../../types/state-types';

export const getIsModalShouldBeShown = (state: State): IsModalShouldBeShown => state[NameSpace.Modal].isModalShouldBeShown;

