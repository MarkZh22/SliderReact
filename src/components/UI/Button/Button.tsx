import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children?: string,
    nextSlide?: () => void; // Добавляем тип для функции
}
const Button: React.FC<ButtonProps> = ({nextSlide, children}) => {
    return (
        <button onClick={nextSlide} className={styles.btnBlock}>{children}</button>
    )
}
export default Button
