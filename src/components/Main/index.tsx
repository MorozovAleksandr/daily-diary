import React, { FC } from 'react';

import DiaryNoteList from '../DiaryNoteList';
import Header from '../Header';

import './styles.scss';

const Main: FC = () => {
  return (
    <div className='Main'>
      <Header />
      <DiaryNoteList />
    </div>
  );
};

export default Main;
