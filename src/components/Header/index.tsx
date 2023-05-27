import Button from '@mui/material/Button';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { removeModal, setModal } from '../../redux/sliceModules/modal';

import './styles.scss';

const Header: FC = () => {
  const dispatch = useDispatch();
  const hanldeCreateNote = () =>
    dispatch(setModal({ component: 'DiaryNote', modalProps: { x: 1, y: 2 } }));

  const handleDeleteNote = () => dispatch(removeModal());

  return (
    <div className={'Header'}>
      <div className='Header__buttons'>
        <Button variant='contained' onClick={hanldeCreateNote}>
          Создать
        </Button>
        <Button variant='contained' onClick={handleDeleteNote}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default Header;
