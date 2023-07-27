import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Skills} from "./layout/section/skills/Skills";
import {Works} from "./layout/section/works/Works";
import {About} from "./layout/section/about_me/About";
import {Contacts} from "./layout/section/contacts/Contact";
import {Slogan} from "./layout/section/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Slogan/>
            <Footer/>
        </div>
    );
}

export default App;

