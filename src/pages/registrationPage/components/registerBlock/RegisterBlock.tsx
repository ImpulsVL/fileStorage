'use client'

import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import styles from './RegisterBlock.module.scss';
import Button from '@/shared/components/buttons/button';
import Input from '@/shared/components/inputs/input';

const RegisterBlock: React.FC = () => {

    const [fio, setFio] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secondpassword, setSecondpassword] = useState('');

    const handleFioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFio(e.target.value);
    };

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMobile(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };


    const handleSecondPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSecondpassword(e.target.value);
    };

    return (
        <div className={styles.registrize}>
            <h1 className={styles.title}>Регистрация</h1>

            <form className={styles.form}>
                <div className={styles.input__group}>
                    <Input type="fio" value={fio} placeholder='ФИО' id='fio' onChange={handleFioChange} />

                    <Input type="mobile" value={mobile} placeholder='Номер телефона' id='mobile' onChange={handleMobileChange} />

                    <Input type="email" value={email} placeholder='Электронная почта' id='email' onChange={handleEmailChange} />

                    <Input type="password" value={password} placeholder='Пароль' id='password' onChange={handlePasswordChange} />

                    <Input type="password" value={secondpassword} placeholder='Повторить пароль' id='password' onChange={handleSecondPasswordChange} />
                </div>

                <div className={styles.button__group}>
                    <Button type='submit' label="Зарегистрироваться" variant="primary" />
                    <Button type='submit' label="Войти" variant="secondary" link='/' />

                </div>
            </form>
        </div>
    );
};

export default RegisterBlock;