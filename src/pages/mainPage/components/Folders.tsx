import React from 'react';
import styles from '../MainPage.module.scss';
import Image from "next/image";
import Pen from '../../../shared/assets/pen.svg';
import DeleteFolder from '../../../shared/assets/delete-folder.svg';

interface FileData {
    file: File;
    name: string;
    size: number;
}

interface Folder {
    name: string;
    description: string;
    files?: FileData[];
}

interface FoldersProps {
    folders: Folder[];
    currentFolderIndex: number | null;
    onFolderClick: (index: number) => void;
    onEditFolder: (index: number) => void;
    onDeleteFolder: (index: number) => void;
}

const Folders: React.FC<FoldersProps> = ({ folders, currentFolderIndex, onFolderClick, onEditFolder, onDeleteFolder  }) => {
    return (
        <section className={styles.main__folders}>
            {folders.map((folder, index) => (
                <div
                    key={index}
                    className={`${styles.folder__item} ${currentFolderIndex === index ? styles.active : ''}`}
                    onClick={() => onFolderClick(index)}
                >
                    <h2 className={styles.folder__name}>{folder.name}</h2>
                    <div className={styles.folder__section}>
                        <div className={styles.folder__info}>
                            <p className={styles.folder__size}>
                                Общий размер файлов: {folder.files ? (folder.files.reduce((total, file) => total + file.size, 0) / (1024 * 1024)).toFixed(2) : 0} МБ
                            </p>
                            <p className={styles.folder__date}>Последние изменения: 14.02.2025</p>
                        </div>
                        <div className={styles.folder__buttons}>
                            <div className={styles.pen} onClick={(e) => { e.stopPropagation(); onEditFolder(index); }}>
                                <Image src={Pen} alt="Pen" />
                            </div>
                            <div className={styles.deleteFolder} onClick={(e) => { e.stopPropagation(); onDeleteFolder(index); }}>
                                <Image src={DeleteFolder} alt="DeleteFolder" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Folders;