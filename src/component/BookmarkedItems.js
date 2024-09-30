import React, { useContext } from 'react';
import { BookmarkContext } from './BookmarkContext';

const BookmarkedItems = () => {
  const { bookmarkedArticles } = useContext(BookmarkContext);
  const { deleteBookmark } = useContext(BookmarkContext);
  return (
    <div>
      <h2>Bookmarked Articles</h2>
      {bookmarkedArticles.length > 0 ? (
        <ul>
          {bookmarkedArticles.map((article, index) => (
            <li key={index}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
              <button onClick={() => deleteBookmark(article)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles bookmarked yet.</p>
      )}
    </div>
  );
};

export default BookmarkedItems;
