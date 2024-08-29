import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
    imageURL: string
}

const Header: React.FC<HeaderProps> = ({imageURL}) => {
    return (
        <div className={styles.container} >
            <img
                className={styles.imgSlider}
                src={imageURL}
                alt='Header-img'
                loading='lazy'
            />
        </div>
    )
};

export default Header