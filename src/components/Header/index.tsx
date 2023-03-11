import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { removeModal, setModal } from '../../redux/sliceModules/modal';

import Button from '../primitives/Button';

import './styles.scss';

const Header: FC = () => {
  const dispatch = useDispatch();
  const hanldeCreateNote = () =>
    dispatch(setModal({ component: 'DiaryNote', data: { x: 1, y: 2 } }));

  const handleDeleteNote = () => dispatch(removeModal());

  return (
    <div className={'Header'}>
      <Button text={'Создать'} onClick={hanldeCreateNote} />
      <Button text={'Удалить'} onClick={handleDeleteNote} />
    </div>
  );
};

export default Header;
