import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import './app.css';

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;