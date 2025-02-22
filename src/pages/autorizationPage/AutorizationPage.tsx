'use client'

import React, { useState } from 'react';

import styles from './AutorizationPage.module.scss';
import Header from '@/shared/components/header/Header';
import AutorizeBlock from './components/autorizeBlock/AutorizeBlock';

const AutorizationPage: React.FC = () => {

  return (
    <div className={styles.autarization}>
      <Header />
      <main className={styles.main__autarization}>
          <AutorizeBlock />
      </main>
    </div>
  );
};

export default AutorizationPage;