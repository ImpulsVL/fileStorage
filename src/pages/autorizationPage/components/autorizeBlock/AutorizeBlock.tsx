'use client'

import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../processes/auth/Firebase';
import styles from './AutorizeBlock.module.scss';
import Button from '@/shared/components/buttons/button';
import ButtonGoogle from '@/shared/components/buttons/buttonGoogle';
import Input from '@/shared/components/inputs/input';

const AutorizeBlock: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Авторизация успешна!');
            // Здесь можно перенаправить пользователя на другую страницу, например, на главную
            // router.push('/'); // Если вы используете useRouter из 'next/router'
        } catch (error) {
            alert();
        }
    };

    return (
        <div className={styles.autorize}>
            <h1 className={styles.title}>Авторизация</h1>

            <form className={styles.form} onSubmit={handleLogin}>
                <div className={styles.input__group}>
                    <Input type="email" value={email} placeholder='Электронная почта' id='email' onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" value={password} placeholder='Пароль' id='password' onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className={styles.button__group}>
                    <Button type='submit' label="Войти" variant="primary" link='/main'/>
                    <Button type='button' label="Зарегистрироваться" variant="secondary" link='/register' />
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