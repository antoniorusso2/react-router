import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            {/* homepage */}
            <Route path="/"></Route>
            {/* about us page */}
            <Route path="/about"></Route>
            {/* lista posts */}
            <Route path="/posts"></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
