import Button from '@mui/material/Button';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { DIARY_NOTE } from '../../constats';

import { removeModal, setModal } from '../../redux/sliceModules/modal';

import './styles.scss';

const Header: FC = () => {
  const dispatch = useDispatch();
  const hanldeCreateNote = () =>
    dispatch(
      setModal({
        component: DIARY_NOTE,
        data: { date: '12.12.12', title: 'Создать запись', text: '' },
      }),
    );

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
