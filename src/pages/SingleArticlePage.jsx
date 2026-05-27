import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { fetchSingleArticle } from '../services/api';
import Loader from '../components/Loader';

function SingleArticlePage() {
  const { slug } = useParams()

  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSingleArticle(slug)
      .then((data) => {
        setArticle(data.article);
      })
      .catch((err) => {
        setError('Failed to load the article.');
        console.error(err);
      });
  }, [slug]);

  if (error) return <h2>{error}</h2>;
  if (!article) return <Loader />;

  return (
    <div className="single-article-page">
      <h1>{article.title}</h1>

      <ReactMarkdown>
        {article.body}
      </ReactMarkdown>
    </div>
  );
}

export default SingleArticlePage;

