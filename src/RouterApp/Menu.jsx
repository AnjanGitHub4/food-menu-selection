import React from 'react';
import {Route,Routes,Link,Outlet,useParams} from 'react-router-dom';
import About from './About';
import App from '../App';
import './menu.css';
/* [ NOTE ]:
   The <Outlet> renders the current route selected.
   The Home component route does not have a path but has an {index} attribute. That specifies this route as the default route for the parent route, which is /.
*/
export function Contact(){
  const {phone} = useParams();
  return <h2> Contact {phone} </h2>;
}
export function NavBars(){
  return(
    <>
        <div className="navbar">
        <ul>
       <li><Link to='/' activeClassName='active' className="anchor-none"> Home </Link> </li>
      <li><Link to='/about' className="anchor-none"> About</Link></li>
      <li><Link to='/contact' className="anchor-none"> Contact </Link></li>
        </ul>
        </div>
        <Outlet />
    </>
    );
}

export default function Menu(){
  return (
        <>
        <Routes>
        <Route path='/' element={<NavBars/>}>
        <Route index element={<App/>} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='contact/:phone' element={<Contact />} />
        </Route>
        <Route path='*' element={<div>Error 404</div>} />
        </Routes>
        </>
    );
}