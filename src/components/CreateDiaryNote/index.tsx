import React, { FC, useState } from 'react';
import { uuid } from 'uuidv4';

import { TYPE_MODE } from './constants';
import { getMode } from './utils';

export type idType = string | undefined;
interface CreateDiaryNoteProps {
  id: idType;
}

const CreateDiaryNote: FC<CreateDiaryNoteProps> = ({ id }) => {
  const [mode, setMode] = useState<TYPE_MODE>(getMode(id));
  const [currentId, setCurrentId] = useState<idType>(id ?? uuid());
  return <div></div>;
};

export default CreateDiaryNote;
