import React from 'react';
import styles from './Textarea.module.scss';

interface InputProps {
    value: string;
    placeholder?: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    cols?: number;
    label?: string;
    maxLength?: number;
}

const Textarea: React.FC<InputProps> = ({ value, placeholder, id, onChange, rows = 4, cols = 50, label, maxLength }) => {
    return (
        <div className={styles.textarea__container}>
            <label className={styles.label}>{label}</label>
            <textarea
                id={id}
                className={styles.textarea}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                rows={rows}
                cols={cols}
                maxLength={maxLength}
            />
        </div>

    );
};

export default Textarea;