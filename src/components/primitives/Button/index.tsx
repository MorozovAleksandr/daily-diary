import React, { FC } from 'react';

import './styles.sccs';

interface ButtonProps {
  text: string | number;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={'Button'} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
