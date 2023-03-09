import React, { FC } from 'react';

import './styles.scss';

interface DiaryNoteProps {
  date: string;
  title: string;
  text: string;
}

const DiaryNote: FC<DiaryNoteProps> = ({ date, title, text }) => {
  return (
    <div className={'DiaryNote'}>
      <div>{title}</div>
      <div>{date}</div>
      <div>{text}</div>
    </div>
  );
};

export default DiaryNote;
