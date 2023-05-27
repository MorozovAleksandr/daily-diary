import { idType } from '.';

import { MODE } from './constants';

export const getMode = (id: idType) => (id ? MODE.EDIT_MODE : MODE.CREATE_MODE);
