import React, { useState } from 'react';
import styles from './input.module.scss';
import Image from "next/image";
import Eye from '../../assets/eye.svg';
import CloseEye from '../../assets/close-eye.svg';

interface InputProps {
    value: string;
    placeholder?: string;
    id: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    maxLength?: number;
}

const Input: React.FC<InputProps> = ({ value, placeholder, id, type, onChange, maxLength }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className={styles.input__container}>
            <input
                type={isPasswordVisible && type === 'password' ? 'text' : type}
                id={id}
                className={styles.input}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                maxLength={maxLength}
            />
            {type === 'password' && (
                <Image
                    className={styles.eye}
                    src={isPasswordVisible ? Eye : CloseEye}
                    alt="Toggle password visibility"
                    onClick={togglePasswordVisibility}
                />
            )}
        </div>
    );
};

export default Input;