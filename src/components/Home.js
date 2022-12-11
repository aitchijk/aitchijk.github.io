import React, {Fragment} from 'react';
import Header from './Header';
import About from './About';
import Team from './Team';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <About />
            <Team />
        </Fragment>
    )
};

export default Home;