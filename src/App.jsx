import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import HomePageMAin from './pages/HomePage/HomePageMain';
import AboutUs from './pages/About-us/AboutUsMain';
import PostsMain from './pages/PostsMain/PostsMain';

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
            <Route path="/posts" Component={PostsMain}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
