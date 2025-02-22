import React from 'react';
import styles from './button.module.scss';

import Link from 'next/link';

interface ButtonProps {
  label: string;
  type: 'submit';
  variant?: 'primary' | 'secondary' ;
  onClick?: () => void;
  link?: string;
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick, link, type }) => {

  if (link) {
    return (
      <Link href={link} className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;