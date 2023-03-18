import React, { FC } from 'react';

import './styles.scss';

export interface DiaryNoteProps {
  date: string;
  title: string;
  text: string;
}

const DiaryNote: FC<DiaryNoteProps> = ({ date, title, text }) => {
  return (
    <div className={'DiaryNote'}>
      <div className={'DiaryNote__title'}>{title}</div>
      <div className={'DiaryNote__date'}>{date}</div>
      <div className={'DiaryNote__text'}>{text}</div>
    </div>
  );
};

export default DiaryNote;
