import React from 'react';
import { Route, Routes, Link, Outlet, BrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import BaseLayout from '../components/Layouts/BaseLayout';

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function Routehub() {
  return (
    <>
      <Routes>
        <Route path="/app" element={<BaseLayout />}>
          <Route path="messages" element={<About />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="rtree" element={<Home />} /> */}
          <Route path="rtree" element={<Home />}>
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="vtree" element={<Home />}>
            <Route path="*" element={<Home />} />
          </Route>
        </Route>
        <Route path="/" element={<BaseLayout />} />
      </Routes>
    </>
  );
}

export default Routehub;
