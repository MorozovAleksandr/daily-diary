import moment from 'moment';
import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TYPE_MODE } from './constants';
import { getMode } from './utils';

export type idType = string | undefined;
interface CreateDiaryNoteProps {
  id: idType;
  data: {
    date: string;
    title: string;
    text: string;
  };
}

const CreateDiaryNote: FC<CreateDiaryNoteProps> = ({ id, data }) => {
  const [mode, setMode] = useState<TYPE_MODE>(getMode(id));
  const [currentId, setCurrentId] = useState<idType>(id ?? uuidv4());
  const [date, setDate] = useState<string>(data?.date ?? moment().format('MM.DD.YYYY'));
  const [title, setTitle] = useState<string>(data?.title ?? '');
  const [text, setText] = useState<string>(data?.text ?? '');

  return <div></div>;
};

export default CreateDiaryNote;
