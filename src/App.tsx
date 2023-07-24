import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Skills} from "./layout/section/skills/Skills";
import {Works} from "./layout/section/works/Works";
import {About} from "./layout/section/about_me/About";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <About/>
            <Skills/>
            <Works/>
        </div>
    );
}

export default App;

