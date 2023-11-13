import React from 'react';
import ReactDOM from 'react-dom/client';
import TabApp from './TabMenu/TabApp';
//import AppRouter from './RouterApp/AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <React.StrictMode>
    <TabApp/>
  </React.StrictMode>
{/*<AppRouter />*/}
  </>
);
