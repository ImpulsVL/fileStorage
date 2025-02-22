import React from "react";
import styles from './Header.module.scss';

import Image from "next/image";
import Logo from '../../assets/logo.svg';
import Language from '../../assets/language.svg';


const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Image
                className={styles.logo}
                src={Logo}
                alt="Code"
            />
            <Image
                className={styles.language}
                src={Language}
                alt="Code"
            />
        </header>
    );
}
export default Header;