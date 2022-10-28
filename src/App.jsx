import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import PageNotFound from './components/PageNotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/users/*' element={<Layout />}></Route>
        <Route path='/page/404' exact element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
