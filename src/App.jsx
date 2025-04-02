// Components
import Header from './components/Header';
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
