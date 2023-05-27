import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import React, { FC, useState, useEffect, useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { removeModal } from '../../redux/sliceModules/modal';

import { selectModal } from '../../redux/sliceModules/modal/selectors';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const Modal: FC = () => {
  const modal = useSelector(selectModal);
  const dispatch = useDispatch();

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (modal) {
      setOpen(true);
    }
  }, [modal]);

  const handleCloseModal = (): void => {
    setOpen(false);
    dispatch(removeModal());
  };

  /* const getModal = useMemo(() => {
    if(modal) {
      switch (modal.component) {
        case 
      }
    }
  }, [modal]) */

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseModal}
      aria-describedby='alert-dialog-slide-description'
    >
      123
    </Dialog>
  );
};

export default Modal;
