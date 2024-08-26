import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import {SliderProps} from '../../../data';
import styles from './Slider.module.css';
import Button from '../../UI/Button/Button';
import { ReactComponent as InactiveDot } from '../../UI/Icons/dote.svg';
import { ReactComponent as ActiveDot } from '../../UI/Icons/doteActive.svg';

const Slider: React.FC<SliderProps> = ({slides}) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const nextSlide = () => {
        setCurrentSlideIndex((currentSlideIndex: number) => (currentSlideIndex >= slides.length - 1 ? currentSlideIndex : currentSlideIndex + 1));
    };

    const prevSlide = () => {
        setCurrentSlideIndex((currentSlideIndex: number) => (currentSlideIndex <= 0 ? currentSlideIndex : currentSlideIndex - 1));
    };

    const handleSlideClick = (event: any) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x: number = event.clientX - rect.left;
        const y: number = event.clientY - rect.top;
        const isFooterArea: boolean = y > rect.height - 120;

        if (!isFooterArea) {
            if (x < rect.width / 2) {
                prevSlide();
            } else {
                nextSlide();
            }
        }
    };
    useEffect(() => {
        const nextIndex: number = (currentSlideIndex + 1) % slides.length;
        const img:  HTMLImageElement = new Image();
        img.src = slides[nextIndex].imageUrl;
    }, [currentSlideIndex, slides]);
    return (
        <div className={styles.container} key={slides[currentSlideIndex].id} onClick={handleSlideClick}>

            <Header imageURL={slides[currentSlideIndex].imageUrl}/>
            <Section title={slides[currentSlideIndex].title}
                     text={slides[currentSlideIndex].text}
            />
            <div className={styles.footer}>
                <Button buttonText={slides[currentSlideIndex].buttonText} nextSlide={nextSlide}/>
                <div className={styles.dotes}>
                    {slides.map((_, index: number) => (
                        currentSlideIndex === index ? <ActiveDot key={index} /> : <InactiveDot key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Slider;
