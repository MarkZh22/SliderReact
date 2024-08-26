import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
    title: string;
    text: string
}

const Section: React.FC<SectionProps> = ({title, text}) => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div>
        </div>

    )
}

export default Section;