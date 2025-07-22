// import React from "react";
// import Home from "./pages/Home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import { Routes , Route } from "react-router-dom";
// import Navbar from "./nav";
// function App(){
//   return(
//     <>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<p>main page</p>}/>
//         <Route path='/home' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='*' element={<p>invalid</p>}/>
//       </Routes>
//     </>
//   )
// }
// export default App
import React from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Hobbies from './pages/hobbies';
import Contact from './pages/contact';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;

