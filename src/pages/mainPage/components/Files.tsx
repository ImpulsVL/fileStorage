import React from 'react';
import styles from '../MainPage.module.scss';
import Image from "next/image";

import DeleteFile from '../../../shared/assets/delete-file.svg';
import Document from '../../../shared/assets/document-icon.svg';

interface FileData {
    file: File;
    name: string;
    size: number;
}

interface FilesProps {
    files: FileData[];
    onDeleteFile: (folderIndex: number, fileIndex: number) => void;
    currentFolderIndex: number | null;
}

const Files: React.FC<FilesProps> = ({ files, onDeleteFile, currentFolderIndex }) => {
    return (
        <div className={styles.files__items}>
            {files.map((file, index) => (
                <div className={styles.file__item} key={index}>
                    <div className={styles.file__title}>
                        <Image className={styles.document} src={Document} alt="Document" />
                        <h2 className={styles.file__name}>{file.name}</h2>
                    </div>
                    <div className={styles.file__description}>
                        <p className={styles.file__size}>{(file.size / (1024 * 1024)).toFixed(2)} МБ</p>
                        <Image
                            className={styles.deleteFile}
                            src={DeleteFile}
                            alt="DeleteFile"
                            onClick={() => onDeleteFile(currentFolderIndex!, index)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Files;