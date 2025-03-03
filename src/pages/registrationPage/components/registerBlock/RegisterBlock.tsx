'use client'

import React, { useState } from 'react';
import { useUser } from '../../../../features/context/User';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db, doc, setDoc } from '../../../../processes/auth/Firebase';
import styles from './RegisterBlock.module.scss';
import Button from '@/shared/components/buttons/button';
import Input from '@/shared/components/inputs/input';

const RegisterBlock: React.FC = () => {

    const [fio, setFio] = useState<string>('');
    const [mobile, setMobile] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [secondPassword, setSecondPassword] = useState<string>('');

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== secondPassword) {
            alert("Пароли не совпадают");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, 'users', user.uid), {
                fio,
                mobile,
                email
            });

            alert('Регистрация успешна!');
        } catch (error) {
            alert('Ошибка регистрации');
        }
    };

    return (
        <div className={styles.registrize}>
            <h1 className={styles.title}>Регистрация</h1>

            <form className={styles.form} onSubmit={handleRegister}>
                <div className={styles.input__group}>
                    <Input type="text" value={fio} placeholder='ФИО' id='fio' onChange={(e) => setFio(e.target.value)} />
                    <Input type="text" value={mobile} placeholder='Номер телефона' id='mobile' onChange={(e) => setMobile(e.target.value)} />
                    <Input type="email" value={email} placeholder='Электронная почта' id='email' onChange={(e) => setEmail(e.target.value)} />
                    <Input type="password" value={password} placeholder='Пароль' id='password' onChange={(e) => setPassword(e.target.value)} />
                    <Input type="password" value={secondPassword} placeholder='Повторить пароль' id='secondpassword' onChange={(e) => setSecondPassword(e.target.value)} />
                </div>

                <div className={styles.button__group}>
                    <Button type='submit' label="Зарегистрироваться" variant="primary" />
                    <Button type='button' label="Войти" variant="secondary" link='/' />
                </div>
            </form>
        </div>
    );
};

export default RegisterBlock;