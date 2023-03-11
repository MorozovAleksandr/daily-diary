import React, { FC } from 'react';

import './styles/colors.scss';

import Main from './components/Main';

import Modal from './components/Modals';

const App: FC = () => {
  return (
    <div className='App'>
      <Main />
      <Modal />
    </div>
  );
};

export default App;
