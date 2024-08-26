import React from 'react';
import './App.css';
import Slider from './components/common/Slider/Slider';
import {data} from './data'; // Импорт данных

function App() {
    return (
        <div className="App">
            <Slider slides={data.slides}/>
        </div>
    );
}
export default App;
