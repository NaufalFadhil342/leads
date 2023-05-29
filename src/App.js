import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Roots } from './Components/roots';

const Home = lazy(() => import('./Pages/Homepage/home'));
const Service = lazy(() => import('./Pages/Servicespage/service'));
const Contact = lazy(() => import('./Pages/Contactpage/contact'));
const About = lazy(() => import('./Pages/Aboutpage/about'));
const Error = lazy(() => import('./Pages/Errorpage/error'));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Roots />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <div className="app">
      <Suspense fallback={<h1 style={{ margin: '8rem 0', textAlign: 'center' }}>Loading</h1>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
