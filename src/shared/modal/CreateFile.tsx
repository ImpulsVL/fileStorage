import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import Image from "next/image";

import Cloud from './../assets/cloud-file.svg';
import styles from './CreateFile.module.scss';
import Button from '@/shared/components/buttons/button';

interface FileData {
    file: File;
    name: string;
    size: number;
}

interface CreateFileProps {
    onClose: () => void;
    onAddFile: (folderIndex: number, fileData: FileData) => void;
    folderIndex: number;
}

const CreateFile: React.FC<CreateFileProps> = ({ onClose, onAddFile, folderIndex }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const fileData: FileData = {
                file,
                name: file.name,
                size: file.size,
            };
            onAddFile(folderIndex, fileData);
            onClose();
        }
    };

    return ReactDOM.createPortal(
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.modal__title}>Добавить файлы</h2>
                <form className={styles.modal__form}>
                    <div className={styles.form__load} onClick={() => fileInputRef.current?.click()}>
                        <Image
                            className={styles.cloud}
                            src={Cloud}
                            alt="Cloud"
                        />
                        <h2 className={styles.form__title}>Перетащите файл сюда или</h2>
                        <p className={styles.form__file}>Нажмите здесь</p>
                    </div>
                    <input
                        type="file"
                        accept=".png,.jpeg,.jpg,.doc,.docx,.xls,.xlsx,.pdf"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />

                    <div className={styles.modal__buttons}>
                        <Button type='submit' label='Добавить' variant='primary' onClick={onClose} />
                        <Button type='button' label='Отмена' variant='secondary' onClick={onClose} />
                    </div>
                </form>
            </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement
    );
};

export default CreateFile;