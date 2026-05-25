import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchArticles } from '../services/api';
import Loader from "../components/Loader";
import Pagination from '../components/Pagination';


function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] =
    useState(1);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchArticles(page)
      .then((data) => {
        setArticles(data.articles);

        const pages = Math.ceil(
          data.articlesCount / 10
        );

        setTotalPages(pages);
      })

      .catch((err) => {
        setError(
          'Failed to load articles.'
        );

        console.error(err);
      })

      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="articles-page">
      {/* Banner */}
      <div className="banner">
        <h1 className="banner__title">
          Realworld Blog
        </h1>

        <p className="banner__text">
          A place to share your knowledge.
        </p>
      </div>

      {/* Articles */}
      <div className="articles">
        {articles.map((article) => (
          <div
            className="article-card"
            key={article.slug}
          >
            <Link
              to={`/articles/${article.slug}`}
              className="article-card__link"
            >
              <h2 className="article-card__title">
                {article.title}
              </h2>
            </Link>

            <p className="article-card__description">
              {article.description}
            </p>
          </div>
        ))}
      </div>
      {/* Pagination */}
       <Pagination 
       totalPages={totalPages}
        page={page} 
        setPage={setPage} />
      
      
    </div>
  );
}

export default ArticlesPage;