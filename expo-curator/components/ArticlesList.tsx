import React, { useEffect, useState } from 'react';
//import { getArticles, getArticleById } from 'utils/api.js';  // Assuming api.ts is the file containing the code
import { getArticles  } from '../utils/api';
type Article = {
    objectIDs: number;
    
  };

const ArticlesList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getArticles() //'technology', 'date');
        setArticles(response.articles);
      } catch (err) {
        setError('Failed to load articles.');
      }
    };

    fetchArticles();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.objectIDs}>{article.objectIDs}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesList;
