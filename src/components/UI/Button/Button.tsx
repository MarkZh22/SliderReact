import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    buttonText: string;
    nextSlide: () => void; // Добавляем тип для функции
}
const Button: React.FC<ButtonProps> = ({buttonText, nextSlide}) => {
    return (
        <button onClick={nextSlide} className={styles.btnBlock}>{buttonText}</button>
    )
}
export default Button
