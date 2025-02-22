import React, { useState } from 'react';
import styles from './inputLabel.module.scss';

interface InputProps {
    value: string;
    placeholder?: string;
    id: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    maxLength?: number;
}

const InputLabel: React.FC<InputProps> = ({ value, placeholder, id, type, onChange, label, maxLength }) => {
    return (
        <div className={styles.inputlabel__container}>
            {label && (
                <label htmlFor={id} className={styles.label}>
                    {label}
                </label>
            )}
            <input
                type={type}
                id={id}
                className={styles.input}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                maxLength={maxLength}
            />
        </div>
    );
};

export default InputLabel;