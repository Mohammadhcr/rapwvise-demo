import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import RapWVise from './pages/RapWVise';
import Hamseda from './pages/Hamseda';
import Top10 from './pages/Top10';
import Comments from './pages/Comments';
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Podcast from './pages/Podcast';
import Footer from './components/Footer';

const App = () => {

  const [theme, setTheme] = useState(false);

    const toggleHandler = () =>{
        setTheme(!theme);
    }

    const autoTheme = () => {
        const date = new Date();
        const time = date.getHours();

        if (time > 7 && time < 20) {
            setTheme(false);
        }
        else{
            setTheme(true);
        }
    }

    useEffect(() => autoTheme(), []);

  return (
      <>
        <div className={theme ? "darkMode" : "lightMode"}>
          <Navbar toggle={toggleHandler} theme={theme} />
          <Routes>
            <Route path='/' element={<RapWVise />} />
            <Route path='/hamseda' element={<Hamseda />} />
            <Route path='/hamseda/:id' element={<Podcast />} />
            <Route path='/comments' element={<Comments />} />
            <Route path='/comments/:id' element={<Comment />} />
            <Route path='/top10' element={<Top10 />} />
            <Route path='/top10/:id' element={<Article />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/aboutus' element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
      </>
  );
}

export default App;
