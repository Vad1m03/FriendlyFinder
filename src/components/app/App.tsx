import { Routes, Route } from 'react-router-dom';

import './App.scss';

import 'normalize.css';

import Layout from '../../page/Layout';

import MainPage from '../../page/MainPage';
import RoomsPage from '../../page/RoomsPage';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="rooms" element={<RoomsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
