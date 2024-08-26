import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
    imageURL: string
}

const Header: React.FC<HeaderProps> = ({imageURL}) => {
    return (
        <header className={styles.container} >
            <img
                className={styles.imgSlider}
                src={imageURL}
                alt="Header-img"
                loading="lazy"
            />
        </header>
    )
};

export default Header