import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Search from './Pages/Search.js';
import Navbar from './Components/Navbar.js';
import EntityManga from './Components/EntityManga';

function App() {
  return (
    <>
      <Navbar />
      <div className="container" style={{width:"100%"}}>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/Home' element={<Index />} />
        <Route path='/Search' element={<Search />} />
        <Route path='/Search/:name'  element={<Search />}/>
      </Routes>
</div>



    </>
  );
}

function Index(){
  return(
    <>
    <div className="row  justify-content-center">
      <div className='col-12'>
        <h1 className='text-center' >MangaMan</h1>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className='col-12'>
      <img src="https://image.shutterstock.com/image-vector/japanese-slogan-manga-face-translation-260nw-1841050144.jpg" className="img-fluidr w-100"/>
      </div>
    </div>
    <ListManga/>
    </>
     
  )
}

function ListManga(){
  return(
    <>
    <div className="row mt-5 justify-content-center mb-5">
      <div className='col-12'>
        <h3 className='text-center' >Trending Manga</h3>
      </div>
      <div className='col-12'>
      <div className="d-flex flex-row  flex-wrap justify-content-center ">

<EntityManga/>

      </div>
      </div>
    </div>
    </>
  )
}

export default App;
