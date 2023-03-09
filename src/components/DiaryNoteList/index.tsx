import React, { FC } from 'react';

import DiaryNote from '../DiaryNote';

import './styles.scss';

const DiaryNoteList: FC = () => {
  return (
    <div className={'DiaryNoteList'}>
      <DiaryNote text={'текст'} title={'заголовок'} date={'дата'} />
    </div>
  );
};

export default DiaryNoteList;
