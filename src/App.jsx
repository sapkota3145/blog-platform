import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ArticlesPage from './pages/ArticlesPage';
import SingleArticlePage from './pages/SingleArticlePage';
import SignInPage from './pages/SignInPage';
import Settings from './pages/Settings';
import WriteArticlePage from './pages/WriteArticlePage';

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
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/write" element={<WriteArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;