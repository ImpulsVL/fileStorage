'use client'

import React, { useEffect, useState } from 'react';
import styles from './CreateDirectory.module.scss';
import Button from '@/shared/components/buttons/button';
import Input from '@/shared/components/inputs/input';
import Textarea from '@/shared/components/textarea/Textarea';
import InputLabel from '@/shared/components/inputLabel/inputLabel';

interface ModalProps {
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        return () => {
            setIsVisible(false);
        };
    }, []);

    const handleOverlayClick = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleFioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    return (
        <div className={`${styles.modal__overlay} ${isVisible ? styles.show : ''}`} onClick={handleOverlayClick}>
            <div className={`${styles.modal__content} ${isVisible ? styles.show : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className={styles.content__container}>
                    <div className={styles.content__about}>
                        <h2 className={styles.content__title}>Создать папку</h2>
                        <p className={styles.content__description}>Отличный способ сгруппировать нужные вам файлы</p>
                    </div>
                    <div className={styles.content__inputs}>
                        <InputLabel type="name" value={name} placeholder='Введите название' id='name' label='Название папки' maxLength={100} onChange={handleFioChange} />
                        <Textarea value={description} id='description' placeholder='Введите описание'  label='Описание' maxLength={225} onChange={handleDescriptionChange} />
                    </div>
                </div>
                <div className={styles.modal__buttons}>
                    <Button type='submit' label='Создать' variant='primary' onClick={handleOverlayClick} />
                    <Button type='submit' label='Отмена' variant='secondary' onClick={handleOverlayClick} />
                </div>
            </div>
        </div>
    );
};

export default Modal;