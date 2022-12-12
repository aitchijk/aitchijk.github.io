import React, {Fragment} from 'react';
import Header from './Header';
import Services from './Services';
import About from './About';
import Team from './Team';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Services />
            <About />
            <Team />
        </Fragment>
    )
};

export default Home;