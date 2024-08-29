import React from 'react';
import styles from './/Dotes.module.css';
import { ReactComponent as InactiveDot } from './/dote.svg';
import { ReactComponent as ActiveDot } from './/doteActive.svg';
import {Slide} from '../../../data/data';

interface DotesProps {
    slides: Slide[],
    currentSlideIndex: number,
}

 const Dotes: React.FC<DotesProps> = ({slides,currentSlideIndex}) => {
    return(
        <div className={styles.dotes}>
            {slides.map((_, index: number) => (
                currentSlideIndex === index ? <ActiveDot key={index}/> : <InactiveDot key={index}/>
            ))}
        </div>
    )
}
export default Dotes
