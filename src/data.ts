export interface Slide {
    id: number;
    imageUrl: string;
    title: string;
    text: string;
    buttonText: string;
}

export interface SliderProps {
    slides: Slide[];
}

export const data: SliderProps = {
    slides: [
        {
            id: 1,
            imageUrl: '../../assets/img/slide1.png',
            title: "What is a boost?",
            text: "A boost is your chance to participate in an exciting prize draw! Each boost gives you an opportunity to win unique gifts.",
            buttonText: "Next"
        },
        {
            id: 2,
            imageUrl: "../../assets/img/slide2.png",
            title: "Invite friends and increase your chances!",
            text: "Share with friends and give them a chance to win, while also boosting your own chances of success.",
            buttonText: "Next"
        },
        {
            id: 3,
            imageUrl: "../../assets/img/slide3.png",
            title: "Guaranteed prizes!",
            text: "Participants with a large number of Tasks will receive special gifts as a token of appreciation for their activity.",
            buttonText: "Next"
        },
        {
            id: 4,
            imageUrl: "../../assets/img/slide4.png",
            title: "Complete tasks — get Tasks!",
            text: "Every task you complete brings you closer to victory, adding Tasks to your arsenal.",
            buttonText: "Next"
        },
        {
            id: 5,
            imageUrl: "../../assets/img/slide5.png",
            title: "Help friends, earn even more Tasks!",
            text: "Helping friends not only strengthens bonds but also brings you additional Tasks, increasing your chances of winning.",
            buttonText: "Done"
        }
    ]
}
