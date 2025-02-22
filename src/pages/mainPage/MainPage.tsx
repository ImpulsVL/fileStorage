'use client'

import React, { useState } from 'react';

import styles from './MainPage.module.scss';
import Header from '@/shared/components/header/Header';
import ButtonAdd from '@/shared/components/buttons/buttonAdd';
import Modal from './components/CreateDirectory';

const MainPage: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddFolderClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Восстанавливаем прокрутку
  };

  return (
    <div className={styles.main__page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.sidebar}>
          <section className={styles.info}>
            <h2 className={styles.info__name}>Константин Констатинопольский</h2>
            <p className={styles.info__mail}>konstantin@mail.com</p>
            <p className={styles.info__mobile}>89631874567</p>
          </section>
          <ButtonAdd type='button' label="Создать папку" onClick={handleAddFolderClick}/>
        </div>
        <div className={styles.mainblock}>

        </div>
      </main>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default MainPage;