import classNames from 'classnames';
import React from 'react';

import { inputEvent } from '../../../types';

interface InputProps {
  value: string;
  onChange: (event: inputEvent) => void;
  className?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({ value, onChange, className, disabled = false }) => {
  const onChangeHandle = (e: inputEvent): void => {
    onChange(e);
  };

  return (
    <input
      className={classNames('Input', className && className)}
      onChange={onChangeHandle}
      value={value}
      disabled={disabled}
    />
  );
};

export default Input;
