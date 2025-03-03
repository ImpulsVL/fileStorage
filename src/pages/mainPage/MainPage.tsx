'use client'

import React, { useState, useEffect } from 'react';

import { useUser } from '../../features/context/User';
import { User } from '../../features/context/User';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../processes/auth/Firebase';

import styles from './MainPage.module.scss';
import Header from '@/shared/components/header/Header';
import ButtonAdd from '@/shared/components/buttons/buttonAdd';

import Modal from '../../shared/modal/CreateDirectory';
import CreateFile from '../../shared/modal/CreateFile';

import Folders from './components/Folders';
import Files from './components/Files';
import ModalChange from '@/shared/modal/ChangeDirectory';
import DeleteDirectory from '@/shared/modal/DeleteDirectory';
import DeleteFile from '@/shared/modal/DeleteFile';

interface Folder {
  name: string;
  description: string;
  files?: FileData[];
}

interface FileData {
  file: File;
  name: string;
  size: number;
}

const MainPage: React.FC = () => {
  const { user: firebaseUser, setUser } = useUser();
  const [userData, setUserData] = useState<User | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenFile, setIsModalOpenFile] = useState(false);

  const [folders, setFolders] = useState<Folder[]>([]);
  const [currentFolderIndex, setCurrentFolderIndex] = useState<number | null>(null);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     if (firebaseUser) {
  //       const userDocRef = doc(db, 'users', firebaseUser.uid);
  //       const userDoc = await getDoc(userDocRef);

  //       if (userDoc.exists()) {
  //         const data = userDoc.data();
  //         setUser({ ...data, uid: firebaseUser.uid } as User);
  //         setUserData({ ...data, uid: firebaseUser.uid } as User);
  //       }
  //     }
  //   };

  //   fetchUserData();
  // }, [firebaseUser, setUser]);

  useEffect(() => {
    const storedFolders = localStorage.getItem('folders');
    if (storedFolders) {
      setFolders(JSON.parse(storedFolders));
    }
  }, []);


  const handleAddFolderClick = () => {
    if (folders.length < 10) {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const addFolder = (name: string, description: string) => {
    const newFolder = { name, description };
    const updatedFolders = [...folders, newFolder];
    setFolders(updatedFolders);
    localStorage.setItem('folders', JSON.stringify(updatedFolders));
    closeModal();
  };

  const handleFolderClick = (index: number) => {
    if (currentFolderIndex == index) {
      setCurrentFolderIndex(null);
    } else {
      setCurrentFolderIndex(index);
    }
  };

  const handleAddFileClick = () => {
    if (currentFolderIndex !== null && (folders[currentFolderIndex]?.files?.length || 0) < 30) {
      setIsModalOpenFile(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeFileModal = () => {
    setIsModalOpenFile(false);
    document.body.style.overflow = 'auto';
  };

  const addFile = (folderIndex: number, fileData: FileData) => {
    const updatedFolders = [...folders];
    const folder = updatedFolders[folderIndex];

    if (!folder.files) {
      folder.files = [];
    }

    folder.files.push(fileData);

    setFolders(updatedFolders);
    localStorage.setItem('folders', JSON.stringify(updatedFolders));
  };

  const [isDeleteFileModalOpen, setIsDeleteFileModalOpen] = useState(false);
  const [deleteFileFolderIndex, setDeleteFileFolderIndex] = useState<number | null>(null);
  const [deleteFileIndex, setDeleteFileIndex] = useState<number | null>(null);

  const handleDeleteFile = (folderIndex: number, fileIndex: number) => {
    setDeleteFileFolderIndex(folderIndex);
    setDeleteFileIndex(fileIndex);
    setIsDeleteFileModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDeleteFileModal = () => {
    setIsDeleteFileModalOpen(false);
    setDeleteFileFolderIndex(null);
    setDeleteFileIndex(null);
    document.body.style.overflow = 'auto';
  };

  const confirmDeleteFile = () => {
    if (deleteFileFolderIndex !== null && deleteFileIndex !== null) {
      const updatedFolders = [...folders];
      const folder = updatedFolders[deleteFileFolderIndex];

      if (folder.files) {
        folder.files.splice(deleteFileIndex, 1);
      }

      setFolders(updatedFolders);
      localStorage.setItem('folders', JSON.stringify(updatedFolders));
      closeDeleteFileModal();
    }
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFolderIndex, setEditFolderIndex] = useState<number | null>(null);
  const [editFolderName, setEditFolderName] = useState('');
  const [editFolderDescription, setEditFolderDescription] = useState('');

  const handleEditFolder = (index: number) => {
    const folder = folders[index];
    setEditFolderName(folder.name);
    setEditFolderDescription(folder.description);
    setEditFolderIndex(index);
    setIsEditModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const updateFolder = (name: string, description: string) => {
    if (editFolderIndex !== null) {
      const updatedFolders = [...folders];
      updatedFolders[editFolderIndex] = { ...updatedFolders[editFolderIndex], name, description };
      setFolders(updatedFolders);
      localStorage.setItem('folders', JSON.stringify(updatedFolders));
      closeEditModal();
    }
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteFolderIndex, setDeleteFolderIndex] = useState<number | null>(null);

  const handleDeleteFolder = (index: number) => {
    setDeleteFolderIndex(index);
    setIsDeleteModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeleteFolderIndex(null);
    document.body.style.overflow = 'auto';
  };

  const confirmDeleteFolder = () => {
    if (deleteFolderIndex !== null) {
      const updatedFolders = folders.filter((_, index) => index !== deleteFolderIndex);
      setFolders(updatedFolders);
      localStorage.setItem('folders', JSON.stringify(updatedFolders));
      closeDeleteModal();
    }
  };

  return (
    <div className={styles.main__page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.sidebar}>
          <section className={styles.info}>
            {userData ? (
              <>
                <h2 className={styles.info__name}>{userData.fio}</h2>
                <p className={styles.info__mail}>{userData.email}</p>
                <p className={styles.info__mobile}>{userData.mobile}</p>
              </>
            ) : (
              <p>Пользователь не зарегистрирован</p>
            )}
          </section>
          {folders.length < 10 && (
            <ButtonAdd type='button' label="Создать папку" onClick={handleAddFolderClick} />
          )}
        </div>
        <div className={styles.main__block}>

          <Folders
            folders={folders}
            currentFolderIndex={currentFolderIndex}
            onFolderClick={handleFolderClick}
            onEditFolder={handleEditFolder}
            onDeleteFolder={handleDeleteFolder}
          />

          <section className={styles.main__files}>
            <div className={styles.files_buttonAdd}>
              {currentFolderIndex !== null && (folders[currentFolderIndex]?.files?.length || 0) < 30 && (
                <ButtonAdd type='button' label="Добавить файл" onClick={handleAddFileClick} />
              )}
            </div>

            <Files
              files={currentFolderIndex !== null ? folders[currentFolderIndex]?.files || [] : []}
              onDeleteFile={handleDeleteFile}
              currentFolderIndex={currentFolderIndex}
            />
          </section>

        </div>
      </main>
      {isModalOpen && <Modal onClose={closeModal} onAddFolder={addFolder} />}
      {isModalOpenFile && <CreateFile onClose={closeFileModal} onAddFile={addFile} folderIndex={currentFolderIndex!} />}
      {isEditModalOpen && (<ModalChange onClose={closeEditModal} onAddFolder={updateFolder} initialName={editFolderName} initialDescription={editFolderDescription} />)}
      {isDeleteModalOpen && (<DeleteDirectory onClose={closeDeleteModal} onConfirm={confirmDeleteFolder} />)}
      {isDeleteFileModalOpen && (<DeleteFile onClose={closeDeleteFileModal} onConfirm={confirmDeleteFile} />)}
    </div>
  );
};

export default MainPage;