import './App.css';
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import { Container } from '@material-ui/core';
import Trending from './pages/trending/Trending';
import Movies from './pages/movies/Movies';
import Series from './pages/series/Series';
import Search from './pages/search/Search';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
      
      <Container>
        <Routes>
          <Route path='/' element={<Trending/>} exact/>
          <Route path='/movies' element={<Movies/>} exact/>
          <Route path='/series' element={<Series/>} exact/>
          <Route path='/search' element={<Search/>} exact/>
        </Routes>
      </Container>
      </div>
      <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
