import React from 'react';
import './App.css';
import {data} from '../data/data';
import Home from '../pages/Home/Home'; // Импорт данных

function App() {
    return (
        <div className='App'>
            <Home slides={data.slides}/>
        </div>
    );
}
export default App;
