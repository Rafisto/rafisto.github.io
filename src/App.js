import './css/App.css';
import Nav from "./Nav";
import IndexPage from './IndexPage';
import Footer from './Footer';
import ListPage from './ListPage';
import Poem from './Poem';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
    return ( 
    <BrowserRouter>
        <div>
            <Nav/>
            <Routes>
                    <Route path='/' exact element={<IndexPage />} />
                    <Route path='/list' element={<ListPage />} />
                    <Route path='/poems/:id' element={<Poem/>}/>
            </Routes>
            <Footer/>
        </div>
    </BrowserRouter>
    );
}

export default App;