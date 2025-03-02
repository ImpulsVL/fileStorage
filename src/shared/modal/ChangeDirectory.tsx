'use client'

import React, { useEffect, useState } from 'react';
import styles from './CreateDirectory.module.scss';
import Button from '@/shared/components/buttons/button';
import Textarea from '@/shared/components/textarea/Textarea';
import InputLabel from '@/shared/components/inputLabel/inputLabel';

interface ModalProps {
    onClose: () => void;
}

const ModalChange: React.FC<ModalProps & { onAddFolder: (name: string, description: string) => void; initialName?: string; initialDescription?: string; }> = ({ onClose, onAddFolder, initialName = '', initialDescription = '' }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        setName(initialName);
        setDescription(initialDescription);

        return () => {
            setIsVisible(false);
        };
    }, [initialName, initialDescription]);

    const handleOverlayClick = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
    };

    const handleCreateFolder = () => {
        if (name.trim() && description.trim()) {
            onAddFolder(name, description);
            setName('');
            setDescription('');
        }
    };

    return (
        <div className={`${styles.modal__overlay} ${isVisible ? styles.show : ''}`} onClick={handleOverlayClick}>
            <div className={`${styles.modal__content} ${isVisible ? styles.show : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className={styles.content__container}>
                    <div className={styles.content__about}>
                        <h2 className={styles.content__title}>Редактировать папку</h2>
                        <p className={styles.content__description}>Отличный способ сгруппировать нужные вам файлы</p>
                    </div>
                    <div className={styles.content__inputs}>
                        <InputLabel type="name" value={name} placeholder='Введите название' id='name' label='Название папки' maxLength={100} onChange={handleNameChange} />
                        <Textarea value={description} id='description' placeholder='Введите описание' label='Описание' maxLength={225} onChange={handleDescriptionChange} />
                    </div>
                </div>
                <div className={styles.modal__buttons}>
                    <Button type='submit' label='Сохранить' variant='primary' onClick={handleCreateFolder} />
                    <Button type='button' label='Отмена' variant='secondary' onClick={handleOverlayClick} />
                </div>
            </div>
        </div>
    );
};

export default ModalChange;