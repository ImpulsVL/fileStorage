import React from 'react';
import styles from './button.module.scss';

import Image from "next/image";
import Plus from '../../assets/plus.svg';

interface ButtonProps {
    label: string;
    type: 'button';
    onClick?: () => void;
}

const ButtonAdd: React.FC<ButtonProps> = ({ label, onClick, type}) => {
    return (
        <button type={type} className={`${styles.button__add}`} onClick={onClick}>
            <Image
                className={styles.add}
                src={Plus}
                alt="add"
            />
            {label}
        </button>
    );
};

export default ButtonAdd;