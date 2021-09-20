import Items from 'components/Items/Items';
import React from 'react';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';

function App() {
    return (
        <main className="w-screen h-screen overflow-x-hidden">
            <Header />
            <Carousel />
            <Items />
        </main>
    );
}

export default App;
