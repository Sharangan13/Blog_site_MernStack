import './App.css';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogDetails from './components/blog/BlogDetails';
import SearchBlog from './components/blog/SearchBlog';

function App() {
  return (
    <Router>
    <div className="App">

      <HelmetProvider>
     <Header/>
<ToastContainer/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search/:keyword' element={<SearchBlog/>}/>
        <Route path='/blog/:id' element={<BlogDetails/>}/>
     </Routes>
     
     <Footer/>
     </HelmetProvider>
    </div>
    </Router>
  );
}

export default App;
