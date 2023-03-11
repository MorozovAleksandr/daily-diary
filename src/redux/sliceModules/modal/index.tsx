import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

export interface Modal {
  component: string;
  data: any;
}

export type ModalState = Modal | null;

const initialState: ModalState = null;

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModal: (state, action: PayloadAction<Modal>): any => action.payload, //TODO: Какой тип данных возвратит setModal???
    removeModal: () => null,
  },
});

export const { setModal, removeModal } = modalSlice.actions;

export default modalSlice.reducer;
