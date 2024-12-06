import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import HomePageMAin from './components/HomePage/HomePageMain';
import AboutUs from './components/About-us/AboutUsMain';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            {/* homepage */}
            <Route path="/" Component={HomePageMAin}></Route>
            {/* about us page */}
            <Route path="/about" Component={AboutUs}></Route>
            {/* lista posts */}
            <Route path="/posts"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
