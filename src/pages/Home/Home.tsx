import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.css';

export interface DataProps {
    id: number;
    imageUrl: string;
    title: string;
    text: string;
}

const Home: React.FC = () => {

    const [data, setData] = useState<DataProps[]>([]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        async function getDataSlides() {
            try {
                const response = await fetch('http://localhost:3001/slides', {
                    method: 'GET',
                });
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log(error);
            }
        }
        getDataSlides();
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const nextIndex: number = (currentSlideIndex + 1) % data.length;
            const img: HTMLImageElement = new Image();
            img.src = data[nextIndex].imageUrl;
        }
    }, [currentSlideIndex, data]);

    const nextSlide = () => {
        setCurrentSlideIndex((currentSlideIndex: number) =>
            currentSlideIndex >= data.length - 1 ? currentSlideIndex : currentSlideIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlideIndex((currentSlideIndex: number) =>
            currentSlideIndex <= 0 ? currentSlideIndex : currentSlideIndex - 1
        );
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

    return (
        <>
            {data.length === 0 ? (
                <div className={styles.container}>Loading...</div>
            ) : (
                <div className={styles.container} onClick={handleSlideClick}>
                    <Header imageURL={data[currentSlideIndex].imageUrl} />
                    <Section title={data[currentSlideIndex].title} text={data[currentSlideIndex].text} />
                    <Footer nextSlide={nextSlide} slides={data} currentSlideIndex={currentSlideIndex} />
                </div>
            )}
        </>
    )
};

export default Home;

