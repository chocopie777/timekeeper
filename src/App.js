import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import './app.css';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

function App() {
    return (
        <SimpleBar autoHide={false} className="simple-bar">
            <div className="wrapper">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </SimpleBar>
    );
}

export default App;
