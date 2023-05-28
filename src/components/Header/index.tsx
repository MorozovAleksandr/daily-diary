import Button from '@mui/material/Button';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { CREATE_DIARY_NOTE } from '../../constats';

import { removeModal, setModal } from '../../redux/sliceModules/modal';

import './styles.scss';

const Header: FC = () => {
  const dispatch = useDispatch();
  const hanldeCreateNote = () =>
    dispatch(
      setModal({
        component: CREATE_DIARY_NOTE,
        modalProps: null,
      }),
    );

  const handleDeleteNote = () => dispatch(removeModal());

  return (
    <div className={'Header'}>
      <div className='Header__buttons'>
        <Button variant='contained' className='Header__button' onClick={hanldeCreateNote}>
          Создать
        </Button>
        <Button variant='contained' className='Header__button' onClick={handleDeleteNote}>
          Удалить
        </Button>
      </div>
    </div>
  );
};

export default Header;
