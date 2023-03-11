import classNames from 'classnames';
import React, { FC } from 'react';

import './styles.scss';

interface ButtonProps {
  text: string | number;
  onClick: () => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button className={classNames('Button', className && className)} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
