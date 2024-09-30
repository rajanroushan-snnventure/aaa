import React, {useContext} from 'react';
import './NewsItem.css'; 
import { BookmarkContext } from './BookmarkContext';

const NewsItem = (props) => {
  const { addBookmark, bookmarkedArticles } = useContext(BookmarkContext);
  const listData = props.listData;
  const isBookmarked = (article) => {
    return bookmarkedArticles.some(bookmarked => bookmarked.title === article.title);
  };
 
  return (
    <div className="news-container">
      {listData.filter(article => article.author !== null).map((article, index) => (
        <div className="news-card" key={index}>
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} className="news-image" />
          )}
          <div className="news-content">
            <h2 className="news-title">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p className="news-description">{article.description}</p>
            <button
              className="bookmark-button"
              onClick={() => addBookmark(article)}
            >
              {isBookmarked(article) ? 'Bookmarked' : 'Bookmark'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsItem;
