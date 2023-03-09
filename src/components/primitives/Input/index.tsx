import classNames from 'classnames';
import React, { FC } from 'react';

import { inputEvent } from '../../../types';

interface InputProps {
  value: string;
  onChange: (event: inputEvent) => void;
  className?: string;
  disabled?: boolean;
}

const Input: FC<InputProps> = ({ value, onChange, className, disabled = false }) => {
  const onChangeHandle = (e: inputEvent): void => {
    onChange(e);
  };

  return (
    <input
      className={classNames('Input', className && className)}
      onChange={onChangeHandle}
      value={value}
      disabled={disabled}
      type='button'
    />
  );
};

export default Input;
