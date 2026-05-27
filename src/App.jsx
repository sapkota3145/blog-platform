import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ArticlesPage from './pages/ArticlesPage';
import SingleArticlePage from './pages/SingleArticlePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticlesPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route
          path="/articles/:slug"
          element={<SingleArticlePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;