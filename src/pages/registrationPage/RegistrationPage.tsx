'use client'

import React, { useState } from 'react';

import styles from './RegistrationPage.module.scss';
import Header from '@/shared/components/header/Header';
import RegisterBlock from './components/registerBlock/RegisterBlock';

const RegistrationPage: React.FC = () => {

    return (
        <div className={styles.registration}>
            <Header />
            <main className={styles.main__registration}>
                <RegisterBlock />
            </main>
        </div>
    );
};

export default RegistrationPage;