import React from 'react';

import './styles.sccs';

interface ButtonProps {
  text: string | number;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={'Button'} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
