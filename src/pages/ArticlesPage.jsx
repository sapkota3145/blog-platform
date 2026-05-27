import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchArticles } from '../services/api';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import { FaUser } from 'react-icons/fa';

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchArticles(page)
      .then((data) => {
        setArticles(data.articles);
        setTotalPages(Math.ceil(data.articlesCount / 10));
      })
  
      .catch((err) => {
        if (err.response?.status === 429) {
          setError('Too many requests. Please wait about one minute.');
        } else {
          setError('Failed to load articles.');
        }
        console.error(err);
      })
      
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  if (loading) return <Loader />;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="articles-page">
      <div className="banner">
        <h1 className="banner__title">Realworld Blog</h1>
        <p className="banner__text">
          A place to share your knowledge.
        </p>
      </div>

      <div className="popular-tags">
        <h3 className="popular-tags__title">Popular tags</h3>

        <div className="popular-tags__list">
          <span className="popular-tags__tag">one</span>
          <span className="popular-tags__tag">something</span>
          <span className="popular-tags__tag">chinese</span>
          <span className="popular-tags__tag">english</span>
          <span className="popular-tags__tag">french</span>
        </div>
      </div>

      <div className="articles">
        {articles.map((article) => (
          <div className="article-card" key={article.slug}>
            <div className="article-card__top">
              
            <div className="article-card__author-info">

<FaUser className="user-icon" />

<div>
  <p className="article-card__author">
    {article.author?.username || 'Unknown user'}
  </p>

  <p className="article-card__date">
    {new Date(article.createdAt).toLocaleDateString()}
  </p>
</div>

</div>
              <button className="article-card__likes" disabled>
                ♥ {article.favoritesCount}
              </button>
            </div>

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

            <div className="article-card__tags">
              {article.tagList?.map((tag) => (
                <span className="article-card__tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        page={page}
        setPage={setPage}

        
      />
    </div>
  );
}

export default ArticlesPage;