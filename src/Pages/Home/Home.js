import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Support from '../Support/Support';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Support></Support>
            <Footer></Footer>

        </div>
    );
};

export default Home;