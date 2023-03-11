import { ModalState } from '.';

import { RootState } from '../../store';

export const selectModal = (state: RootState): ModalState => state.modal;
