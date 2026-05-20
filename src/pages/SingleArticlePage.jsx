import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import { fetchSingleArticle } from '../services/api';

function SingleArticlePage() {
  const { slug } = useParams();

  const [article, setArticle] = useState(null);

  // ADD THIS
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSingleArticle(slug)
      .then((data) => {
        setArticle(data.article);
      })

      // ADD THIS
      .catch((err) => {
        setError(
          'Failed to load the article.'
        );

        console.error(err);
      });
  }, [slug]);

  // ADD THIS
  if (error) {
    return <h2>{error}</h2>;
  }

  if (!article) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>{article.title}</h1>

      <ReactMarkdown>
        {article.body}
      </ReactMarkdown>
    </div>
  );
}

export default SingleArticlePage;