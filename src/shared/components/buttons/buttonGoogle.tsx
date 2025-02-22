import React from 'react';
import styles from './button.module.scss';

import Image from "next/image";
import Google from '../../assets/google.svg';

interface ButtonProps {
    label: string;
    type: 'button';
}

const ButtonGoogle: React.FC<ButtonProps> = ({ label, type}) => {
    return (
        <button type={type} className={`${styles.button__google}`}>
            <Image
                className={styles.google}
                src={Google}
                alt="google"
            />
            {label}
        </button>
    );
};

export default ButtonGoogle;