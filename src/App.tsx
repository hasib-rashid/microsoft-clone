import React from 'react';

import Cards from 'components/Card/Cards';
import Items from 'components/Items/Items';
import Showcase from 'components/Showcase/Showcase';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Corona from 'components/Corona/Corona';
import Footer from 'components/Footer/Footer';

function App() {
    return (
        <main className="w-screen h-screen overflow-x-hidden">
            <Header />
            <Carousel />
            <Items />
            <Cards />
            <Showcase />
            <Corona />
            <Footer />
        </main>
    );
}

export default App;
