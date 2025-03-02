import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import styles from './Delete.module.scss';
import Button from '@/shared/components/buttons/button';

interface DeleteModalProps {
    onClose: () => void;
    onConfirm: () => void;
}

const DeleteDirectory: React.FC<DeleteModalProps> = ({ onClose, onConfirm }) => {
    return ReactDOM.createPortal(
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.modal__title}>Удалить папку?</h2>
                <p className={styles.modal__description}>Удаление повлечет за собой потерю всех данных по этой папке.</p>
                <div className={styles.modal__buttons}>
                    <Button type='button' label='Удалить' variant='delete' onClick={onConfirm} />
                    <Button type='button' label='Отмена' variant='secondary' onClick={onClose} />
                </div>
            </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement
    );
};

export default DeleteDirectory;