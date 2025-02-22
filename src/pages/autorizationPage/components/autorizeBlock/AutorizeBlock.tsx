'use client'

import React, { useState } from 'react';

import styles from './AutorizeBlock.module.scss';
import Button from '@/shared/components/buttons/button';
import ButtonGoogle from '@/shared/components/buttons/buttonGoogle';
import Input from '@/shared/components/inputs/input';

import { useRouter } from 'next/navigation';

const AutorizeBlock: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className={styles.autorize}>
            <h1 className={styles.title}>Авторизация</h1>

            <form className={styles.form}>
                <div className={styles.input__group}>
                    <Input type="email" value={email}  placeholder='Электронная почта' id='email' onChange={handleEmailChange}/>

                    <Input type="password" value={password}  placeholder='Пароль' id='password' onChange={handlePasswordChange}/>
                </div>

                <div className={styles.button__group}>
                    <Button type='button' label="Войти" variant="primary"/>
                    <Button type='button' label="Зарегистрироваться" variant="secondary" link='/register'/>
                </div>
            </form>

            <div className={styles.orDivider}>
                <span>или</span>
            </div>

            <ButtonGoogle type='button' label="Войти с помощью Google" />
        </div>
    );
};

export default AutorizeBlock;