import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Menu from './Menu';
export default function AppRouter(){
  return (
        <>
        <Router>
          <Menu />
        </Router>
        </>
    );
}