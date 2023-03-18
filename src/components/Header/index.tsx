import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { DIARY_NOTE } from '../../constats';

import { removeModal, setModal } from '../../redux/sliceModules/modal';

import Button from '../primitives/Button';

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
      <Button text={'Создать'} onClick={hanldeCreateNote} />
      <Button text={'Удалить'} onClick={handleDeleteNote} />
    </div>
  );
};

export default Header;
