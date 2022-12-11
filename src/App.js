import { Fragment } from 'react';
import './App.css';
import NavbarSticky from './components/NavbarSticky';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
    return (
        <Fragment>
            <NavbarSticky />
            <Main />
            <Footer />
        </Fragment>
    );
}

export default App;
