import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from 'pages/home/Home';
import Posts from 'pages/posts/Posts';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
